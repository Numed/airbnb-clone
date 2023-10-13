import { create } from "zustand";

export const useRecentSearch = create((set) => ({
  recentSearch: [],
  setRecentSearch: (newSearch) => {
    set((state) => ({
      recentSearch: [...state.recentSearch, newSearch],
    }));
  },
}));
