import { create } from "zustand";

export const useRecentSearch = create((set) => ({
  recentSearch: [],
  setRecentSearch: (newSearch) => {
    set((state) => ({
      recentSearch: [...state.recentSearch, newSearch],
    }));
  },
}));

export const useActiveUser = create((set) => ({
  user: {},
  setUser: (newUser) => {
    set(() => ({
      user: newUser,
    }));
  },
}));

export const useOpenMenu = create((set) => ({
  isOpenMenu: false,
  setIsOpenMenu: (state) => {
    set({ isOpenMenu: state });
  },
}));

export const useOpenSubmodal = create((set) => ({
  isOpenSubmodal: false,
  setOpenedSubmodal: (state) => {
    set({ isOpenSubmodal: state });
  },
}));

export const useOpenModal = create((set) => ({
  isOpenModal: false,
  setOpenedModal: (state) => {
    set({ isOpenModal: state });
  },
}));
