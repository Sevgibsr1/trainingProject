import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput } from "../../src/components/Input";
import { Button } from "../../src/components/ui/button";
import Wrapper from "../../src/components/Wrapper";
import * as z from "zod";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from "@react-oauth/google";
import { useAuthStore } from '../../src/store/authStore';

// Zod ile doğrulama yapıyoruz burdaa
const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFonpomrmData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFonpomrmData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const validationResult = loginSchema.safeParse(formData);

      if (!validationResult.success) {
        setError(validationResult.error.errors[0].message);
        return;
      }

      const success = await login(formData.email, formData.password);
      if (success) {
        setError('');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        setError('E-posta veya şifre hatalı');
      }
    } catch (error) {
      setError('Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Google Login başarı ve hata sonucu dönecek şey
  const handleGoogleSuccess = (response: CredentialResponse) => {
    console.log("Google ile giriş başarılı:", response);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/home');
  };

  const handleGoogleFailure = () => {
    console.error("Google ile giriş hatası");
    setError("Google ile giriş yapılamadı.");
  };

  return (
    <Wrapper backgroundImage="assets/login_resim.jpg">
      <div className="max-w-md w-full space-y-8 backdrop-blur-xl p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-amber-50">
            Hesabınıza giriş yapın
          </h2>
        </div>
        <form className="mt-8 space-y-6 text-amber-50" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <EmailInput
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <PasswordInput
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button 
              type="submit" 
              className="w-full text-amber-50 bg-amber-600"
              disabled={isLoading}
            >
              {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm">
          <span className="text-amber-50">Hesabınız yok mu?</span>
          <Button
            onClick={() => navigate("/signup")}
            variant="link"
            className="ml-2 text-amber-50 bg-amber-600"
          >
            Kayıt ol
          </Button>
        </div>

        <div className="mt-6 text-center">
          <GoogleOAuthProvider clientId="529993557588-vrqpeqdc09nk5bl4141frv0f4oejkn55.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
