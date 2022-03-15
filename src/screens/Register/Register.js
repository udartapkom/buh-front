import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm';
import useFormWithValidation from '../../components/Validation/Validation';

function Register({onSubmitRegister}){

  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation({})

        function handleOnSubmit(event) {
            event.preventDefault();
            onSubmitRegister(values);
          }

    return(
    <>
        <AuthForm 
        fomName = 'register'
        className = 'AuthForm__login'
        title = 'Добро пожаловать!'
        buttonText = 'Зарегистрироваться'
        buttonModificator = '_window_signup'
        loginText = 'Уже зарегистрированы?'
        loginTextModificator = 'AuthForm__login-text_type_text'
        linkText = 'Войти'
        loginLinkModificator = 'AuthForm__login-text_type_link'
        linkTo = '/signin'
        modificator = 'Logo_type_form-register'
        handleOnSubmit={handleOnSubmit}
        isValidForm={isValidForm}
        >
            <label htmlFor = 'name' className = 'AuthForm__label'>Имя</label>
            <input
            id = 'name'
            name='name'
            className = 'AuthForm__input'
            required
            minLength="2"
            maxLength="30"
            onChange={handleInputChange}
            />
            <label htmlFor="name" className="AuthForm__label AuthForm__label_type_error">{errors.name}</label>

            <label htmlFor = 'email' className = 'AuthForm__label'>E-mail</label>
            <input
            id = 'email'
            type = 'email'
            className = 'AuthForm__input'
            name = 'email'
            required
            minLength="5"
            maxLength="50"
            onChange={handleInputChange}
            />
            <label htmlFor="email" className="AuthForm__label AuthForm__label_type_error">{errors.email}</label>

            <label htmlFor = 'password' className = 'AuthForm__label'>Пароль</label>
            <input
            id = 'password'
            type = 'password'
            className = 'AuthForm__input'
            name = 'password'
            required
            minLength="6"
            onChange={handleInputChange}
            />
            <label htmlFor="password" className="AuthForm__label AuthForm__label_type_error">{errors.password}</label>
        </AuthForm>
    </>
    )
}
export default Register;