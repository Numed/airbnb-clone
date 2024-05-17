import { useEffect, useState } from "react";

import { columns } from "../../utils/columns";
import DashboardTable from "./Users/dashboard-table";
import { AdminService } from "../../services/admin";
import { notifyError } from "../../utils/notifications";
import { usersConstants } from "../../features/Contants";

const DashboardContainer = () => {
  const [users, setUsers] = useState(usersConstants);
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
        <p className="text-sm text-gray-500">List of all users in the system</p>
      </div>
      <DashboardTable columns={columns} data={users} />
    </div>
  );
};

export default DashboardContainer;
