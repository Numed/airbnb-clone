import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/Dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../components/Button";
import { Input } from "../../../components/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/Form";
import { useDropzone } from "react-dropzone";

const HotelFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  location: z.string(),
  description: z.string(),
  rating: z
    .string()
    .regex(/^\d+(\.\d{1})?$/)
    .refine((value) => value >= 0 && value <= 5, {
      message: "Rating must be between 0 and 5",
    }),
  price: z
    .string()
    .regex(/^\d+(\.\d+)?$/)
    .refine((value) => value >= 0, {
      message: "Price must be greater than or equal to 0",
    }),
  photo: z.string(),
});

const HotelForm = ({ hotel, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(HotelFormSchema),
    defaultValues: hotel || {
      name: "",
      location: "",
      description: "",
      rating: 0,
      price: 0,
      photo: "",
    },
  });

  const { register, handleSubmit, setValue, watch } = form;
  const photo = watch("photo");

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      setValue("photo", reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Name</FormLabel>
                    <Input {...field} placeholder="Enter the name" />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Location</FormLabel>
                    <Input {...field} placeholder="Enter the location" />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Description</FormLabel>
                    <Input {...field} placeholder="Enter the description" />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Rating</FormLabel>
                    <Input
                      type="number"
                      step="0.1"
                      {...field}
                      placeholder="Enter the rating"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Price</FormLabel>
                    <Input
                      type="number"
                      {...field}
                      placeholder="Enter the price"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div
            {...getRootProps()}
            className="border-dashed border-2 p-4 text-center"
          >
            <input {...getInputProps()} />
            {photo ? (
              <img src={photo} alt="Preview" className="max-h-48 mx-auto" />
            ) : (
              <p>Drag 'n' drop a photo, or click to select one</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="secondary">
            {hotel ? "Update" : "Add"} Hotel
          </Button>
        </div>
      </form>
    </Form>
  );
};

const HotelModal = ({ trigger, hotel, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (data) => {
    onEdit(data, hotel?.id);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger({ onClick: () => setIsOpen(true) })}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{hotel ? "Edit Hotel" : "Add Hotel"}</DialogTitle>
          <DialogDescription>
            {hotel ? "Edit Hotel Details" : "Add Hotel Details"}
          </DialogDescription>
        </DialogHeader>
        <HotelForm hotel={hotel} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default HotelModal;
