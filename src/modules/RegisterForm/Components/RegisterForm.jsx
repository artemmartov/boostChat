import React from "react";
import { withFormik } from "formik";
import validateFunc from "../../../utils/validate";
import { Form, Input } from "antd";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, WhiteBlock } from "../../../components/index";
import { validateField } from "../../../utils/helpers/index";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16
  }
};

// // const initialValues = {
// //   name: "",
// //   email: ""
// //   //   password: ""
// // };

// // const onSubmit = values => {
// //   console.log("1111", values);
// // };

// // const validate = values => {
// //   let errors = {};

// //   if (!values.name) {
// //     errors.name = "Required";
// //   }

// //   if (!values.email) {
// //     errors.email = "Required";
// //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// //     errors.email = "Invalid email address";
// //   }
// //   return errors;
// // };

// // const validationSchema = Yup.object({
// //   name: Yup.string().required("Required"),
// //   email: Yup.string()
// //     .email("Invalid email format")
// //     .required("Required")
// // });

// const MyForm = props => {
//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit
//   } = props;
//   //   const formik = useFormik({
//   //     initialValues,
//   //     onSubmit,
//   //     validationSchema
//   //     // validate
//   //   });
//   const success = true;

//   return (
//     <div>
//       <div className="auth__top">
//         <h2>Регистрация</h2>
//         <p>Для входа в чат, вам необходимо зарегистрироваться</p>
//       </div>
//       <WhiteBlock>
//         {success ? (
//           <Form {...layout} onSubmit={handleSubmit}>
//             <Form.Item htmlFor="email" name="email">
//               <Input
//                 placeholder="E-MAIL"
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={values.email}
//               />
//             </Form.Item>

//             <Form.Item label="name" name="name">
//               <Input id="name" name="name" type="text" placeholder="Ваше имя" />
//             </Form.Item>

//             <Form.Item label="password" name="password">
//               <Input.Password
//                 id="password"
//                 name="password"
//                 type="text"
//                 placeholder="Пароль"
//               />
//             </Form.Item>

//             <Form.Item label="Повторите пароль">
//               <Input.Password placeholder="Повторите пароль" />
//             </Form.Item>

//             <Form.Item {...tailLayout}>
//               <Button
//                 type="submit"
//                 className="button__large"
//                 type="primary"
//                 size="large"
//               >
//                 Submit
//               </Button>
//             </Form.Item>
//             <Form.Item>
//               <Link className="auth__register-link" to="/login">
//                 Войти в аккаунт
//               </Link>
//             </Form.Item>
//           </Form>
//         ) : (
//           <div className="auth__success-block">
//             <div>
//               <ExclamationCircleTwoTone style={{ fontSize: "50px" }} />
//             </div>
//             <h2>Подтвердите ваш аккаунт</h2>
//             <p>
//               На почту отправлено письмо с ссылкой на подтверждение аккаунта.
//             </p>
//           </div>
//         )}
//       </WhiteBlock>

//       {/* <form >
//           <label htmlFor="email">Email</label>
//           <Field
//             type="email"
//             name="email"
//             id="email"
//             //   onChange={formik.handleChange}
//             //   onBlur={formik.handleBlur}
//             //   value={formik.values.email}
//             // {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//           <label htmlFor="name">Name</label>
//           <Field
//             type="text"
//             name="name"
//             id="name"
//             //   onChange={formik.handleChange}
//             //   onBlur={formik.handleBlur}
//             //   value={formik.values.name}
//             // {...formik.getFieldProps("name")}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div>{formik.errors.name}</div>
//           ) : null}
//           <button>TTTT</button>
//         <Formik>
//       </Formik> */}
//     </div>
//   );
// };

// export default MyForm;

const MyRegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid
  } = props;
  const success = true;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам необходимо зарегистрироваться</p>
      </div>
      <WhiteBlock>
        {success ? (
          <Form {...layout} onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={validateField("email", "touched", "errors")}
              help={!touched.email ? null : errors.email}
            >
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="mail"
                placeholder="email"
              />
            </Form.Item>

            <Form.Item>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={values.name}
              />
            </Form.Item>

            <Form.Item
              validateStatus={validateField("password", "touched", "errors")}
              help={!touched.password ? null : errors.password}
            >
              <Input.Password
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                onChange={handleChange}
                onBlur={handleBlur}
                id="passwordAgain"
                name="passwordAgain"
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              {!isValid && <span>Ошибка!</span>}
              <Button
                onClick={handleSubmit}
                type="primary"
                className="button__large"
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <ExclamationCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2>Подтвердите ваш аккаунт</h2>
            <p>
              На почту отправлено письмо с ссылкой на подтверждение аккаунта.
            </p>
          </div>
        )}
      </WhiteBlock>
      {/* <form onSubmit={handleSubmit}>
		<input
		  type="text"
		  onChange={handleChange}
		  onBlur={handleBlur}
		  value={values.name}
		  name="name"
		/>
		{errors.name && touched.name && <div id="feedback">{errors.name}</div>}
		<button type="submit">Submit</button>
	  </form> */}
    </div>
  );
};

const RegisterForm = withFormik({
  validate: values => {
    const errors = {};
    const validate = validateFunc({ isAuth: false });
    Object.keys(values).forEach(
      key => validate[key] && validate[key](errors, values[key])
    );

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegisterForm"
})(MyRegisterForm);

export default RegisterForm;
