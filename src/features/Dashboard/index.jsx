import { useEffect, useState } from "react";

import { columns } from "../../utils/columns";
import DashboardTable from "./Users/dashboard-table";
import { AdminService } from "../../services/admin";
import { notifyError } from "../../utils/notifications";
import { usersConstants } from "../../features/Contants";
import HotelsDashboard from "./Hotels";
import { Hotel, Users } from "lucide-react";

const DashboardContainer = () => {
  const [users, setUsers] = useState(usersConstants);
  const [activeTab, setActiveTab] = useState("users");
  const { getAllUsers } = AdminService();

  useEffect(() => {
    if (!users.length) {
      getAllUsers()
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          notifyError(error);
        });
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="my-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Dashboard
        </h1>
        <div className="my-4 flex items-center justify-center">
          <button
            onClick={() => setActiveTab("users")}
            className={`${
              activeTab === "users"
                ? "bg-mintGreen text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-l-md flex items-center justify-center`}
          >
            <Users className="mr-2 w-4 h-4" />
            Users
          </button>
          <button
            onClick={() => setActiveTab("hotels")}
            className={`${
              activeTab === "hotels"
                ? "bg-mintGreen text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-r-md flex items-center justify-center`}
          >
            <Hotel className="mr-2 w-4 h-4" />
            Hotels
          </button>
        </div>
      </div>
      {activeTab === "users" ? (
        <DashboardTable columns={columns} data={users} />
      ) : (
        <HotelsDashboard />
      )}
    </div>
  );
};

export default DashboardContainer;
