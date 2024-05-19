import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../../components/DropMenu";
import Button from "../../../components/Button";
import { ModalForUserFrom } from "./user-modal";
import { useUsersData } from "../../../store";

export const DropdownMenuUser = ({ user }) => {
  const { usersData, setUsersData } = useUsersData((state) => ({
    usersData: state.usersData,
    setUsersData: state.setUsersData,
  }));

  const handleDeleteUser = (id) => {
    const newUsers = usersData.filter((item) => item.id !== id);
    setUsersData(newUsers);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="h-8 w-8 p-0">
          <span className="sr-only">Open Menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="mb-2">Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(user.email)}
        >
          Copy Email
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ModalForUserFrom
          trigger={
            <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-300/20 hover:text-accent-foreground">
              Update user data
            </div>
          }
          id={user.id}
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
          Delete user
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
