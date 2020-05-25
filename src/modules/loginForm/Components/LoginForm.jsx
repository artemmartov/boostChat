import React, { Component } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, WhiteBlock } from "../../../components/index";
import validateFunc from "../../../utils/validate";
import { withFormik } from "formik";
import FormItem from "antd/lib/form/FormItem";
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

class MyLoginForm extends Component {
  render() {
    const {
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isValid
    } = this.props;
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <WhiteBlock>
          <Form {...layout} name="basic" onSubmit={handleSubmit}>
            <FormItem
              validateStatus={validateField("email", "touched", "errors")}
              help={!touched.email ? null : errors.email}
            >
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="email"
                placeholder="email"
              />
            </FormItem>

            <FormItem
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
            </FormItem>

            <Form.Item {...tailLayout}>
              {!isValid && <span>Ошибка!</span>}
              <Button
                className="button__large"
                type="primary"
                size="large"
                onClick={handleSubmit}
              >
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/register">
                Зарегистрироваться
              </Link>
            </Form.Item>
          </Form>
        </WhiteBlock>
      </div>
    );
  }
}

const LoginForm = withFormik({
  //   mapPropsToValues: () => ({
  //     email: "",
  //     password: ""
  //   }),
  validate: values => {
    const errors = {};
    const validate = validateFunc({ isAuth: true });
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

  displayName: "MyLoginForm"
})(MyLoginForm);

export default LoginForm;
