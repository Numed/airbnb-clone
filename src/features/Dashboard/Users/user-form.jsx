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
import { notifySuccess, onError } from "../../../utils/notifications";
import { useUsersData } from "../../../store";
import { AdminService } from "../../../services/admin";

const UserFormSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  isAdmin: z.boolean(),
});

export function UserForm({ id }) {
  const { updateUserById } = AdminService();
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
      isAdmin: false,
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

    updateUserById(data, data.id).then((response) => onSuccsses(response, data, data.id)).catch(onError);
  };

  const onSuccsses = (response, userUpdatedData, userId) => {
    notifySuccess(response);
    const updatedUser = usersData.filter((item) => item.id !== userId);
    setUsersData([...updatedUser, userUpdatedData]);
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
            name="isAdmin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "admin")
                      }
                      value={field.value ? "admin" : "user"}
                    >
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
            Edit
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
