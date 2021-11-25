import {useNavigate} from "react-router-dom";
import React from "react";
import * as auth from "../utils/auth"
import CredentialsForm from "./CredentialsForm";

function Login(props) {
  const navigate = useNavigate()

  function handleSubmit(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.error) {
          props.handleInfoTooltip(false, data.error);
        }
        if (data.token) {
          props.handleLogin();
          navigate('/');
        }
      })
      .catch(() => {
        props.handleInfoTooltip(false, 'Что-то пошло не так');
      });
  }

  return (
    <CredentialsForm name="SignIn" title="Вход" button="Войти" isSignUp={false} onSubmit={handleSubmit}/>
  )
}

export default Login;
