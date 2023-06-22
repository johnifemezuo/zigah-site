
import * as yup from "yup";

export const bookSessionFormValidatorSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    service: yup.string().required(),
    message: yup.string().required(),
  })
  .required();
  

