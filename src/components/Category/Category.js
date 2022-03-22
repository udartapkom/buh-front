import React from "react";
import edit from '../../images/edit.svg'
import cross from '../../images/cross.svg'

function Category(props) {
    const {
        onCostsEdit,
        onDeleteCosts,
        onAddCosts,
        categoryMinusObj,
        categoryPlusObj,
        onAddIncome,
        onIncomeEdit,
        onDeleteIncome
    } = props


    const emptyMinusOrder = JSON.stringify(categoryMinusObj) === '{}'; //если объект пустой - ждём, иначе ошибка!
    const emptyPlusOrder = JSON.stringify(categoryPlusObj) === '{}'; //если объект пустой - ждём, иначе ошибка!

const editCategory = (event) => {
    const category = event.target.parentElement.previousSibling.textContent
    onCostsEdit(category)
    onIncomeEdit(category)
}
const deleteCategory = (event) => {
    const category = event.target.parentElement.previousSibling.textContent
    onDeleteCosts(category)
    onDeleteIncome(category)
}

    return(
        <>
<section className="Category">
    <div className="Category__types">
        <h2 className="Category__title">Категории расходов</h2>
        <ul className="Category__list Category__list_type_border">
        {!emptyMinusOrder ? categoryMinusObj.map((item) => (
            <li className="Category__list-item" key={item._id}>
                <p className="Category__list-text">{item.title}</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>
                )) : null} 
        </ul>
        <div className="Category__button" onClick={onAddCosts}>Создать категорию</div>
        </div>
        <div className="Category__types">
        <h2 className="Category__title">Категории доходов</h2>
        <ul className="Category__list">
        {!emptyPlusOrder ? categoryPlusObj.map((item) => (
            <li className="Category__list-item" key={item._id}>
                <p className="Category__list-text">{item.title}</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>
                )) :  <p className="Category__list-text">Здесь нужно создать категорию</p>} 
        </ul>
        <div className="Category__button" onClick={onAddIncome}>Создать категорию</div>
        </div>
</section>
        </>
    )
}
export default Category;