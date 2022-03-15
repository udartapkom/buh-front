import React from "react";

function FormExpense(props) {

    const {
        title,
        onSubmit
    } = props

    const [values, setValues] = React.useState("");
    const [isValidForm, setIsValidForm] = React.useState(false);

    const onChangeInput = (event) => {
      //Проверяем форму на валидность
      const valid = event.target.closest("form").checkValidity();
      const value = event.target.value.replace(/[^\d.]/g, ""); // на всякий случай обрезаем все буквы
      setValues(value);
      if (!valid || !event.target.value.empty) {
        setIsValidForm(false);
      }
      setIsValidForm(valid);
    };
    const onSubmitExpenseForm = (event) => {
      event.preventDefault();
      onSubmit();
    };
    return (
      <>
        <form name="Expense" className="Expense__form">
          <h3 className="Expense__title">{title}</h3>
          <div className="Expense__transfer">
            <div className="Expense__selects">
              <div className="Expense__select">
                <span className="Expense__subtitle">Со счета</span>
                <select className="Expense__select-element">
                  <option>наличные</option>
                  <option>Карта №1</option>
                  <option>Карта №2</option>
                  <option>Вклад</option>
                </select>
              </div>
              <div className="Expense__select">
                <span className="Expense__subtitle">На счет</span>
                <select className="Expense__select-element">
                  <option>наличные</option>
                  <option>Карта №1</option>
                  <option>Карта №2</option>
                  <option>Вклад</option>
                </select>
              </div>
            </div>
            <div className="Expense__inputs">
              <span className="Expense__subtitle">Сумма</span>
              <span className="Expense__span">
                <input
                  type="text"
                  id="summ"
                  className="Expense__input"
                  onChange={onChangeInput}
                  pattern="^[\d.]+$"
                  required
                ></input>
                <label htmlFor="summ" className="Expense__error">
                  {!isValidForm ? "Только цифры и точка" : null}{" "}
                </label>
              </span>
            </div>
          </div>
          <button
            disabled={!isValidForm}
            type="submit"
            className={`Expense__button Expense__button${
              isValidForm ? "_state_enable" : "_state_disable"
            }`}
            onClick={onSubmitExpenseForm}
          >
            Перевести
          </button>
        </form>
      </>
    );
}
export default FormExpense;