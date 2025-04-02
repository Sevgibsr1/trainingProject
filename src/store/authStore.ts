import { create } from 'zustand'  //zustand kütüphanesi yani state yönetimi iççinn
import { persist } from 'zustand/middleware' //middleware ile localStorageye kayıt loginde yazdığım kişiyi tutuyorum 

interface User {  //email ve giriş yapılınca true yapıyoruz
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<boolean>; // kullanıcı giriş kontrolü şu an demo olarak segi yi verdim mesela 
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist( //middleware kullanılarak veriler localstorage de saklanıyor 
    (set) => ({
      isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
      user: null,
      setUser: (user) => set({ user }),  //kullanıcı bilgilerini güncelleme için yazdım
      login: async (email: string, password: string) => {
        // Burada gerçek API çağrısı yapılacak
        if (email && password) {
          set({ isAuthenticated: true, user: { email } });
          return true;
        }
        return false;
      },
      logout: () => {
        localStorage.removeItem('isAuthenticated');
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'auth-storage', // localStorage'da saklanacak isim
    }
  )
); 