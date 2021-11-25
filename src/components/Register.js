import {useNavigate} from "react-router-dom";
import React from "react";
import * as auth from "../utils/auth"
import CredentialsForm from "./CredentialsForm";

function Register(props) {
  const navigate = useNavigate()
  const successMessage = "Вы успешно зарегистрировались!"

  function handleSubmit(email, password) {
    auth.register(email, password)
      .then(data => {
        if (data.error) {
          props.handleInfoTooltip(false, data.error);
        } else if (data.email) {
          props.handleInfoTooltip(true, successMessage);
          navigate("/sign-in")
        } else {
          props.handleInfoTooltip(false, 'Что-то пошло не так');
        }
      });
  }
  return (
    <CredentialsForm name="SignUp" title="Регистрация" button="Зарегистрироваться" isSignUp={true}
                     onSubmit={handleSubmit}/>)
}

export default Register;

