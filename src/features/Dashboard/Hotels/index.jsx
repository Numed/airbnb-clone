import React, { useState, useEffect } from "react";
import { AdminService } from "../../../services/admin";
import { notifyError } from "../../../utils/notifications";
import HotelModal from "./hotel-modal";
import Button from "../../../components/Button";
import DropdownMenuHotel from "./dropdown-menu";

const HotelsDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const { getAllApps, updateApps, addApps, deleteApps } = AdminService();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = () => {
    getAllApps()
      .then((response) => setHotels(response))
      .catch(notifyError);
  };

  const handleEdit = (data, id) => {
    if (id) {
      updateApps(data, id)
        .then(() => {
          setHotels((prevHotels) =>
            prevHotels.map((hotel) =>
              hotel.id === id ? { ...hotel, ...data } : hotel
            )
          );
        })
        .catch((error) => notifyError(error));
    } else {
      addApps(data)
        .then((response) => {
          setHotels((prevHotels) => [...prevHotels, response.data]);
        })
        .catch((error) => notifyError(error));
    }
  };

  const handleDelete = (id) => {
    deleteApps(id).then(() => {
      setHotels((prevHotels) =>
        prevHotels.filter((prevHotel) => prevHotel.id !== id)
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels Dashboard</h1>
      <ul>
        {hotels?.map((hotel) => (
          <li
            key={hotel.id}
            className="border p-2 mb-2 flex items-end justify-between"
          >
            <div className="flex items-start justify-start">
              <img
                src={hotel.photo}
                alt={hotel.alt}
                className="w-20 h-20 mr-2"
              />
              <div>
                <h3 className="mb-1 text-blackishGreen font-medium text-lg">
                  {hotel.name}
                </h3>
                <span className="text-gray-500 text-sm">{hotel.location}</span>
              </div>
            </div>
            <DropdownMenuHotel
              hotel={hotel}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
      <HotelModal
        trigger={({ onClick }) => (
          <Button
            onClick={onClick}
            className="bg-mintGreen text-white rounded-md"
            variant="primary"
          >
            Add Hotel
          </Button>
        )}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default HotelsDashboard;
