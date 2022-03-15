import React from "react";
import LineGraph from "../LineGraph/LineGraph";
import Victory from "../Victory/Victory";
import DoughnutGraph from '../Doughnut/Doughnut';

function Charts(){
    return (
      <>
        <section className="Charts">
            <div className="Charts__row">
          <Victory />
          <DoughnutGraph />
          </div>
        <LineGraph />
        </section>
      </>
    );
}
export default Charts;