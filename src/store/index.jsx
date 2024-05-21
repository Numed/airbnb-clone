import { create } from "zustand";

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

export const useOrderedFlights = create((set) => ({
  orderedFlights: [],
  setOrderedFlights: (state) => {
    set({ orderedFlights: state });
  },
}));

export const useOrderedRooms = create((set) => ({
  orderedRooms: [],
  setOrderedRooms: (state) => {
    set({ orderedRooms: state });
  },
}));

export const useDetailsInfo = create((set) => ({
  detailsInfo: {},
  setDetailsInfo: (state) => {
    set({ detailsInfo: state });
  },
}));

export const useOrderedDetails = create((set) => ({
  orderedDetails: {},
  setOrderedDetails: (state) => {
    set(state);
  },
}));

export const useSelectedHotelsDate = create((set) => ({
  selectedHotelsDate: {},
  setSelectedHotelsDate: (state) => {
    set(state);
  },
}));

export const useSelectedFlightsDate = create((set) => ({
  selectedFlightsDate: {},
  setSelectedFlightsDate: (state) => {
    set(state);
  },
}));

export const useUsersData = create((set) => ({
  usersData: [],
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

export const useFlightsCities = create((set) => ({
  flightsCities: [],
  setFlightsCities: (state) => {
    set({ flightsCities: state });
  },
}));

export const useHotelsCities = create((set) => ({
  hotelsCities: [],
  setHotelsCities: (state) => {
    set({ hotelsCities: state });
  },
}));
