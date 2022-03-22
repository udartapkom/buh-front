import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

function EditExpensePopup(props) {
    const [nameExpense, setNameExpense] = React.useState("");
    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onSetNewNameExpense,
      onEditExpense
      /* expenseName */ } = props;

  function categoryChange(event) {
    setNameExpense(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSetNewNameExpense(nameExpense)
    onEditExpense(nameExpense)
    onClose()
    setNameExpense("")
  }
  return (
    <Popup
      title={`Редактировать счёт "  "`}
      name="category"
      isOpen={isOpen}
      onClose={onClose}
      closePopupForm={closePopupForm}
      onSubmit={handleSubmit}
      submitText="Сохранить"
      children={
        <>
            <input
              name="category"
              type="text"
              required
              value={nameExpense || ""} //  || '' проверяем nameExpense- иначе "warning!" в консоли о том, что Компонент изменяет контролируемый ввод на неконтролируемый...
              placeholder="Введите название"
              className="modal__input"
              minLength="2"
              maxLength="40"
              autoComplete="off"
              onChange={categoryChange}
            />
  
        </>
      }
    />
  );
}

export default EditExpensePopup;