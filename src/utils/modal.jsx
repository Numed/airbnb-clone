export const getFieldType = (type) => {
  switch (type) {
    case "email":
      return "email";
    case "text":
      return "text";
    case "phone":
      return "tel";
    case "password":
      return "password";
    case "address":
      return "text";
    case "birthday":
      return "date";
    default:
      return "text";
  }
};

export const getFieldLabel = (type) => {
  switch (type) {
    case "email":
      return "Email";
    case "text":
      return "Full Name";
    case "phone":
      return "Phone number";
    case "password":
      return "Password";
    case "address":
      return "Address";
    case "birthday":
      return "Date of birth";
    default:
      return "";
  }
};
