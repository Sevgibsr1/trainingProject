import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showSidebar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavbar = true, 
  showSidebar = true 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar onOpenSidebar={handleSidebarToggle} />}
      {showSidebar && <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />}
      <main className={showNavbar ? "pt-16" : ""}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 