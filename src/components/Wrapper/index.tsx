import React from "react";

interface WrapperProps {
    children: React.ReactNode;
    backgroundImage?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, backgroundImage }) => {
    return (
        <div 
            className="min-h-screen w-full flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {children}
        </div>
    );
};

export default Wrapper; 