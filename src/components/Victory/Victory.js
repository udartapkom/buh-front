import React, { useCallback, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Victory = (props) => {
  
  const [itemShowSummP, setItemShowSummP] = React.useState('')
  const [itemShowSummM, setItemShowSummM] = React.useState('')
  let summP = 0;
  let summM = 0;

  const { 
    allDataMinus, 
    allDataPlus, 
    getAlldataMinus, 
    getAlldataPlus 
  } = props

  React.useEffect(() => {
  getAlldataPlus()
  getAlldataMinus()
}, [])

React.useEffect(() => {
  if(allDataPlus.length !== 0){
    allDataPlus.map((item) => (
      summP = summP + item.summ
    ))
    setItemShowSummP(summP)
   }
}, [allDataPlus])

    React.useEffect(() => {
      if(allDataMinus.lenhth !== 0){
        allDataMinus.map((item) => (
          summM = summM + item.summ
        ))
        setItemShowSummM(summM)
      }
    }, [allDataMinus])

  const data = {
    labels: ['Расходы', 'Доходы'],
    datasets: [
      {
        label: '# of Votes',
        data: [itemShowSummM, itemShowSummP],
        backgroundColor: [
          'tomato',
          'forestgreen',
        ],
        borderColor: [
          'white',
          'white',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
    <section className="Donut Donut__border_right">
    <p className="Donut__title">Паритет доходов и расходов</p>
      <div className="Donut__don">

<Pie data={data} />
</div>
      </section>
    </>
  );
};
  
  export default Victory;