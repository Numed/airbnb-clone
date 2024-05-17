import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/Dialog";
import { UserForm } from './user-form'

export function ModalForUserFrom({ id, trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{id ? "Edit user" : "Add user"}</DialogTitle>
          <DialogDescription>{id ? "Edit User" : "Add user"}</DialogDescription>
        </DialogHeader>
        <UserForm id={id} />
      </DialogContent>
    </Dialog>
  );
}
