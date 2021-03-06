import React from "react";
import Form from "../Form/Form";

function Income(props) {
  const {onCreateIncome, expenseObj, categoryPlusObj} = props

    const [isValidForm, setIsValidForm] = React.useState(false)
    const [expenceValue, setExpenseValue] = React.useState('')
    const [categoryValue, setCategoryValue] = React.useState('')
    const [summValue, setSummValue] = React.useState('')
    const [dateValue, setDateValue] = React.useState('')
    const [descriptionValue, setDescriptionValue] = React.useState('')
    const [formData, setFormData] = React.useState({
      expense: '',
      category: '',
      summ: '',
      date: '',
      description: ''
    })

    const emptyPlusOrder = JSON.stringify(categoryPlusObj) === '{}'; //если объект пустой - ждём, иначе ошибка!
    const emptyOrder = JSON.stringify(expenseObj) === '{}';

    const onChangeInput = (event) => {
      //Проверяем форму на валидность
      const valid = event.target.closest("form").checkValidity();
      const value = event.target.value.replace(/[^\d.]/g, ""); // на всякий случай обрезаем все буквы

      if (!valid) {
        setIsValidForm(false);
      }
      setIsValidForm(valid);
      setSummValue(value)
    };

const expence = (event) => {
  setExpenseValue(event.target.value)
}
const category = (event) => {
  setCategoryValue(event.target.value)
}
const descriptionVal = (event) => {
  setDescriptionValue(event.target.value)
}
const dateVal = (event) => {
  setDateValue(event.target.value)
}

React.useEffect(() => {
  setFormData({
    expense: expenceValue,
    category: categoryValue,
    summ: summValue,
    date: dateValue,
    description: descriptionValue
    })
}, [expenceValue, categoryValue, summValue, dateValue, descriptionValue])

    const onSubmitForm = (event) => {
      event.preventDefault()
      onCreateIncome(formData)
   }
      
    return (
      <section className="Income">
        <Form
          title="Доходы"
          isValidForm={isValidForm}
          onSubmitForm={onSubmitForm}
          onSubmitText="Внести"
          className="Income__main"
          children={
            <>
              <div>
                <div className="Income__wrapper">
                  <div className="Income__form">
                    <div className="Expense__select">
                      <span className="Expense__subtitle">На счет</span>
                      <select className="Expense__select-element Expense__select-element_type_income" onChange={expence}>
                      <option selected disabled>Выберите счёт</option>
                        {!emptyOrder ? expenseObj.map((item) => (
                          <option value={item.title} key={item._id}>{item.title}</option>
                        )) : null}
                      </select>
                    </div>
                    <div className="Expense__select">
                      <span className="Expense__subtitle">Категория</span>
                      <select className="Expense__select-element Expense__select-element_type_income" onChange={category}>
                      <option selected disabled>Выберите категорию</option>
                        { !emptyPlusOrder ? categoryPlusObj.map((item) => (
                          <option value={item.title} key={item._id}>{item.title}</option>
                        )) : null}
                      </select>
                    </div>
                  </div>
                  <div className="Income__form">
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
                    <div className="Expense__inputs">
                      <span className="Expense__subtitle">Дата</span>
                      <input
                        className="Expense__input Expense__input_type_date"
                        type="date"
                        onChange={dateVal}
                        ></input>
                    </div>
                  </div>
                </div>
                <div className="Icome__description">
                  <span className="Expense__subtitle">Примечание</span>
                  <span className="Expense__span">
                    <input
                      type="text"
                      id="text"
                      className="Expense__input Expense__input_type_description"
                      onChange={descriptionVal}
                    ></input>
                  </span>
                </div>
              </div>
            </>
          }
        ></Form>
      </section>
    );
}
export default Income;