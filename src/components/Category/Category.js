import React from "react";
import Header from "../Header/Header";
import Operative from "../Operative/Operative";
import Navigation from "../Navigation/Navigation";
import edit from '../../images/edit.svg'
import cross from '../../images/cross.svg'

function Category(props) {
    const {
        onEdit,
        onAdd,
        onDelete
    } = props


const editCategory = (event) => {
    const category = event.target.parentElement.previousSibling.textContent
    //setCategory(event.target.parentElement.previousSibling.textContent)
    onEdit(category)
}
const deleteCategory = (event) => {
    const category = event.target.parentElement.previousSibling.textContent
    //setCategory(event.target.parentElement.previousSibling.textContent)
    onDelete(category)
}

    return(
        <>
<section className="Category">
    <div className="Category__types">
        <h2 className="Category__title">Категории расходов</h2>
        <ul className="Category__list Category__list_type_border">
            <li className="Category__list-item">
                <p className="Category__list-text">Без категории</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>

                <li className="Category__list-item">
                <p className="Category__list-text">Коммуналка</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>
        </ul>
        <div className="Category__button" onClick={onAdd}>Создать категорию</div>
        </div>
        <div className="Category__types">
        <h2 className="Category__title">Категории доходов</h2>
        <ul className="Category__list">
        <li className="Category__list-item">
                <p className="Category__list-text">Без категории</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>

                <li className="Category__list-item">
                <p className="Category__list-text">Зарплата</p>
                <div>
                <img src={edit} alt="Редактировать" className="Category__item-button" onClick={editCategory}></img>
                <img src={cross} alt="Удалить" className="Category__item-button" onClick={deleteCategory}></img>
                </div>
                </li>
        </ul>
        <div className="Category__button" onClick={onAdd}>Создать категорию</div>
        </div>
</section>
        </>
    )
}
export default Category;