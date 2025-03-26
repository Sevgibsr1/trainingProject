import { create } from 'zustand'  //zustand kütüphanesi yani state yönetimi iççinn
import { persist } from 'zustand/middleware' //middleware ile localStorageye kayıt loginde yazdığım kişiyi tutuyorum 

interface User {  //email ve giriş yapılınca true yapıyoruz
  email: string;
  isAuthenticated: boolean;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<boolean>; // kullanıcı giriş kontrolü şu an demo olarak segi yi verdim mesela 
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist( //middleware kullanılarak veriler localstorage de saklanıyor 
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),  //kullanıcı bilgilerini güncelleme için yazdım
      login: async (email, password) => {
        // Demo giriş kontrolü
        if (email === "segi@gmail.com" && password === "123444") {  
          set({ 
            user: { 
              email, 
              isAuthenticated: true 
            } 
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage', // localStorage'da saklanacak isim
    }
  )
); 