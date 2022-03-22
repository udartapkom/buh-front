import React from "react";
import FormExpense from "../Form-expense/FormExpense";

import edit from '../../images/edit.svg'
import cross from '../../images/cross.svg'

function Expense(props) {
    const { onCreate, onEdit, onDelete, expenseObj } = props;

    const emptyOrder = JSON.stringify(expenseObj) === '{}';
    const editExpense = (event) => {
        const expense = event.target.parentNode.parentNode.firstElementChild.firstChild.textContent
        onEdit(expense)
    }
    const deleteExpense = (event) => {
        const expense = event.target.parentNode.parentNode.firstElementChild.firstChild.textContent
        //const summ = event.target.parentNode.parentNode.firstChild.value//.nextElementSibiling//.textContent;
        onDelete(expense)
    }

    return(
        <>
        <section className="Expense">
            <div className="Expense__operations">
               <ul className="Expense__list"> 
               {!emptyOrder ? expenseObj.map((item) => (
                    <li className="Expense__list-item" key={item._id}>
                        <div className="Expense__list-title">
                            <div>
                            <span>{item.title}</span>
                            </div>
                            <div>
                    <span className="Expense__list-summ" key={item._id}>{item.summ}</span>
                    </div>
                    </div>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editExpense}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteExpense}></img>
                </div>
                    
                    </li>
                )) : null} 
                </ul>  
            <div className="Expense__buttons">
                <div className="Expense__button" onClick={onCreate}>Добавить счет</div>
                <img src={edit} alt="Редактировать" className="Category__item-button"></img>
                <p className="Expense__tutorial">Редактировать имя счёта</p>
                <img src={cross} alt="Удалить" className="Category__item-button"></img>
                <p className="Expense__tutorial">Удалить счёт</p>
{/*                 <div className="Expense__button">изменить счет</div>
                <div className="Expense__button">Удалить счет</div> */}
            </div>
            </div>
        <FormExpense
            title='Переводы между счетами'
            emptyOrder={emptyOrder}
            {...props}
        >
        </FormExpense>
        </section>
        </>
    )
}
export default Expense;