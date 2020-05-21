import React, { Component } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, WhiteBlock } from "../../../components/index";

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

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <WhiteBlock>
          <Form {...layout} name="basic">
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button className="button__large" type="primary" size="large">
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
