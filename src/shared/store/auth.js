import { create } from 'zustand';

const useAuthStore = create((set) => ({
  authUser: null,
  acceptAuth: (data) => set({ authUser: data }),
  revokeAuth: () => set({ authUser: null })
}));

export default useAuthStore;
