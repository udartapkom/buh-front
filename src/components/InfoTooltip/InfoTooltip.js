import React from "react"

function InfoTooltip(props) {

const { textMessage, imageLink, onClose, isOpen} = props;

    return(
        <div className={`modal ${
            isOpen ? "modal_open" : "modal_close"
          } `}>
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-button"
          title="Закрыть форму"
          onClick={onClose}
        />
        <div className="modal__message">
        <img
            className="modal__img"
            src={imageLink}
            alt={textMessage}
          />
          <p className="modal__subtitle">
            {textMessage}
          </p>
        </div>
      </div>
    </div>
  );
   

}
export default InfoTooltip;