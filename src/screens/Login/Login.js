import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import useFormWithValidation from '../../components/Validation/Validation';

function Login(props) {
    const { onSubmitLogin } = props;

    const {
      values,
      errors,
      isValidForm,
      handleInputChange,

    } = useFormWithValidation({})

      function handleOnSubmit(event) {
        event.preventDefault();
        onSubmitLogin(values);
      }
    return(
    <>
        <AuthForm 
        fomName = 'login'
        className = 'AuthForm__login'
        title = 'Рады видеть!'
        buttonText = 'Войти'
        loginText = 'Ещё не зарегистрированы?'
        loginTextModificator = 'AuthForm__login-text_type_text'
        linkText = 'Регистрация'
        loginLinkModificator = 'AuthForm__login-text_type_link'
        linkTo = '/signup'
        modificator = 'Logo_type_form-register'
        isValidForm={isValidForm}
        handleOnSubmit={handleOnSubmit}
        >
            <label htmlFor="email" className="AuthForm__label">E-mail</label>
            <input
            id="email"
            type="email"
            className="AuthForm__input"
            name='email'
            required
            minLength="5"
            maxLength="50"
            onChange={handleInputChange}
            />
            <label htmlFor="email" className="AuthForm__label AuthForm__label_type_error">{errors.email}</label>

            <label htmlFor="password" className="AuthForm__label">Пароль</label>
            <input
            id="password"
            type="password"
            className="AuthForm__input"
            name='password'
            minLength="6"
            required
            onChange={handleInputChange}
            />
            <label htmlFor="password" className="AuthForm__label AuthForm__label_type_error">{errors.password}</label>
        </AuthForm>
    </>
    )
}
export default Login;