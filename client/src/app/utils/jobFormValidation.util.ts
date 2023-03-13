import * as Yup from "yup";

export const jobFormValidation = Yup.object({
  title: Yup.string().required("The job title is required"),
  description: Yup.string().required("The description is required"),
  jobType: Yup.string().required("The job type is required"),
  salary: Yup.string().required("The salary is required"),
  experienceLevel: Yup.string().required("The experience level is required"),
  city: Yup.string().required("The city is required"),
});
