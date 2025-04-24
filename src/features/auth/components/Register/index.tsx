import type React from "react";
import { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import Wrapper from "../../../../components/Wrapper";
import {
	GoogleLogin,
	GoogleOAuthProvider,
	type CredentialResponse,
} from "@react-oauth/google";

interface SignupFormData {
	email: string;
	password: string;
}

const Signup = () => {
	const [formData, setFormData] = useState<SignupFormData>({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Giriş yapılıyor", formData);
	};

	const handleSuccess = (credentialResponse: CredentialResponse) => {
		console.log("Google login successful", credentialResponse);
	};

	const handleError = () => {
		console.error("Google login error");
	};

	return (
		<GoogleOAuthProvider
			clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
			onScriptLoadError={() => console.log("Script load error")}
		>
			<Wrapper backgroundImage="../src/assets/login_resim.jpg">
				<div className="max-w-md w-full space-y-8 backdrop-blur-xl p-8 rounded-xl shadow-xl">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-amber-50">
							Kayıt ol
						</h2>
					</div>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<div className="space-y-4 text-amber-50">
							<Input
								name="name"
								value=""
								placeholder="Kullanıcı adınızı giriniz"
								onChange={handleChange}
							/>
							<Input
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="E-posta adresinizi giriniz"
							/>
							<Input
								name="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Şifrenizi giriniz"
							/>
							<div className="flex justify-center">
								<GoogleLogin
									onSuccess={handleSuccess}
									onError={handleError}
									type="standard"
									theme="outline"
									size="large"
									text="continue_with"
									shape="rectangular"
									locale="tr"
									width="300"
									auto_select={false}
									useOneTap={false}
									cancel_on_tap_outside={true}
								/>
							</div>
							<Button
								type="submit"
								className="w-full ml-2 text-amber-50 bg-amber-600"
							>
								Kayıt ol
							</Button>
						</div>
					</form>
				</div>
			</Wrapper>
		</GoogleOAuthProvider>
	);
};

export default Signup;
