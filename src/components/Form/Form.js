import React from 'react'
//import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <>
      <div className="Form">
        <form
          noValidate
          name={props.formName}
          action="post"
          className={`${props.className}`}
          onSubmit={props.handleOnSubmit}
        >
         {/*<Logo {...props} />*/}
          <h2 className="Expense__title">{props.title}</h2>
          {props.children}
          <button
            disabled={!props.isValidForm}
            type="submit"
            className={`Expense__button Expense__button_type_income Expense__button${
              props.isValidForm ? "_state_enable" : "_state_disable" 
            }`}
            onClick={props.onSubmitForm}
          >
            {props.onSubmitText}
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
