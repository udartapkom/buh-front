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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph(props) {
  const { allDataMinus, allDataPlus, getAlldataMinus, getAlldataPlus } = props;

  const [summJanv, setSummJanv] = React.useState("");
  const [summFebr, setSummFebr] = React.useState("");
  const [summMar, setSummMar] = React.useState("");
  const [summApr, setSummApr] = React.useState("");
  const [summMay, setSummMay] = React.useState("");
  const [summJune, setSummJune] = React.useState("");
  const [summJule, setSummJule] = React.useState("");
  const [summAug, setSummAug] = React.useState("");
  const [summSent, setSummSent] = React.useState("");
  const [summOkt, setSummOkt] = React.useState("");
  const [summNov, setSummNov] = React.useState("");
  const [summDec, setSummDec] = React.useState("");

  const [summJanvD, setSummJanvD] = React.useState("");
  const [summFebrD, setSummFebrD] = React.useState("");
  const [summMarD, setSummMarD] = React.useState("");
  const [summAprD, setSummAprD] = React.useState("");
  const [summMayD, setSummMayD] = React.useState("");
  const [summJuneD, setSummJuneD] = React.useState("");
  const [summJuleD, setSummJuleD] = React.useState("");
  const [summAugD, setSummAugD] = React.useState("");
  const [summSentD, setSummSentD] = React.useState("");
  const [summOktD, setSummOktD] = React.useState("");
  const [summNovD, setSummNovD] = React.useState("");
  const [summDecD, setSummDecD] = React.useState("");

  const optionsFraph = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Динамика доходов и расходов за год",
      },
    },
  };
  let now = new Date();

  React.useEffect(() => {
    let resultJan = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-01-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-01-31T00:00:00.000Z`
    );
    let resultFeb = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-02-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-02-28T00:00:00.000Z`
    );
    let resultMar = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-03-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-03-31T00:00:00.000Z`
    );
    let resultApr = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-04-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-04-30T00:00:00.000Z`
    );
    let resultMay = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-05-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-05-31T00:00:00.000Z`
    );
    let resultJun = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-06-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-06-30T00:00:00.000Z`
    );
    let resultJul = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-07-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-07-31T00:00:00.000Z`
    );
    let resultAug = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-08-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-08-31T00:00:00.000Z`
    );
    let resultSen = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-09-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-09-30T00:00:00.000Z`
    );
    let resultOkt = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-10-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-10-31T00:00:00.000Z`
    );
    let resultNov = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-11-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-11-30T00:00:00.000Z`
    );
    let resultDec = allDataPlus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-12-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-12-31T00:00:00.000Z`
    );

    let summJanv = 0;
    let summFebr = 0;
    let summMart = 0;
    let summApri = 0;
    let summMay = 0;
    let summJune = 0;
    let summJule = 0;
    let summAug = 0;
    let summSent = 0;
    let summOkt = 0;
    let summNov = 0;
    let summDec = 0;

    resultJan.map((item) => {
      summJanv = summJanv + item.summ;
    });
    setSummJanvD(summJanv);

    resultFeb.map((item) => {
      summFebr = summFebr + item.summ;
    });
    setSummFebrD(summFebr);

    resultMar.map((item) => {
      summMart = summMart + item.summ;
    });
    setSummMarD(summMart);

    resultApr.map((item) => {
      summApri = summApri + item.summ;
    });
    setSummAprD(summApri);

    resultMay.map((item) => {
      summMay = summMay + item.summ;
    });
    setSummMayD(summMay);

    resultJun.map((item) => {
      summJune = summJune + item.summ;
    });
    setSummJuneD(summJune);

    resultJul.map((item) => {
      summJule = summJule + item.summ;
    });
    setSummJuleD(summJule);

    resultAug.map((item) => {
      summAug = summAug + item.summ;
    });
    setSummAugD(summAug);

    resultSen.map((item) => {
      summSent = summSent + item.summ;
    });
    setSummSentD(summSent);

    resultOkt.map((item) => {
      summOkt = summOkt + item.summ;
    });
    setSummOktD(summOkt);

    resultNov.map((item) => {
      summNov = summNov + item.summ;
    });
    setSummNovD(summNov);

    resultDec.map((item) => {
      summDec = summDec + item.summ;
    });
    setSummDecD(summDec);
  }, [allDataPlus]);

  React.useEffect(() => {
    let resultJan = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-01-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-01-31T00:00:00.000Z`
    );
    let resultFeb = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-02-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-02-28T00:00:00.000Z`
    );
    let resultMar = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-03-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-03-31T00:00:00.000Z`
    );
    let resultApr = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-04-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-04-30T00:00:00.000Z`
    );
    let resultMay = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-05-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-05-31T00:00:00.000Z`
    );
    let resultJun = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-06-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-06-30T00:00:00.000Z`
    );
    let resultJul = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-07-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-07-31T00:00:00.000Z`
    );
    let resultAug = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-08-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-08-31T00:00:00.000Z`
    );
    let resultSen = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-09-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-09-30T00:00:00.000Z`
    );
    let resultOkt = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-10-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-10-31T00:00:00.000Z`
    );
    let resultNov = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-11-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-11-30T00:00:00.000Z`
    );
    let resultDec = allDataMinus.filter(
      (item) =>
        item.date >= `${now.getFullYear()}-12-01T00:00:00.000Z` &&
        item.date <= `${now.getFullYear()}-12-31T00:00:00.000Z`
    );

    let summJanv = 0;
    let summFebr = 0;
    let summMart = 0;
    let summApri = 0;
    let summMay = 0;
    let summJune = 0;
    let summJule = 0;
    let summAug = 0;
    let summSent = 0;
    let summOkt = 0;
    let summNov = 0;
    let summDec = 0;

    resultJan.map((item) => {
      summJanv = summJanv + item.summ;
    });
    setSummJanv(summJanv);

    resultFeb.map((item) => {
      summFebr = summFebr + item.summ;
    });
    setSummFebr(summFebr);

    resultMar.map((item) => {
      summMart = summMart + item.summ;
    });
    setSummMar(summMart);

    resultApr.map((item) => {
      summApri = summApri + item.summ;
    });
    setSummApr(summApri);

    resultMay.map((item) => {
      summMay = summMay + item.summ;
    });
    setSummMay(summMay);

    resultJun.map((item) => {
      summJune = summJune + item.summ;
    });
    setSummJune(summJune);

    resultJul.map((item) => {
      summJule = summJule + item.summ;
    });
    setSummJule(summJule);

    resultAug.map((item) => {
      summAug = summAug + item.summ;
    });
    setSummAug(summAug);

    resultSen.map((item) => {
      summSent = summSent + item.summ;
    });
    setSummSent(summSent);

    resultOkt.map((item) => {
      summOkt = summOkt + item.summ;
    });
    setSummOkt(summOkt);

    resultNov.map((item) => {
      summNov = summNov + item.summ;
    });
    setSummNov(summNov);

    resultDec.map((item) => {
      summDec = summDec + item.summ;
    });
    setSummDec(summDec);
  }, [allDataMinus]);

  const labels = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]; 

  const data = {
    labels,
    datasets: [
      {
        label: "Расходы",
        data: [
          summJanv,
          summFebr,
          summMar,
          summApr,
          summMay,
          summJune,
          summJule,
          summAug,
          summSent,
          summOkt,
          summNov,
          summDec,
        ], 
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Доходы",
        data: [
          summJanvD,
          summFebrD,
          summMarD,
          summAprD,
          summMayD,
          summJuneD,
          summJuleD,
          summAugD,
          summSentD,
          summOktD,
          summNovD,
          summDecD,
        ],
        borderColor: "forestgreen",
        backgroundColor: "forestgreen",
      },
    ],
  };

  React.useEffect(() => {
    getAlldataPlus();
    getAlldataMinus();
  }, []);

  return (
    <>
      <div className="LineGraph">
        <p className="Donut__title">Динамика расходов и доходов за год</p>
        <Line options={optionsFraph} data={data} />
      </div>
    </>
  );
}
export default LineGraph;