import {Link, useHistory, useNavigate} from "react-router-dom";
import React from "react";
import * as auth from "./Auth"
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import CredForm from "./CredForm";
import InfoTooltip from "./InfoTooltip";

function Login(props) {
  const navigate = useNavigate()

  function handleSubmit(email, password) {
    auth.authorize(email, password)
      .then(() => {
        //todo: проверить что там с обнулением мейла и пароля
        // this.setState({username: '', password: ''},
        props.handleLogin();
        navigate('/');
      })
      .catch((err) => {
        props.handleInfoTooltip(false);
        console.log(err);
      });
  }

  return (
    <CredForm name="SignIn" title="Вход" button="Войти" isSignUp={false} onSubmit={handleSubmit}/>
  )
}

export default Login;


