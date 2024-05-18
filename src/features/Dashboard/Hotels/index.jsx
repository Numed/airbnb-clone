import React, { useState, useEffect } from "react";
import { AdminService } from "../../../services/admin";
import { notifyError } from "../../../utils/notifications";
import HotelModal from "./hotel-modal";
import Button from "../../../components/Button";
import DropdownMenuHotel from "./dropdown-menu";

const HotelsDashboard = () => {
  const [hotels, setHotels] = useState([
    {
      id: "6571fcd7b0432071ab429b83",
      name: "Eresin Hotels Sultanahmet - Boutique Class",
      alt: "Eresin Hotels Sultanahmet - Boutique Class",
      slug: "eresin_hotels_sultanahmet_-_boutique_class",
      location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
      description:
        "Indulge in the charm of Eresin Hotels Sultanahmet - Boutique Class, situated at Kucukayasofya No. 40, Sultanahmet, Istanbul 34022. Embrace a blend of tradition and modernity in the heart of Istanbul with a rating of 4.3 and an affordable price of $104. Immerse yourself in the allure of our boutique hotel, where sophistication meets comfort. Explore the cultural richness of Sultanahmet and experience a memorable stay at Eresin Hotels Sultanahmet - Boutique Class.",
      rating: 4.3,
      photo: "https://placehold.co/200",
      price: 104,
      reviews: [
        {
          id: 7,
          name: "Alexander",
          rating: 4.2,
          comment:
            "Had a delightful stay at Eresin Hotels Sultanahmet - Boutique Class! The charm of this hotel, situated at Kucukayasofya No. 40 Sultanahmet, Istanbul, is truly captivating. The attention to detail, combined with excellent service, made my experience memorable. Though I initially rated it 4.2, I must say the overall ambiance and hospitality deserve a solid 4.3. Highly recommended for a wonderful stay at an affordable price!",
        },
        {
          id: 8,
          name: "Mary",
          rating: 4.4,
          comment:
            "Absolutely enchanted by the allure of Eresin Hotels Sultanahmet - Boutique Class! The intimate setting at Kucukayasofya No. 40 Sultanahmet, Istanbul, made our stay incredibly special. The attention to detail and the warm hospitality left a lasting impression. I'm thrilled to rate this gem 4.4 – a testament to the delightful experience we had. Highly recommend for a romantic and charming getaway!",
        },
      ],
      rooms: [
        {
          id: "4",
          name: " two people room",
          photo: "testphoto",
          doubleBeds: 1,
          singleBeds: 0,
          price: 150,
          amount: 5,
        },
        {
          id: "5",
          name: " two people room",
          photo: "testphoto",
          doubleBeds: 1,
          singleBeds: 0,
          price: 150,
          amount: 5,
        },
      ],
    },
    {
      id: "6571fd27b0432071ab429b84",
      name: "Luxury in Mind One of a Kind Center Gem",
      alt: "Luxury in Mind One of a Kind Center Gem",
      slug: "luxury_in_mind_one_of_a_kind_center_gem",
      location: "Bohdana Khmel'nyts'koho St, 10, Kyiv, Ukraine",
      description:
        "Experience unparalleled luxury at Luxury in Mind One of a Kind Center Gem, located at Bohdana Khmel'nyts'koho St, 10, Kyiv, Ukraine. With a distinctive rating of 3.9 and an inviting price of $154, our hotel is a unique haven in the heart of Kyiv. Immerse yourself in sophistication and comfort, where every detail is designed with luxury in mind. Explore the vibrant surroundings and indulge in a one-of-a-kind stay at Luxury in Mind One of a Kind Center Gem.",
      rating: 3.9,
      photo: "https://placehold.co/200",
      price: 154,
      reviews: null,
      rooms: [],
    },
    {
      id: "6571fd78b0432071ab429b85",
      name: "Luxury In Mind Highscale Studio",
      alt: "Luxury In Mind Highscale Studio",
      slug: "luxury_in_mind_highscale_studio",
      location: "Bohdana Khmel'nyts'koho St, 10, Kyiv, Ukraine",
      description:
        "Indulge in the epitome of opulence at Luxury In Mind Highscale Studio, located at Bohdana Khmel'nyts'koho St, 10, Kyiv, Ukraine. With a perfect rating of 5 and a luxurious price of $400, our studio is a sophisticated retreat in the heart of Kyiv. Immerse yourself in the lavish ambiance, where every detail is designed for high-scale comfort. Experience unparalleled luxury, with 30 exceptional advantages waiting to enhance your stay at Luxury In Mind Highscale Studio.",
      rating: 5,
      photo: "https://placehold.co/200",
      price: 400,
      reviews: null,
      rooms: [],
    },
  ]);
  const { getAllApps, updateApps, addApps, deleteApps } = AdminService();

  useEffect(() => {
    // fetchHotels();
  }, []);

  const fetchHotels = () => {
    getAllApps()
      .then((response) => setHotels(response.data))
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
        {hotels.map((hotel) => (
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
