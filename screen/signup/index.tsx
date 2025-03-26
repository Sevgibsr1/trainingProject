import React, { useState } from "react";
import { EmailInput, Input, PasswordInput } from "../../src/components/Input";
import { Button } from "../../src/components/ui/button";
import Wrapper from "../../src/components/Wrapper";


interface SignupFormData {
    email: string;
    password: string;
}

const Signup = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        email: "",
        password: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Giriş yapılıyor", formData);
    };


    return (
        <Wrapper backgroundImage="/login_resim.jpg">
            <div className="max-w-md w-full space-y-8 backdrop-blur-xl p-8 rounded-xl shadow-xl text-amber-50">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-amber-50">
                        Kayıt ol
                    </h2>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
                    <div className="space-y-4 text-amber-50">
                        <Input
                            name="name"
                            label="Kullanıcı Adı"
                            value=""
                            placeholder="Kullanıcı adınızı giriniz"
                        >
                        </Input>
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
                        <Button type="submit" className="w-full ml-2 text-amber-50 bg-amber-600">Kayıt ol</Button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};



export default Signup;