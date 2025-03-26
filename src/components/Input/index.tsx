import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    validate?: (value: string) => string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, validate, onChange, ...props }, ref) => {
        const [validationError, setValidationError] = React.useState<string>();

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (validate) {
                const error = validate(e.target.value);
                setValidationError(error);
            }
            onChange?.(e);
        };

        return (
            <div className="flex flex-col gap-1.5">
                {label && (
                    <label className="text-sm font-medium text-amber-50">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "text-gray-900 placeholder:text-gray-800",
                        (error || validationError) && "border-red-500",
                        className
                    )}
                    onChange={handleChange}
                    ref={ref}
                    {...props}
                />
                {(error || validationError) && (
                    <span className="text-sm text-red-500">{error || validationError}</span>
                )}
            </div>
        )
    }
)

// Validasyon fonksiyonları
export const validateEmail = (value: string): string | undefined => {
    if (!value) return "Email alanı zorunluuuu";
    return undefined;
};

export const validatePassword = (value: string): string | undefined => {
    if (!value) return "Şifre alanı zorunluu";
    if (value.length < 6) return "Şifre en az 6 karakter olmalıdır";
    return undefined;
};

const EmailInput = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <Input
                type="email"
                label="Email"
                placeholder="ornek@email.com"
                validate={validateEmail}
                ref={ref}
                {...props}
            />
        )
    }
)

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <Input
                type="password"
                label="Şifre"
                placeholder="********"
                validate={validatePassword}
                ref={ref}
                {...props}
            />
        )
    }
)

EmailInput.displayName = "EmailInput"
PasswordInput.displayName = "PasswordInput"
Input.displayName = "Input"

export { Input, EmailInput, PasswordInput }


