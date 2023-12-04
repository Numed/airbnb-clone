import { Field, Form, Formik } from "formik";
import { LuX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

import { generateValidationSchema } from "./validationSchema";
import { notifyError, notifySuccess } from "../../utils/notifications";
import { useRequestService } from "../../services";
import { getFieldLabel, getFieldType } from "../../utils/modal";
import { useOpenModal } from "../../store";
import { cn } from "../../utils";

const ModalContainer = ({ children }) => {
  const { setOpenedModal } = useOpenModal();
  return (
    <div className="fixed inset-0 my-0 mx-auto z-100 bg-blackishGreen/30 w-full h-full">
      <div className="absolute inset-0 my-0 mx-auto w-[90%] sm:w-[50vw] h-screen flex items-center justify-center">
        <div className="bg-white h-1/2 w-full relative rounded-3xl">
          <button
            className="absolute top-1 right-1 p-4"
            onClick={() => setOpenedModal(false)}
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

    updateFunction(values)
      .then((el) => notifySuccess(el.message))
      .catch(onError);
  };

  const onError = (error) => {
    notifyError(error);
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
  const navigate = useNavigate();

  const onCloseHandler = (event) => {
    event.preventDefault();
    setOpenedModal(false);
    navigate("/");
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
