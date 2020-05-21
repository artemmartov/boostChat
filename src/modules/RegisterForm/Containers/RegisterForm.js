// import { withFormik } from "formik";
import RegisterForm from "../Components/RegisterForm";

// const RegisterForm = withFormik({
//   mapPropsToValues: () => ({ email: "hjhg" }),

//   // Custom sync validation
//   validate: values => {
//     const errors = {};

//     if (!values.name) {
//       errors.name = "Required";
//     }

//     return errors;
//   },

//   handleSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 1000);
//   },

//   displayName: "MyForm"
// })(MyForm);
export default RegisterForm;
