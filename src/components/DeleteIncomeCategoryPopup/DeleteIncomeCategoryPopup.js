import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

function DeleteIncomeCategoryPopup(props) {
//    const [nameCategory, setNameCategory] = React.useState("");
    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onDeleteIncomeCategory,
      categoryName } = props;

  function handleSubmit(event) {
    event.preventDefault();
    onDeleteIncomeCategory(categoryName)
    onClose()
//    setNameCategory("")
  } 
  return (
    <Popup
      title={`Удалить категорию "${categoryName}"?`}
      name="category"
      isOpen={isOpen}
      onClose={onClose}
      closePopupForm={closePopupForm}
      onSubmit={handleSubmit}
      submitText="Удалить"
    />
  );
}

export default DeleteIncomeCategoryPopup;