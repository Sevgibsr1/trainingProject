import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';
import './index.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  // Layout props'larını hazırlama
  const layoutProps = {
    sidebarProps: {
      isOpen: isSidebarOpen,
      onClose: handleSidebarClose
    },
    navbarProps: {
      onOpenSidebar: handleSidebarToggle
    }
  };

  return (
    <BrowserRouter>
      <AppRouter layoutProps={layoutProps} />
    </BrowserRouter>
  );
};

export default App;
