import create from 'zustand';

interface IalertMsg {
  errorMsg: string;
  confirmMsg: string;
  response: boolean;
  handleResponse: () => void;
}

export const alertStore = create<IalertMsg>((set) => ({
  errorMsg: 'Error Message',
  confirmMsg: 'Confirm Message',
  response: false,
  handleResponse: () => set((state) => ({ response: !state.response })),
}));
