import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IalertMsg {
  errorMsg: string;
  confirmMsg: string;
  response: boolean;
  handleResponse: () => void;
}

export const alertStore = create<IalertMsg, [['zustand/persist', IalertMsg]]>(
  persist((set) => ({
    errorMsg: 'Error Message',
    confirmMsg: 'Confirm Message',
    response: false,
    handleResponse: () => set((state) => ({ response: !state.response })),
  })),
);
