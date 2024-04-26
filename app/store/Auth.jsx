import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isAuth: true,
    toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
    
}));