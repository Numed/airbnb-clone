import * as Yup from "yup";

export const validationSchemas = {
  email: Yup.string().email("Email not valid").required("Required"),
  text: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number not valid")
    .required("Required"),
  password: Yup.object().shape({
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  }),
};
