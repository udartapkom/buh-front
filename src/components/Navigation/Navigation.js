import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import schet from "../../images/schet.svg";
import vector from "../../images/vector.svg";
import dohod from "../../images/dohod.svg";
import rashod from "../../images/rashod.svg";
import analitic from "../../images/analitic.svg";
import graph from "../../images/graph.svg";
import arrow from "../../images/arrow.svg";

function Navigation(props) {
  const [arrowPos, setArrowPos] = useState(24);

  const arrowMovie = (event) => {
    setArrowPos(event.target.parentNode.offsetTop);
  };

  return (
    <>
      <nav className="Navigation">
        <div className="Navigation__list">
          <img
            src={arrow}
            alt="Указатель"
            className="Navigation__arrow"
            style={{ top: `${arrowPos + "px"}` }}
          ></img>
          <NavLink to="expense" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={schet} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Счета</p>
          </NavLink>
          <NavLink to="category" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={vector} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Категории</p>
          </NavLink>
          <NavLink to="income" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={dohod} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Доходы</p>
          </NavLink>
          <NavLink to="costs" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={rashod} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Расходы</p>
          </NavLink>
          <NavLink to="analitic" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={analitic} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Аналитика</p>
          </NavLink>
          <NavLink to="charts" className="Navigation__list-element" onClick={arrowMovie}>
            <img src={graph} alt="Счета" className="Navigation__icon"></img>
            <p className="Navigation__description">Графики</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
export default Navigation;
