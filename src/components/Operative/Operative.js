import React from "react";

function Operative(props) {
    const {expenseObj} = props;
    const emptyOrder = JSON.stringify(expenseObj) === '{}';

    const [itemShowSumm, setItemShowSumm] = React.useState('')

    let itemSumm = 0;
    React.useEffect(() => {
        if(!emptyOrder){
            expenseObj.map((item) => {
                itemSumm = itemSumm + item.summ
                setItemShowSumm(itemSumm)
            })
        }
    }, [emptyOrder, expenseObj])
    return(
        <>
        <section className="Operative">
            <p className="Operative__text">Текущий баланс: <span className="Operative__balance">{itemShowSumm}</span></p>
            <p className="Operative__text">Курсы валют: 
            <span className="Operative__balance"> $ = 100,</span>
            <span className="Operative__balance"> &#8364; = 100</span>
            </p>
            </section>
        </>
    )
}
export default Operative;