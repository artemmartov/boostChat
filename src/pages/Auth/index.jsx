import React from "react";
// import LoginForm from "../../modules/index";
import { LoginForm, RegisterForm } from "../../modules/index";
import { Route } from "react-router-dom";

import "./Auth.scss";

export default function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route path="/register" component={RegisterForm} />

      </div>
    </section>
  );
}

// export default function Auth() {
//   return (
//     <section className="auth">
//       <div className="auth__content">
//         <div className="auth__top">
//           <h2>Войти в аккаунт</h2>
//           <p>Пожалуйста, войдите в свой аккаунт</p>
//         </div>
//         <WhiteBlock>
// 			<Input></Input>
//           <Button className="button__large" type="primary" size="large">
//             This is Button!
//           </Button>
//         </WhiteBlock>
//       </div>
//     </section>
//   );
// }
