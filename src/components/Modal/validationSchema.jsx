import * as Yup from "yup";

const validationSchemas = {
  email: Yup.object({
    email: Yup.string().email("Email not valid").required("Required"),
  }),
  text: Yup.object({
    text: Yup.string().required("Required"),
  }),
  phone: Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number not valid")
      .required("Required"),
  }),
  password: Yup.object({
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Required"),
  }),
};

export const generateValidationSchema = (type) =>
  validationSchemas[type] || Yup.object({});
