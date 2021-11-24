import {Link} from "react-router-dom";
import React from "react";

function CredentialsForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(email, password)
  }
  return (
    <div className="form__container">
      <h2 className="form__title">{props.title}</h2>
      <form className="form" name={`${props.name}form`} noValidate onSubmit={handleSubmit}>
        <label className="form__field">
          <input id="email-input" required className="form__input-field form__input-field_white" type="email" name="email" placeholder="email"
                 minLength="4" maxLength="40" value={email} onChange={handleEmailChange}/>
          <span className="email-input-error form__input-error"/>
        </label>
        <label className="form__field">
          <input id="password-input" required className="form__input-field form__input-field_white" type="password" name="password"
                 placeholder="password" minLength="8" maxLength="200" value={password}
                 onChange={handlePasswordChange}/>
          <span className="password-input-error form__input-error"/>
        </label>
        <button className="form__submit-button form__submit-button_white" type="submit">{props.button}</button>
        {props.isSignUp && <Link to="./sign-in" className="form__link">Уже зарегистрированы? Войти</Link>}
      </form>
    </div>
  )
}

export default CredentialsForm;
