import { Field, Form, Formik } from "formik";
import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

import { validationSchemas } from "./validationSchema";
import { notifyError, notifySuccses } from "../../utils/notifications";
import { useRequestService } from "../../services";

const ModalContainer = ({ children }) => {
  return (
    <div className="absolute inset-0 my-0 mx-auto z-100 bg-blackishGreen/30 w-screen h-screen">
      <div className="flex items-center justify-center bg-white relative">
        <button className="absolute top-0 right-0 p-4">
          <LuX />
        </button>
        {children}
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
  const onSubmitProfile = (values) => {
    if (type === "email") {
      updateEmail(values)
        .then((el) => notifySuccses(el.message))
        .catch(onError);
    } else if (type === "text") {
      updateName(values)
        .then((el) => notifySuccses(el.message))
        .catch(onError);
    } else if (type === "phone") {
      updatePhone(values)
        .then((el) => notifySuccses(el.message))
        .catch(onError);
    } else if (type === "password") {
      updatePassword(values)
        .then((el) => notifySuccses(el.message))
        .catch(onError);
    } else {
      updateDateOfBirth(values)
        .then((el) => notifySuccses(el.message))
        .catch(onError);
    }
  };

  const onError = (error) => {
    notifyError(error);
  };
  return (
    <ModalContainer>
      <Formik
        initialValues={{
          field: initial,
        }}
        onSubmit={(values, actions) => {
          onSubmitProfile(values);
          actions.resetForm();
        }}
        validationSchema={validationSchemas[type]}
      >
        {() => (
          <Form>
            {type === "email" && (
              <div>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  Email
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="email"
                    name="field"
                  />
                </label>
              </div>
            )}
            {type === "text" && (
              <div>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  Full Name
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="text"
                    name="field"
                  />
                </label>
              </div>
            )}
            {type === "phone" && (
              <div>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  Phone number
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="tel"
                    name="field"
                  />
                </label>
              </div>
            )}
            {type === "password" && (
              <div>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  Password
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="password"
                    name="field"
                  />
                </label>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  New password
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="password"
                    name="field"
                  />
                </label>
                <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                  Confirm new password
                  <Field
                    className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                    type="password"
                    name="field"
                  />
                </label>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export const ModalSuccess = () => {
  return (
    <ModalContainer>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-blackishGreen mb-4">
          Your reservation has been confirmed!
        </h2>
        <Link
          to="/"
          className="bg-colorPrimary text-white text-base py-2 px-4 rounded-md"
        >
          Go to home page
        </Link>
      </div>
    </ModalContainer>
  );
};
