import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";

import logo from "../../img/logo/logo.png";
import signInPicture from "../../img/sign-in/img.png";
import { SigninSchema } from "./validationSchema";

const SigninContainer = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="flex items-center justify-center space-x-28">
        <div>
          <img className="mb-16" src={logo} alt="logo" />
          <div>
            <h2 className="text-black text-4xl mb-4 font-bold">Login</h2>
            <h3 className="text-blackishGreen/75 text-base mb-12">
              Login to access your Golobe account
            </h3>
            <div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                }}
                validationSchema={SigninSchema}
              >
                {(props) => (
                  <Form>
                    <div>
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full ">
                        Email
                        <Field
                          className="text-base text-black mt-2 min-w-[18.5rem] p-2"
                          type="email"
                          name="email"
                          placeholder="Your email"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="text-sm text-colorText flex flex-col justify-center items-start mb-6 w-full">
                        Password
                        <Field
                          className="text-base text-black mt-2 w-full p-2"
                          type="password"
                          name="password"
                          placeholder="Your password"
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        className="accent-blackishGreen mr-1 mt-1"
                        type="checkbox"
                      />
                      <span className="text-blackishGreen text-sm">
                        Remember me
                      </span>
                    </div>
                    <div>
                      <button className="bg-mintGreen/80 hover:bg-mintGreen transition-all text-blackishGreen flex flex-col mt-11 w-full p-4 items-center justify-center">
                        Login
                      </button>
                      <div className="flex justify-between mt-4">
                        <h3 className="text-sm font-semibold text-blackishGreen w-full text-center">
                          Don&apos;t have an account?{" "}
                          <Link className="text-red-400" to="/sign-up">
                            Sign up
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
        <img
          className="w-[38.5rem] h-[51rem] scale-75"
          src={signInPicture}
          alt="Sign In"
        />
      </div>
    </section>
  );
};

export default SigninContainer;
