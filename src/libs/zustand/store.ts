import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  reset: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  reset: () => set(() => ({ bears: 0 })),
}));
