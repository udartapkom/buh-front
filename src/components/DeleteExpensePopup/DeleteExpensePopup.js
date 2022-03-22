import React from "react";
import Popup from "../Popup/Popup";

function DeleteExpensePopup(props) {

    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onDeleteExpense,
      expenseName } = props;

  function handleSubmit(event) {
    event.preventDefault();
    onDeleteExpense(expenseName)
    onClose()
  }
  return (
    <Popup
      title={`Удалить счёт "${expenseName}"?`}
      name="expense"
      isOpen={isOpen}
      onClose={onClose}
      closePopupForm={closePopupForm}
      onSubmit={handleSubmit}
      submitText="Удалить"
    />
  );
}

export default DeleteExpensePopup;