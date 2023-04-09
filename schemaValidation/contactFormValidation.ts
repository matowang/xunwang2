import * as yup from "yup";

const contactFormValidation = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  message: yup.string(),
});

export interface ContactFormInput
  extends yup.InferType<typeof contactFormValidation> {}

export default contactFormValidation;
