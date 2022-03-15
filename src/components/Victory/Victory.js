import React, { useCallback, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Расходы', 'Доходы'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
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

const Victory = () => {
 
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