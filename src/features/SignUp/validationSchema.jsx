import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(
    /^\+(?:[0-9] ?){6,14}[0-9]$/,
    "Invalid phone number"
  ),
  password: Yup.string().min(6, "Minimum 6 length").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
