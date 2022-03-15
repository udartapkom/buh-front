import React from 'react'
import { Link } from 'react-router-dom';

function AuthForm(props) {
  return (
    <>
      <section className='AuthForm__container'>
          <div className="AuthForm">
        <form
          noValidate
          name={props.formName}
          action="post"
          className={`${props.className}`}
          onSubmit={props.handleOnSubmit}
        >
          <h2 className="AuthForm__title">{props.title}</h2>
          {props.children}

          <button
            disabled={!props.isValidForm}
            className={` AuthForm__button Form__button${props.buttonModificator} AuthForm__button${
              props.isValidForm ? "_state_enable" : "_state_disable"
            }`}
          >
            {props.buttonText}
          </button>
        </form>
        <div className="AuthForm__texts-block">
          <p className={`AuthForm__login-text ${props.loginTextModificator}`}>{props.loginText}</p>
          <Link to={props.linkTo} className={`AuthForm__login-text ${props.loginLinkModificator}`}>
            {props.linkText}
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
export default AuthForm;
