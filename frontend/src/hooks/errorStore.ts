import create from 'zustand';

// set 함수를 통해서만 상태를 변경할 수 있다
export const errorStore = create((set) => ({
  errorMsg: '',
  errorMessage: () => set((state) => ({ error: state.error })),
}));
