function Popup(props) {
  const { title, name, isOpen, onClose, onSubmit, submitText, closePopupForm, children } = props;
  return (
    <section className={`popup ${isOpen && "popup_opened"}`} onClick={closePopupForm}>
      <form action="post" name="popup__container" className="popup__form" noValidate onSubmit={onSubmit}>
        <button type="button" className="popup__close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        {submitText && (
          <button type="submit" className="popup__button">
            {submitText}
          </button>
        )}
      </form>
    </section>
  );
}
export default Popup;
