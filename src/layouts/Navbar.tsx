import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onOpenSidebar}
              className="p-2 rounded-md text-[#062e51] hover:bg-gray-100 lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div 
              className="text-xl font-bold text-[#062e51] ml-2 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              EduPlatform
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation('/home')}
              className="px-3 py-2 rounded-md text-[#062e51] hover:bg-gray-100 transition-colors"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="px-3 py-2 rounded-md text-[#062e51] hover:bg-gray-100 transition-colors"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => handleNavigation('/courses')}
              className="px-3 py-2 rounded-md text-[#062e51] hover:bg-gray-100 transition-colors"
            >
              Kurslar
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="px-3 py-2 rounded-md text-[#062e51] hover:bg-gray-100 transition-colors"
            >
              İletişim
            </button>
            <button
              onClick={() => handleNavigation('/login')}
              className="px-4 py-2 rounded-md bg-[#062e51] text-white hover:bg-[#0a4a7f] transition-colors"
            >
              Giriş Yap
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 