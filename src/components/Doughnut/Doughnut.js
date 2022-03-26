import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutGraph(props) {
  const [category, setCategory] = React.useState([]);
  const [summArr, setSummArr] = React.useState([]);
  const { allDataMinus } = props;

  let summA = [];
  React.useEffect(() => {
    setCategory(
      allDataMinus
        .map((n) => n.catMinus)
        .filter((n, i, a) => i !== a.indexOf(n))
        .filter((n, i, a) => i === a.indexOf(n))
    );

    category.map((item) => {
      let i = allDataMinus.filter((i) => i.catMinus === item);
      let z = i.map((item) => item.summ).reduce((partialSum, a) => partialSum + a, 0);
      summA.push(z);
      setSummArr(summA);
    });
  }, [allDataMinus]);

  const data = {
    labels: category, //['Red', 'Green', 'Hotpink', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: summArr.sort().slice(0, 5), //, [12, 19, 3, 5, 2],
        backgroundColor: ["red", "green", "hotpink", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderColor: ["white", "white", "white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section className="Donut">
        <p className="Donut__title">5 крупных категорий расходов</p>
        <div className="Donut__don">
          <Doughnut data={data} />
        </div>
      </section>
    </>
  );
}
export default DoughnutGraph;
