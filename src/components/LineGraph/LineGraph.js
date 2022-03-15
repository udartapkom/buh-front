import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Динамика доходов и расходов',
    },
  },
};

const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Расходы',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'red',
      backgroundColor: 'red',
    },
    {
      label: 'Доходы',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'forestgreen',
      backgroundColor: 'forestgreen',
    },
  ],
};

function LineGraph() {
    return(
        <>
        <div className='LineGraph'>
        <p className="Donut__title">Динамика расходов и доходов</p>
             <Line options={options} data={data} />
        </div>
        </>
    )
}
export default LineGraph;