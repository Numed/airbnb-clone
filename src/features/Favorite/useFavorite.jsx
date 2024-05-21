import { useState } from "react";

import { onError } from "../../utils/notifications";
import { useActiveUser } from "../../store";
import { UserServices } from "../../services/user";

export const useFavorite = () => {
  const [flights, setFlights] = useState([]);
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useActiveUser();
  const { deleteFavoriteFlight, deleteFavoriteHotel } = UserServices();

  const onSetUser = (data) => {
    setFlights(data.favoritesFlights);
    setApps(data.favoritesHotels);
    setIsLoading(false);
  };

  const onFavoriteHandler = (e, id, isFlight) => {
    const formatedData = {
      userId: user.id,
      [isFlight ? "flightId" : "hotelId"]: id,
    };

    const deleteFavorite = isFlight
      ? deleteFavoriteFlight
      : deleteFavoriteHotel;

    return deleteFavorite(
      formatedData.userId,
      formatedData[isFlight ? "flightId" : "hotelId"]
    )
      .then(() =>
        onRemoved(e, formatedData[isFlight ? "flightId" : "hotelId"], isFlight)
      )
      .catch(onError);
  };

  const onRemoved = (e, data, isFlight) => {
    e.classList.remove("bg-mintGreen");
    if (isFlight) {
      setFlights(flights.filter((el) => el.id !== data));
    } else {
      setApps(apps.filter((el) => el.id !== data));
    }
  };

  return {
    onFavoriteHandler,
    onRemoved,
    onSetUser,
    flights,
    apps,
    isLoading,
    setIsLoading,
    setFlights,
    setApps,
  };
};
