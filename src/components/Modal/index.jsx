import { Field, Form, Formik } from "formik";
import { LuX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";

import {
  generateValidationSchema,
  validationSchemsCard,
} from "./validationSchema";
import { notifySuccess, onError } from "../../utils/notifications";
import { useRequestService } from "../../services";
import { getFieldLabel, getFieldType } from "../../utils/modal";
import { useModalType, useOpenModal, useUserProfile } from "../../store";
import { cn } from "../../utils";
import { useActiveUser } from "../../store";

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
  const {
    updatePassword,
    updateAddress,
    updateDateOfBirth,
    updateEmail,
    updateName,
    updatePhone,
  } = useRequestService();
  const { user, setUser } = useActiveUser();
  const { userProfile, setUserProfile } = useUserProfile();
  const { setOpenedModal } = useOpenModal();
  const { setModalType } = useModalType();

  const typeFunctionMap = {
    email: updateEmail,
    text: updateName,
    phone: updatePhone,
    password: updatePassword,
    address: updateAddress,
    default: updateDateOfBirth,
  };

  const onSubmitProfile = (values) => {
    const updateFunction = typeFunctionMap[type] || typeFunctionMap.default;

    if (user.id !== null) {
      updateFunction(values, user.id)
        .then((el) => onUpdateProfile(el, values))
        .catch(onError);
    }
  };

  const onUpdateProfile = (data, values) => {
    setOpenedModal(false);
    setModalType("none");
    if (values.birthday !== undefined) {
      values.dataBirth = values.birthday;
      delete values.birthday;
    }
    setUserProfile((user) => ({
      ...user,
      ...values,
    }));
    setUser(userProfile);
    notifySuccess(data);
  };

  return (
    <ModalContainer>
      <Formik
        initialValues={{
          [type]: initial,
        }}
        onSubmit={(values, actions) => {
          onSubmitProfile(values);
          actions.resetForm();
        }}
        validationSchema={generateValidationSchema(type)}
      >
        {({ errors, touched }) => (
          <Form className="flex items-center justify-center h-full p-4">
            <div>
              <label className="text-base text-colorText flex flex-col justify-center items-start mb-6 w-full font-bold">
                {getFieldLabel(type)}
                {errors[type] && touched[type] ? (
                  <span className="text-sm text-red-500">{errors[type]}</span>
                ) : null}
                <Field
                  className={cn(
                    "mt-4 text-base font-normal text-black w-full p-2 border",
                    errors[type] && touched[type]
                      ? "border-red-500"
                      : "border-blackishGreen"
                  )}
                  type={getFieldType(type)}
                  name={type}
                  required
                />
              </label>
              <button
                className="p-3 bg-mintGreen text-white text-lg w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export const ModalSuccess = () => {
  const { setOpenedModal } = useOpenModal();
  const { setModalType } = useModalType();
  const navigate = useNavigate();

  const onCloseHandler = (event) => {
    event.preventDefault();
    setOpenedModal(false);
    navigate("/");
    setModalType("none");
  };

  return (
    <ModalContainer>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-2xl font-bold text-blackishGreen mb-4 text-center">
          Your reservation has been confirmed!
        </h2>
        <Link
          onClick={(event) => onCloseHandler(event)}
          className="text-blackishGreen text-base py-2 px-4 rounded-md underline underline-offset-4 underline-blackishGreen"
        >
          Go to home page
        </Link>
      </div>
    </ModalContainer>
  );
};

export const ModalCard = () => {
  return (
    <ModalContainer styles={"h-[80%] sm:h-[85%] xl:h-[75%]"}>
      <div className="w-full h-full p-4">
        <Formik
          initialValues={{
            number: "",
            valid: "",
            cvc: "",
            name: "",
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
          validationSchema={validationSchemsCard}
        >
          {({ errors, touched, values }) => (
            <Form className="flex flex-col justify-center sm:justify-start items-start w-full h-full sm:p-10 space-y-6">
              <h3 className="font-bold text-2xl sm:text-4xl text-black">
                Add New Card
              </h3>
              <label className="text-base text-blackishGreen flex flex-col justify-center items-start mb-6 w-full font-bold">
                Card Number
                {errors.number && touched.number ? (
                  <span className="block text-sm text-red-500">
                    {errors.number}
                  </span>
                ) : null}
                <Field name="number">
                  {({ field, form }) => (
                    <div className="relative w-full flex items-center justify-between">
                      <input
                        minLength={19}
                        maxLength={19}
                        {...field}
                        onChange={(e) => {
                          const rawInput = e.target.value.replace(/\D/g, "");
                          const formattedInput = rawInput
                            .replace(/(\d{4})/g, "$1 ")
                            .trim();
                          form.setFieldValue("number", formattedInput);
                        }}
                        className={cn(
                          "mt-4 text-base font-normal text-black w-full p-2 border",
                          errors.number && touched.number
                            ? "border-red-500"
                            : "border-blackishGreen"
                        )}
                        type="text"
                        required
                      />
                      <div className="absolute right-2 top-[60%] transform -translate-y-1/2">
                        {values.number.startsWith("4") ? (
                          <FaCcVisa className="w-6 h-6" />
                        ) : values.number.startsWith("5") ? (
                          <FaCcMastercard className="w-6 h-6" />
                        ) : null}
                      </div>
                    </div>
                  )}
                </Field>
              </label>
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-center items-start w-1/2 mr-2">
                  <label className="text-base text-colorText font-bold">
                    Exp. Date
                    {errors.valid && touched.valid ? (
                      <span className="block text-sm text-red-500">
                        {errors.valid}
                      </span>
                    ) : null}
                    <Field name="valid">
                      {({ field, form }) => (
                        <div className="relative w-full flex items-center justify-between">
                          <input
                            minLength={5}
                            maxLength={5}
                            {...field}
                            onChange={(e) => {
                              const rawInput = e.target.value.replace(
                                /[^0-9/]/g,
                                ""
                              );
                              const formattedInput = rawInput.replace(
                                /(\d{2})(\d)/,
                                "$1/$2"
                              );
                              form.setFieldValue("valid", formattedInput);
                            }}
                            className={cn(
                              "mt-2 text-base font-normal text-black w-full p-2 border",
                              errors.valid && touched.valid
                                ? "border-red-500"
                                : "border-blackishGreen"
                            )}
                            type="text"
                            required
                          />
                        </div>
                      )}
                    </Field>
                  </label>
                </div>
                <div className="flex flex-col justify-center items-start w-1/2 ml-2">
                  <label className="text-base text-colorText font-bold">
                    CVC
                    {errors.cvc && touched.cvc ? (
                      <span className="block text-sm text-red-500">
                        {errors.cvc}
                      </span>
                    ) : null}
                    <Field name="cvc">
                      {({ field }) => (
                        <div className="relative w-full flex items-center justify-between">
                          <input
                            minLength={3}
                            maxLength={3}
                            {...field}
                            pattern="\d*"
                            className={cn(
                              "mt-2 text-base font-normal text-black w-full p-2 border",
                              errors.cvc && touched.cvc
                                ? "border-red-500"
                                : "border-blackishGreen"
                            )}
                            type="text"
                            required
                          />
                        </div>
                      )}
                    </Field>
                  </label>
                </div>
              </div>
              <label className="text-base text-colorText flex flex-col justify-center items-start mb-6 w-full font-bold">
                Name on Card
                {errors.name && touched.name ? (
                  <span className="block text-sm text-red-500">
                    {errors.name}
                  </span>
                ) : null}
                <Field
                  className={cn(
                    "mt-4 text-base font-normal text-black w-full p-2 border",
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-blackishGreen"
                  )}
                  type="text"
                  name="name"
                  required
                />
              </label>
              <button
                className="p-3 bg-mintGreen/70 hover:bg-mintGreen transition-all text-white text-lg w-full mt-4"
                type="submit"
              >
                Add Card
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalContainer>
  );
};
