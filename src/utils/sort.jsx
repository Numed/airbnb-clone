export const onSortApps = (apps, value, setApps) => {
    let sortedApps;
    switch (value) {
      case "newest":
        sortedApps = [...apps].sort((a, b) => b.date - a.date);
        break;
      case "rating":
        sortedApps = [...apps].sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedApps = [...apps].sort(
          (a, b) => b.advantages.length - a.advantages.length
        );
    }
    setApps(sortedApps);
  };

  export const onSortFlights = (flights, value, setFlights) => {
    let sortedFlights;
    switch (value) {
      case "newest":
        sortedFlights = [...flights].sort((a, b) => b.date - a.date);
        break;
      case "rating":
        sortedFlights = [...flights].sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedFlights = [...flights].sort(
          (a, b) => b.abbreviation - a.abbreviation
        );
    }
    setFlights(sortedFlights);
  };