import React from "react";
import Form from "../Form/Form";
import ExportToExcel from "../ExportToExcel/ExportToExcel";

function Analitic(props) {

  const {
    getDataRange, 
    dataRange,
    getDataRangeExp, 
    dataRangeExp} = props

  const [dateExpenseValueFirst, setDateExpenseValueFirst] = React.useState("");
  const [dateExpenseValueSecond, setDateExpenseValueSecond] = React.useState("");
  const [formData, setFormData] = React.useState({
    dateExpenseValueFirst: '',
    dateExpenseValueSecond: '',
  })

React.useEffect(() => {
    setFormData(
        {
           expenseF: dateExpenseValueFirst,
           expenseS: dateExpenseValueSecond,
        }
    )
}, [dateExpenseValueFirst, dateExpenseValueSecond])

const onSubmitForm = (event) => {
    event.preventDefault()
    getDataRange(formData)
    getDataRangeExp(formData)
 }
  const dateValEpenseFirst = (event) => {
    setDateExpenseValueFirst(event.target.value);
  };
  const dateValEpenseSecond = (event) => {
    setDateExpenseValueSecond(event.target.value);
  };

  const options ={
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
const dataFormat = (data) => { //приводим дату к нужному формату
 const formatDate = new Date(data)
  return(formatDate.toLocaleString("ru", options))
}

  return (
     <>
       <section className="Section__analitic">
         <h2 className="Analitic__title">Аналитика</h2>
         <div>
         <h3 className="Analitic__subtitle">Расходы</h3>
          { dataRange.map((item) => (
            <ul className="Analitic__list">
            <li className="Analitic__list-item">{item.account}</li>
            <li className="Analitic__list-item">{item.catMinus}</li>
            <li className="Analitic__list-item Analitic__list-item_color_red">{item.summ}</li>
            <li className="Analitic__list-item">{dataFormat(item.date)}</li>
            <li className="Analitic__list-item">{item.description}</li>
            </ul>
          )) 
          }
          <h3 className="Analitic__subtitle">Доходы</h3>
          { dataRangeExp.map((item) => (
            <ul className="Analitic__list">
            <li className="Analitic__list-item">{item.account}</li>
            <li className="Analitic__list-item">{item.catPlus}</li>
            <li className="Analitic__list-item Analitic__list-item_color_green">{item.summ}</li>
            <li className="Analitic__list-item">{dataFormat(item.date)}</li>
            <li className="Analitic__list-item">{item.description}</li>
            </ul>
          )) 
          }
         </div>
        <Form
    isValidForm={true}
    onSubmitForm={onSubmitForm}
    onSubmitText="Показать на экране"
    className="Income__main"

    children={
        <section className="Analitic">
        <div className="Analitic__block">
          <h2 className="Analitic__title">Расходы и доходы за период:</h2>
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
      </section>
}
></Form>

    <ExportToExcel 
      dataRange={dataRange}
      dataRangeExp={dataRangeExp}
    />

</section>
    </>
  );
}
export default Analitic;