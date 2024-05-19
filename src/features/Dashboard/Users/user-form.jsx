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

const UserFormSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  role: z.string(),
});

export function UserForm({ id }) {
  const { usersData, setUsersData } = useUsersData((state) => ({
    usersData: state.usersData,
    setUsersData: state.setUsersData,
  }));
  
  const form = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      id: id || "",
      username: "",
      email: "",
      role: "",
    },
  });

  useEffect(() => {
    if (id) {
      const user = usersData.find((item) => item.id === id);
      if (user) {
        form.reset(user);
      }
    }
  }, [id, form, usersData]);

  const onSubmit = (data) => {
    let updatedUsers = [...usersData];

    if (id) {
      updatedUsers = updatedUsers.map((item) =>
        item.id === id ? { ...item, ...data } : item
      );
    } else {
      updatedUsers.push(data);
    }

    setUsersData(updatedUsers);
    notifySuccess("User's data has been updated");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Username</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Enter the username"
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
                          {["admin", "user"].map((role) => (
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
