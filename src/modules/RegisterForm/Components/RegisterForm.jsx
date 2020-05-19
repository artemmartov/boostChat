import React, { Component } from "react";
import { Form, Input } from "antd";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
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

export default class RegisterForm extends Component {
  render() {
    const success = true;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам необходимо зарегистрироваться</p>
        </div>
        <WhiteBlock>
          {success ? (
            <Form {...layout} name="basic">
              <Form.Item label="e-mail" name="e-mail">
                <Input placeholder="E-MAIL" />
              </Form.Item>

              <Form.Item label="Username" name="username">
                <Input placeholder="Ваше имя" />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password placeholder="Пароль" />
              </Form.Item>

              <Form.Item label="Повторите пароль" name="password">
                <Input.Password placeholder="Повторите пароль" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button className="button__large" type="primary" size="large">
                  Зарегистрироваться
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
                <ExclamationCircleTwoTone style={{ fontSize: "50px"}}/>
              </div>
              <h2>Подтвердите ваш аккаунт</h2>
              <p>
                На почту отправлено письмо с ссылкой на подтверждение аккаунта.
              </p>
            </div>
          )}
        </WhiteBlock>
      </div>
    );
  }
}
