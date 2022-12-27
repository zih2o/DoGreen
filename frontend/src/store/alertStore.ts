import create from 'zustand';

interface IalertMsg {
  errorMsg: string;
  confirmMsg: string;
  handleConfirmMsg: () => void;
}

export const alertStore = create<IalertMsg>((set) => ({
  errorMsg: 'Error Message',
  confirmMsg: 'Confirm Message',
  handleConfirmMsg: () => set((state) => ({ confirmMsg: state.confirmMsg })),
}));
