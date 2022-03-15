import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Green', 'Hotpink', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'red',
        'green',
        'hotpink',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white'
      ],
      borderWidth: 1,
    },
  ],
};

function DoughnutGraph() {
    return(
<>
<section className="Donut">
    <p className="Donut__title">5 крупных категорий расходов</p>
      <div className="Donut__don">

      <Doughnut data={data} />
</div>
      </section>

</>
    )
}
export default DoughnutGraph;