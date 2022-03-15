import React from "react";
import Popup from "../Popup/Popup";

function CreateExpensePopup(props) {
    const [nameExpense, setNameExpense] = React.useState("");
    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onCreateExpense } = props;

  function expenseChange(event) {
    setNameExpense(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onCreateExpense(nameExpense)
    onClose()
    setNameExpense("")
  }
  return (
    <Popup
      title="Создать Счёт"
      name="expense"
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
              value={nameExpense || ""} //  || '' проверяем nameExpense - иначе "warning!" в консоли о том, что Компонент изменяет контролируемый ввод на неконтролируемый...
              placeholder="Введите название"
              className="modal__input"
              minLength="2"
              maxLength="40"
              autoComplete="off"
              onChange={expenseChange}
            />
  
        </>
      }
    />
  );
}

export default CreateExpensePopup;