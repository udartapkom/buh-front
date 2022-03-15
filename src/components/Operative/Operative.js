import React from "react";

function Operative(props) {
    return(
        <>
        <section className="Operative">
            <p className="Operative__text">Текущий баланс: <span className="Operative__balance">0.00</span></p>
            <p className="Operative__text">Курсы валют: 
            <span className="Operative__balance"> $ = 100,</span>
            <span className="Operative__balance"> &#8364; = 100</span>
            </p>
            </section>
        </>
    )
}
export default Operative;