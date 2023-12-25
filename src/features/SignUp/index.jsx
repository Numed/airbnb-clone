import React from "react";
import { Form, Field, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { useRequestService } from "../../services";
import { notifyError, notifySuccess } from "../../utils/notifications";
import { useActiveUser } from "../../store";
import logo from "../../img/logo/logo.png";
import signInPicture from "../../img/sign-in/img.png";
import { SignupSchema } from "./validationSchema";

const SignUpContainer = () => {
  const { signUp } = useRequestService();
  const { setUser } = useActiveUser();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    data = {
      ...data,
      username: data.firstName + " " + data.lastName,
    };

    signUp(data)
      .then(onSuccess)
      .catch((err) => notifyError(err));
  };

  const onSuccess = (data) => {
    setUser(data);
    localStorage.setItem("token", data?.token);
    notifySuccess(data?.message);
    navigate("/");
  };
  
  return (
    <section className="mt-10 lg:mt-0 flex items-center justify-center py-4">
      <img
        className="hidden xl:block xl:h-full xl:scale-100 lg:w-[40%] xl:w-[38.5rem] h-[51rem] mr-10 scale-75"
        src={signInPicture}
        alt="Sign Up"
      />
      <div className="flex items-center justify-center space-x-28">
        <div>
          <Link
            to="/"
            className="flex items-center justify-center sm:justify-start h-auto w-auto"
          >
            <img className="mb-8 xl:mb-16" src={logo} alt="logo" />
          </Link>
          <div className="px-5 sm:px-0">
            <h2 className="text-black text-4xl mb-4 font-bold">Sign up</h2>
            <h3 className="text-blackishGreen/75 text-base mb-12">
              Let&apos;s get you all set up so you can access your personal
              account.
            </h3>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
              }}
              validationSchema={SignupSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-2">
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full sm:w-1/2">
                      First Name
                      {errors.firstName && touched.firstName && (
                        <span className="text-red-400 text-sm">
                          {errors.firstName}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                        type="text"
                        name="firstName"
                        placeholder="Your Name"
                      />
                    </label>
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full sm:w-1/2">
                      Last Name
                      {errors.lastName && touched.lastName && (
                        <span className="text-red-400 text-sm">
                          {errors.lastName}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                        type="text"
                        name="lastName"
                        placeholder="Your Last Name"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-2">
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full sm:w-1/2">
                      Email
                      {errors.email && touched.email && (
                        <span className="text-red-400 text-sm">
                          {errors.email}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                        type="email"
                        name="email"
                        placeholder="Your email"
                      />
                    </label>
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full sm:w-1/2">
                      Phone Number
                      {errors.phone && touched.phone && (
                        <span className="text-red-400 text-sm">
                          {errors.phone}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                        type="text"
                        name="phone"
                        placeholder="Your phone number"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full">
                      Password
                      {errors.password && touched.password && (
                        <span className="text-red-400 text-sm">
                          {errors.password}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 p-2 w-full"
                        type="password"
                        name="password"
                        placeholder="Your password"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full">
                      Confirm Password
                      {errors.confirmPassword && touched.confirmPassword && (
                        <span className="text-red-400 text-sm">
                          {errors.confirmPassword}
                        </span>
                      )}
                      <Field
                        className="text-base text-black mt-2 w-full p-2"
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter your password again"
                      />
                    </label>
                  </div>
                  <div>
                    <input
                      className="accent-blackishGreen mr-1 mt-1"
                      type="checkbox"
                    />
                    <span className="text-blackishGreen text-sm">
                      I agree to all the{" "}
                      <Link to="/" className="text-red-400">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link to="/" className="text-red-400">
                        Privacy Policies
                      </Link>
                    </span>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-mintGreen/80 hover:bg-mintGreen transition-all text-blackishGreen flex flex-col mt-11 w-full p-4 items-center justify-center"
                    >
                      Sign up
                    </button>
                    <div className="flex justify-between mt-4">
                      <h3 className="text-sm font-semibold text-blackishGreen w-full text-center">
                        Already have an account?{" "}
                        <Link className="text-red-400" to="/sign-in">
                          Sign in
                        </Link>
                      </h3>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpContainer;
