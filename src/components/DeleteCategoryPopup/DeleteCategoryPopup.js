import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

function DeleteCategoryPopup(props) {
    const [nameCategory, setNameCategory] = React.useState("");
    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onDeleteCostsCategory,
      categoryName } = props;

  function handleSubmit(event) {
    event.preventDefault();
    onDeleteCostsCategory(categoryName)
    onClose()
    setNameCategory("")
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

export default DeleteCategoryPopup;