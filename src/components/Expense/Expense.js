import React from "react";
import FormExpense from "../Form-expense/FormExpense";


function Expense(props) {
    const { onCreate } = props;

    const createExpense = (event) => {
        const expense = event.target.parentElement.previousSibling.textContent
        onCreate(expense)
    }

    return(
        <>
        <section className="Expense">
            <div className="Expense__operations">
            <ul className="Expense__list">
                <li className="Expense__list-item">Наличные <span className="Expense__list-summ">0.00</span></li>
                <li className="Expense__list-item">Карта №1 <span className="Expense__list-summ">0.00</span></li>
                <li className="Expense__list-item">Карта №2 <span className="Expense__list-summ">0.00</span></li>
                <li className="Expense__list-item">Вклад <span className="Expense__list-summ">0.00</span></li>
                </ul>
            <div className="Expense__buttons">
                <div className="Expense__button" onClick={createExpense}>Добавить счет</div>
                <div className="Expense__button">изменить счет</div>
                <div className="Expense__button">Удалить счет</div>
            </div>
            </div>
        <FormExpense
            title='Переводы между счетами'
            {...props}
        >
        </FormExpense>
        </section>
        </>
    )
}
export default Expense;