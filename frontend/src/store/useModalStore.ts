import create from 'zustand';

export type ModalType = 'alert' | 'confirm';

export interface IModalStore {
  title: string;
  setTitle(text: string): void;
  message: string;
  setMessage(description: string): void;
  type: ModalType;
  setType(state: ModalType): void;
  revealed: boolean;
  setRevealed: (show: boolean) => void;
}
export const useModalStore = create<IModalStore>((set) => ({
  title: '',
  setTitle(title) {
    set((prev) => ({ ...prev, title }));
  },
  message: '',
  setMessage(message) {
    set((prev) => ({ ...prev, message }));
  },
  type: 'alert',
  setType(type) {
    set((prev) => ({ ...prev, type }));
  },
  revealed: false,
  setRevealed(revealed) {
    set((prev) => ({ ...prev, revealed }));
  },
}));
