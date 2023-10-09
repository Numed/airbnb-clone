import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firsName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number().required("Email is required"),
  password: Yup.string().required("Password is required."),
  confirm: Yup.string().required("Cofirmation is required."),
});
