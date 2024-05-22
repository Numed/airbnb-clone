import { LuX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  generateValidationSchema,
  validationSchemas,
  validationSchemsCard,
} from "./validationSchema";
import { notifyError, notifySuccess, onError } from "../../utils/notifications";
import { UserServices } from "../../services/user";
import { getFieldLabel, getFieldType } from "../../utils/modal";
import { useDetailsInfo, useModalType, useOpenModal } from "../../store";
import { cn } from "../../utils";
import { useActiveUser } from "../../store";
import { useEffect, useState } from "react";

const ModalContainer = ({ children, styles }) => {
  const { setOpenedModal } = useOpenModal();
  const { setModalType } = useModalType();

  const onCloseHandler = (event) => {
    event.preventDefault();
    setModalType("none");
    setOpenedModal(false);
  };

  return (
    <div className="fixed inset-0 my-0 mx-auto z-[99] bg-blackishGreen/30 w-full h-full">
      <div className="absolute inset-0 my-0 mx-auto w-[90%] sm:w-[50vw] h-screen flex items-center justify-center">
        <div
          className={cn("bg-white h-1/2 w-full relative rounded-3xl", styles)}
        >
          <button
            className="absolute top-1 right-1 p-4"
            onClick={(e) => onCloseHandler(e)}
          >
            <LuX />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalProfile = ({ initial, type }) => {
  console.log(initial, type);
  const schema = generateValidationSchema(type);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { userMeUpdate } = UserServices();
  const { user, setUser } = useActiveUser();
  const { setOpenedModal } = useOpenModal();
  const { setModalType } = useModalType();

  const onSubmitProfile = (data) => {
    userMeUpdate(data)
      .then((updatedUser) => onUpdateProfile(updatedUser, data))
      .catch(onError);
  };

  const onUpdateProfile = (updatedUser, values) => {
    setOpenedModal(false);
    setModalType("none");

    if (values.birthday !== undefined) {
      updatedUser.birthday = values.birthday;
      delete values.birthday;
    }

    setUser(updatedUser);
    notifySuccess("Profile updated successfully");
  };

  return (
    <ModalContainer>
      <form
        onSubmit={handleSubmit(onSubmitProfile)}
        className="flex items-center justify-center h-full p-4"
      >
        <div>
          <label className="text-base text-colorText flex flex-col justify-center items-start mb-6 w-full font-bold">
            {getFieldLabel(type)}
            {errors[type] && (
              <span className="text-sm text-red-500">
                {errors[type]?.message}
              </span>
            )}
            <input
              className={cn(
                "mt-4 text-base font-normal text-black w-full p-2 border",
                errors[type] ? "border-red-500" : "border-blackishGreen"
              )}
              type={getFieldType(type)}
              defaultValue={initial}
              {...register(type)}
            />
          </label>
          <button
            className="p-3 bg-mintGreen text-white text-lg w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export const ModalSuccess = () => {
  const [seat, setSeat] = useState();
  const { setOpenedModal } = useOpenModal();
  const { setModalType } = useModalType();
  const { detailsInfo } = useDetailsInfo();
  const { createOrderedFlight, createOrderedRoom } = UserServices();

  const navigate = useNavigate();

  useEffect(() => {
    const { type, ...details } = detailsInfo;

    if (type === "room") {
      createOrderedRoom(details).then(onSuccessRoom).catch(onError);
    } else {
      createOrderedFlight(details).then(onSuccessFlight).catch(onError);
    }
  }, [detailsInfo]);

  const onSuccessRoom = () => {
    setOpenedModal(false);
    setModalType("none");
    notifySuccess("Room ordered successfully");
    navigate("/");
  };

  const onSuccessFlight = (data) => {
    setSeat(data.seat);
    setOpenedModal(false);
    setModalType("none");
    notifySuccess("Flight ordered successfully");
    navigate("/");
  };

  const onError = (error) => {
    notifyError(error);
  };

  const onCloseHandler = (event) => {
    event.preventDefault();
    setOpenedModal(false);
    setModalType("none");
    navigate("/");
  };

  return (
    <ModalContainer>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3 className="text-xl font-semibold text-blackishGreen mb-6 text-center">
          Your reservation has been confirmed!
        </h3>
        {detailsInfo.type === "flight" ? (
          <h2 className="text-2xl font-semibold">
            Your seat is:
            <span className="text-3xl text-bold text-mintGreen block text-center">
              {seat}
            </span>
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold">
            Your room is:
            <span className="text-3xl text-bold text-mintGreen block text-center">
              {detailsInfo?.name}
            </span>
          </h2>
        )}
        <Link
          onClick={onCloseHandler}
          className="mt-4 text-blackishGreen text-base py-2 px-4 rounded-md border border-mintGreen hover:bg-mintGreen hover:text-white transition"
        >
          Go to home page
        </Link>
      </div>
    </ModalContainer>
  );
};

export const ModalCard = () => {
  const user = useActiveUser((selector) => selector.user);
  const { addUserCard } = UserServices();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(validationSchemsCard),
  });

  const onSubmit = (data) => {
    const cardData = {
      cardNumber: data.number,
      expiryDate: "20" + data.valid.split("/").reverse().join("-"),
      cvc: +data.cvc,
      nameOnCard: data.name,
      typeCard: data.number.startsWith("4") ? "Visa" : "Mastercard",
    };
    addUserCard(cardData)
      .then(() => {
        notifySuccess("Card added successfully");
      })
      .catch((err) => notifyError(err.message));
    setValue("number", "");
    setValue("valid", "");
    setValue("cvc", "");
    setValue("name", "");
  };

  return (
    <ModalContainer styles={"h-[80%] sm:h-[85%] xl:h-[75%]"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-around sm:justify-start items-start w-full h-full sm:p-10 space-y-6"
      >
        <div className="w-full space-y-6">
          <h3 className="font-bold text-2xl sm:text-4xl text-black mb-4">
            Add New Card
          </h3>
          <label className="text-base text-blackishGreen flex flex-col justify-center items-start mb-6 w-full font-bold">
            Card Number
            {errors.number && (
              <span className="block text-sm text-red-500">
                {errors.number.message}
              </span>
            )}
            <div className="relative w-full">
              <input
                minLength={19}
                maxLength={19}
                {...register("number", { required: "Card number is required" })}
                onChange={(e) => {
                  const rawInput = e.target.value.replace(/\D/g, "");
                  const formattedInput = rawInput
                    .replace(/(\d{4})/g, "$1 ")
                    .trim();
                  setValue("number", formattedInput, { shouldValidate: true });
                }}
                className={cn(
                  "mt-4 text-base font-normal text-black w-full p-2 border pr-8",
                  errors.number ? "border-red-500" : "border-blackishGreen"
                )}
                type="text"
                required
              />
              <div className="flex items-center justify-end">
                {watch("number") && watch("number").startsWith("4") ? (
                  <FaCcVisa className="absolute right-2 top-[65%] transform -translate-y-1/2 w-6 h-6" />
                ) : watch("number") && watch("number").startsWith("5") ? (
                  <FaCcMastercard className="absolute right-2 top-[65%] transform -translate-y-1/2 w-6 h-6" />
                ) : null}
              </div>
            </div>
          </label>
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-center items-start w-1/2 mr-2">
              <label className="text-base text-colorText font-bold">
                Exp. Date
                {errors.valid && (
                  <span className="block text-sm text-red-500">
                    {errors.valid.message}
                  </span>
                )}
                <input
                  minLength={5}
                  maxLength={5}
                  {...register("valid", { required: "Exp. Date is required" })}
                  onChange={(e) => {
                    const rawInput = e.target.value.replace(/[^0-9/]/g, "");
                    const formattedInput = rawInput.replace(
                      /(\d{2})(\d)/,
                      "$1/$2"
                    );
                    setValue("valid", formattedInput, { shouldValidate: true });
                  }}
                  className={cn(
                    "mt-2 text-base font-normal text-black w-full p-2 border",
                    errors.valid ? "border-red-500" : "border-blackishGreen"
                  )}
                  type="text"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col justify-center items-start w-1/2 ml-2">
              <label className="text-base text-colorText font-bold">
                CVC
                {errors.cvc && (
                  <span className="block text-sm text-red-500">
                    {errors.cvc.message}
                  </span>
                )}
                <input
                  minLength={3}
                  maxLength={3}
                  {...register("cvc", { required: "CVC is required" })}
                  pattern="\d*"
                  className={cn(
                    "mt-2 text-base font-normal text-black w-full p-2 border",
                    errors.cvc ? "border-red-500" : "border-blackishGreen"
                  )}
                  type="text"
                  required
                />
              </label>
            </div>
          </div>
          <label className="text-base text-colorText flex flex-col justify-center items-start mb-6 w-full font-bold">
            Name on Card
            {errors.name && (
              <span className="block text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
            <input
              className={cn(
                "mt-4 text-base font-normal text-black w-full p-2 border",
                errors.name ? "border-red-500" : "border-blackishGreen"
              )}
              type="text"
              name="name"
              {...register("name", { required: "Name is required" })}
              required
            />
          </label>
        </div>
        <button
          className="p-3 bg-mintGreen/70 hover:bg-mintGreen transition-all text-white text-lg w-full mt-4"
          type="submit"
        >
          Add Card
        </button>
      </form>
    </ModalContainer>
  );
};
