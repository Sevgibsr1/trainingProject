import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  // Kullanıcının giriş yapıp yapmadığını kontrol et
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; //localstoragdenen aldığım veriler string hep o yüzden gerçekten true olup olmadığını kontrol eder 

  // Eğer giriş yapmamışsa login sayfasına yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; 
  }

  // Giriş yapmışsa alt route'ları render et
  return <Outlet />;
};

export default AuthGuard; 