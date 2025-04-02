import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import Wrapper from "../../../../components/Wrapper";
import * as z from "zod";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from "@react-oauth/google";
import { useAuthStore } from '../../../../store/authStore';

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
    <Wrapper backgroundImage="../src/assets/login_resim.jpg">
      <div className="max-w-md w-full space-y-8 backdrop-blur-xl p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-amber-50">
            Hesabınıza giriş yapın
          </h2>
        </div>
        <form className="mt-8 space-y-6 text-amber-50" onSubmit={handleSubmit}>
          <div className="space-y-4">

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
              placeholder="E-posta adresi"
            />

            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
              placeholder="Şifre"
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
            onClick={() => navigate("/register")}
            variant="link"
            className="ml-2 text-amber-50 bg-amber-600"
          >
            Kayıt ol
          </Button>
        </div>

        <div className="mt-6 text-center">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
                type="standard"
                theme="outline"
                size="large"
                text="signin_with"
                shape="rectangular"
                locale="tr"
                width="300"
                auto_select={false}
                useOneTap={false}
                cancel_on_tap_outside={true}
              />
            </div>
          </GoogleOAuthProvider>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
