import {Link, useHistory, useNavigate} from "react-router-dom";
import React from "react";
import * as auth from "./Auth"
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import CredForm from "./CredForm";
import InfoTooltip from "./InfoTooltip";

function  Register(props) {
  const navigate = useNavigate()

  function handleSubmit(email, password) {
    auth.register(email, password)
      .then(() => {
        props.handleInfoTooltip(true);
        navigate("/sign-in")
      })
      .catch((err) => {
        props.handleInfoTooltip(false)
      })
  }
  return (
    <CredForm name="SignUp" title="Регистрация" button="Зарегистрироваться" isSignUp={true} onSubmit={handleSubmit}/>)
}

export default Register;

