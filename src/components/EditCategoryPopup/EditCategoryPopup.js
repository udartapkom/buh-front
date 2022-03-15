import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

function EditCategoryPopup(props) {
    const [nameCategory, setNameCategory] = React.useState("");
    const { 
      isOpen,
      onClose, 
      closePopupForm, 
      onEditCategory,
      categoryName } = props;

  function categoryChange(event) {
    setNameCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onEditCategory(nameCategory)
    onClose()
    setNameCategory("")
  }
  return (
    <Popup
      title={`Редактировать категорию "${categoryName}"`}
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
              value={nameCategory || ""} //  || '' проверяем nameCategory - иначе "warning!" в консоли о том, что Компонент изменяет контролируемый ввод на неконтролируемый...
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

export default EditCategoryPopup;