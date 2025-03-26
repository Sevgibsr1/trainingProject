import { forwardRef } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ isOpen, onClose, onNavigate }, ref) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        ref={ref}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-[#062e51]">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <button
              onClick={() => {
                onNavigate('/profile');
                onClose();
              }}
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profil
            </button>

            <button
              onClick={() => {
                onNavigate('/my-courses');
                onClose();
              }}
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Kurslarım
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Gece Modu
            </button>

            <button
              onClick={() => {
                onNavigate('/settings');
                onClose();
              }}
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ayarlar
            </button>
          </nav>

          {/* Categories */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Kategoriler
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onNavigate('/courses/frontend');
                  onClose();
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Frontend Geliştirme
              </button>
              <button
                onClick={() => {
                  onNavigate('/courses/backend');
                  onClose();
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Backend Geliştirme
              </button>
              <button
                onClick={() => {
                  onNavigate('/courses/data-science');
                  onClose();
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Veri Bilimi
              </button>
              <button
                onClick={() => {
                  onNavigate('/courses/mobile');
                  onClose();
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Mobil Uygulama
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                onNavigate('/login');
                onClose();
              }}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-[#062e51] rounded-md hover:bg-[#0a4a7f] transition-colors"
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar; 