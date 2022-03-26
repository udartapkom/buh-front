import React from "react";
import LineGraph from "../LineGraph/LineGraph";
import Victory from "../Victory/Victory";
import DoughnutGraph from '../Doughnut/Doughnut';

function Charts(props){
  //все пропсы пробрасываем дальше...
    return (
      <>
        <section className="Charts">
            <div className="Charts__row">
          <Victory {...props}/>
          <DoughnutGraph {...props}/>
          </div>
        <LineGraph {...props}/>
        </section>
      </>
    );
}
export default Charts;