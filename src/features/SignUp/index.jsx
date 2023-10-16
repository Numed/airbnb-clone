import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";

import logo from "../../img/logo/logo.png";
import signInPicture from "../../img/sign-in/img.png";
import { SignupSchema } from "./validationSchema";

const SignupContainer = () => {
  return (
    <section className="flex items-center justify-center py-4">
      <img
        className="w-[38.5rem] h-[51rem] mr-10"
        src={signInPicture}
        alt="Sign Up"
      />
      <div className="flex items-center justify-center space-x-28">
        <div>
          <Link to="/" className="flex h-auto w-auto">
            <img className="mb-16" src={logo} alt="logo" />
          </Link>
          <div>
            <h2 className="text-black text-4xl mb-4 font-bold">Sign up</h2>
            <h3 className="text-blackishGreen/75 text-base mb-12">
              Let&apos;s get you all st up so you can access your personal
              account.
            </h3>
            <div>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                }}
                validationSchema={SignupSchema}
              >
                {(props) => (
                  <Form>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-1/2">
                        First Name
                        <Field
                          className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                          type="text"
                          name="firstName"
                          placeholder="Your Name"
                        />
                      </label>
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-1/2">
                        Last Name
                        <Field
                          className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                          type="text"
                          name="lastName"
                          placeholder="Your Last Name"
                        />
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-1/2">
                        Email
                        <Field
                          className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                          type="email"
                          name="email"
                          placeholder="Your email"
                        />
                      </label>
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-1/2">
                        Phone Number
                        <Field
                          className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                        />
                      </label>
                    </div>
                    <div className="w-full">
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full">
                        Password
                        <Field
                          className="text-base text-black mt-2 p-2 w-full"
                          type="email"
                          name="password"
                          placeholder="Your password"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full">
                        Confirm Password
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
                      <button className="bg-mintGreen/80 hover:bg-mintGreen transition-all text-blackishGreen flex flex-col mt-11 w-full p-4 items-center justify-center">
                        Login
                      </button>
                      <div className="flex justify-between mt-4">
                        <h3 className="text-sm font-semibold text-blackishGreen w-full text-center">
                          Already have an account?{" "}
                          <Link className="text-red-400" href="/sign-in">
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
      </div>
    </section>
  );
};

export default SignupContainer;
