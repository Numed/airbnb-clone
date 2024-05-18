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
import HotelModal from "./hotel-modal";

const DropdownMenuHotel = ({ hotel, onEdit, onDelete }) => {
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
          onClick={() => navigator.clipboard.writeText(hotel.name)}
        >
          Copy Name
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <HotelModal
          trigger={({ onClick }) => (
            <div
              onClick={onClick}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-300/20 hover:text-accent-foreground"
            >
              Update hotel data
            </div>
          )}
          hotel={hotel}
          onEdit={onEdit}
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onDelete(hotel.id)}>
          Delete hotel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuHotel;
