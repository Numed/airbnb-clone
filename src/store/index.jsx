import { create } from "zustand";
import { appsCards, flightCards } from "../features/Contants";

export const useActiveUser = create((set) => ({
  user: {
    email: "admin@gmail.com",
    name: "Eugene Rara",
    token: "",
    recentSearch: [
      { id: 1, title: "Melbourne", places: 20 },
      { id: 2, title: "Sydney", places: 20 },
      { id: 3, title: "Brisbane", places: 20 },
    ],
    favorites: {
      hotelsList: [
        { id: 1, title: "Melbourne", places: 20 },
        { id: 2, title: "Sydney", places: 20 },
      ],
      flightsList: [],
    },
  },
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

export const useFlights = create((set) => ({
  flights: flightCards,
  setFlights: (state) => {
    set({ flights: state });
  },
}));

export const useApps = create((set) => ({
  apps: appsCards,
  setApps: (state) => {
    set({ apps: state });
  },
}));
