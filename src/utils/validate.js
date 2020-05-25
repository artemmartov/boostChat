export default ({ isAuth }) => ({
  email: (errors, value, isAuth) => {
    if (!value) {
      errors.email = "Введите email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = "Неверный email";
    }
  },
  password: (errors, value) => {
    if (!value) {
      errors.password = "Введите пароль";
    } else if (!/^[a-zA-Z0-9]+$/i.test(value)) {
      errors.password = isAuth
        ? "Неверный пароль"
        : "Пароль должен содержать одну заглавную букву и цифру";
    }
  }
});
