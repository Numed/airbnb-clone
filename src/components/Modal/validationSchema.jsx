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

export const validationSchemsCard = () => {
  return Yup.object({
    number: Yup.string()
      .required("Required")
      .matches(/^(\d{4} ){3}\d{4}$/, "Card number must be 16 digits"),
    valid: Yup.string()
      .required("Required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format")
      .test("is-future", "Date must be in the future", (value) => {
        const [month, year] = value.split("/");
        const inputYear = 2000 + Number(year);
        const inputMonth = Number(month);
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        return (
          inputYear > currentYear ||
          (inputYear === currentYear && inputMonth >= currentMonth)
        );
      }),
    cvc: Yup.string()
      .required("Required")
      .matches(/^\d{3}$/, "CVC must be 3 digits"),
    name: Yup.string()
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Name must only contain letters"),
  });
};

export const generateValidationSchema = (type) =>
  validationSchemas[type] || Yup.object({});
