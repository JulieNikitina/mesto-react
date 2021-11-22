import {Link} from "react-router-dom";
import React from "react";

function  AuthForm(props) {
  return (
    <div className="form__container">
      <h2 className="form__title">{props.title}</h2>
      <form className="form" name={`${props.name}form`} noValidate>
        <label className="form__field">
          <input id="sign-up-email-input" required className="form__input-field form__input-field_white" type="email" name="email"
                 placeholder="email"/>
          <span className="sign-up-email-input-error form__input-error"/>
        </label>
        <label className="form__field">
          <input id="sign-up-password-input" required className="form__input-field form__input-field_white" type="password" name="password"
                 placeholder="password"/>
          <span className="sign-up-password-input-error form__input-error"/>
        </label>
        <button className="form__submit-button form__submit-button_white" type="submit">{props.button}</button>
        {props.isSignUp && <Link to="./sign-in" className="form__link">Уже зарегистрированы? Войти</Link>}
      </form>
    </div>
  )
}

export default AuthForm;
