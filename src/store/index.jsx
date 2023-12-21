import { create } from "zustand";
import { appsCards, flightCards } from "../features/Contants";

export const useActiveUser = create((set) => ({
  user: null,
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
