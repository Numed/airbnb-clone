import { create } from "zustand";
import { usersConstants } from "../features/Contants";

export const useActiveUser = create((set) => ({
  user: {
    id: "1",
    username: "John Doe",
    email: "john-doe@gmail.com",
    password: "fdsafasd213412",
    role: "admin",
    cards: [
      { id: 1, number: "4111111111111535", valid: "12/25", type: "visa" },
      { id: 2, number: "5111111111111636", valid: "12/25", type: "mastercard" },
    ],
    orderRooms: [],
    orderFlights: [
      {
        userId: "1",
        flightId: "1",
        seat: "46B",
      },
      {
        userId: "1",
        flightId: "2",
        seat: "1A",
      },
    ],
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

export const useModalType = create((set) => ({
  modalType: "none",
  setModalType: (state) => {
    set({ modalType: state });
  },
}));

export const useFlights = create((set) => ({
  flights: [],
  setFlights: (state) => {
    set({ flights: state });
  },
}));

export const useApps = create((set) => ({
  apps: [],
  setApps: (state) => {
    set({ apps: state });
  },
}));

export const useFetchingData = create((set) => ({
  isFetchingData: false,
  setIsFetchingData: (state) => {
    set({ isFetchingData: state });
  },
}));

export const useIsLoading = create((set) => ({
  isLoading: false,
  setIsLoading: (state) => {
    set({ isLoading: state });
  },
}));

export const useCountApps = create((set) => ({
  countApps: 0,
  setCountApps: (state) => {
    set({ countApps: state });
  },
}));

export const useCountFlights = create((set) => ({
  countFlights: 0,
  setCountFlights: (state) => {
    set({ countFlights: state });
  },
}));

export const useUsersData = create((set) => ({
  usersData: usersConstants,
  setUsersData: (state) => {
    set({ usersData: state });
  },
}));

export const useHotelsData = create((set) => ({
  hotelsData: [],
  setHotelsData: (state) => {
    set({ hotelsData: state });
  },
}));
