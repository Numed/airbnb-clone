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
  user: null,
  setUser: (newUser) => {
    set((state) => ({
      user: [...state.user, newUser],
    }));
  },
}));
