import React from "react";
import Form from "../Form/Form";

function Analitic() {
  /*     const d = new Date();
    const currentDay = new Date();

d.setDate(d.getDate() - 7);
const currDate = currentDay.toLocaleString()
const weekDade = d.toLocaleString() 
всю лобуду выше можно использовать для устаноки конкретных дат
*/

  const [dateExpenseValueFirst, setDateExpenseValueFirst] = React.useState("");
  const [dateExpenseValueSecond, setDateExpenseValueSecond] = React.useState("");
  const [dateCostsValueFirst, setDateCostsValueFirst] = React.useState("");
  const [dateCostsValueSecond, setDateCostsValueSecond] = React.useState("");
  const [formData, setFormData] = React.useState({
    dateExpenseValueFirst: '',
    dateExpenseValueSecond: '',
    dateCostsValueFirst: '',
    dateCostsValueSecond:''
  })

React.useEffect(() => {
    setFormData(
        {
           expenseF: dateExpenseValueFirst,
           expenseS: dateExpenseValueSecond,
           costsF: dateCostsValueFirst,
           costsS: dateCostsValueSecond
        }
    )
}, [dateExpenseValueFirst, dateExpenseValueSecond, dateCostsValueFirst, dateCostsValueSecond])

const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(formData)
 }
  const dateValEpenseFirst = (event) => {
    setDateExpenseValueFirst(event.target.value);
  };
  const dateValEpenseSecond = (event) => {
    setDateExpenseValueSecond(event.target.value);
  };
  const dateValCostsFirst = (event) => {
    setDateCostsValueFirst(event.target.value);
  };
  const dateValCostsSecond = (event) => {
    setDateCostsValueSecond(event.target.value);
  };
  return (
 
    <>
       <section className="Section__analitic">
        <Form
    title="Аналитика"
    isValidForm={true}
    onSubmitForm={onSubmitForm}
    onSubmitText="Показать на экране"
    className="Income__main"

    children={
        <section className="Analitic">
        <div className="Analitic__block">
          <h2 className="Analitic__title">Расходы за период</h2>
          <div className="Analitic__inputs">
            <span className="Expense__subtitle">C даты</span>
            <input
              className="Expense__input Expense__input_type_date Analitics__input_position_first"
              type="date"
              onChange={dateValEpenseFirst}
            ></input>
          </div>
          <div className="Analitic__inputs">
            <span className="Expense__subtitle">По дату</span>
            <input
              className="Expense__input Expense__input_type_date"
              type="date"
              onChange={dateValEpenseSecond}
            ></input>
          </div>
        </div>
        <div className="Analitic__block">
          <h2 className="Analitic__title">Доходы за период</h2>
          <div className="Analitic__inputs">
            <span className="Expense__subtitle">C даты</span>
            <input
              className="Expense__input Expense__input_type_date Analitics__input_position_first"
              type="date"
              onChange={dateValCostsFirst}
            ></input>
          </div>
          <div className="Analitic__inputs">
            <span className="Expense__subtitle">По дату</span>
            <input
              className="Expense__input Expense__input_type_date"
              type="date"
              onChange={dateValCostsSecond}
            ></input>
          </div>
        </div>
        </section>
}
></Form>
<div className="Expense__button">Выгрузить</div>

{/* сюда выводим таблицу */}

</section>
    </>
  );
}
export default Analitic;