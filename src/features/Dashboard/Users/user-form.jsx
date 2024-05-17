import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Input } from "../../../components/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/Form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/Select";
import { DialogFooter } from "../../../components/Dialog";
import Button from "../../../components/Button";
import { notifySuccess } from "../../../utils/notifications";
import { useUsersData } from "../../../store";

const UserFormSchrma = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
});
export function UserForm({ id }) {
  const users = useUsersData((selectore) => selectore.usersData);
  const form = useForm({
    resolver: zodResolver(UserFormSchrma),
    defaultValues: {
      id: id || "",
      name: "",
      email: "",
      role: "",
    },
  });

  useEffect(() => {
    let usersLocalStorage = JSON.parse(localStorage.getItem("users") || "[]");
    if (!usersLocalStorage.length) {
      usersLocalStorage = [...users];
    }
    if (id) {
      const user = usersLocalStorage.find((item) => item.id === id);
      if (user) {
        form.reset(user);
      }
    }
  }, [id, form]);

  const onSubmit = (data) => {
    let usersLocalStorage = JSON.parse(localStorage.getItem("users") || "[]");
    if (!usersLocalStorage.length) {
      usersLocalStorage = users;
    }

    if (id) {
      usersLocalStorage = usersLocalStorage.map((item) =>
        item.id === id ? { ...item, ...data } : item
      );
    } else {
      usersLocalStorage.push(data);
    }
    localStorage.setItem("users", JSON.stringify(usersLocalStorage));
    notifySuccess("User's data has been updated");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Name</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Enter the name"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Email</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Enter the email"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choose role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {["Admin", "User"].map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button type="submit" variant="secondary">
            Add
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
