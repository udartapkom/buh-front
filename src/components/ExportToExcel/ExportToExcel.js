import React from "react";
import ReactExport from "react-export-excel-xlsx-fix";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function exportToExcel(props) {
  const { dataRange, dataRangeExp } = props;

  const columns = dataRange.map((item) => [
    item.account,
    item.catMinus,
    item.summ,
    item.date,
    item.description,
  ]);
  const columnsIncome = dataRangeExp.map((item) => [
    item.account,
    item.catPlus,
    item.summ,
    item.date,
    item.description,
  ]);

  const multiDataSet = [
    {
      xSteps: 1,
      ySteps: 1,
      columns: ["Расходы"],
      data: [""],
    },
    {
      xSteps: 1,
      columns: ["Счёт", "Категория", "Сумма", "Дата", "Примечание"],
      data: columns,
    },
    {
      xSteps: 1,
      ySteps: 2,
      columns: ["Доходы"],
      data: [""],
    },
    {
      xSteps: 1, // Will start putting cell with 1 empty cell on left most
      columns: ["Счёт", "Категория", "Сумма", "Дата", "Примечание"],
      data: columnsIncome,
    },
  ];

  return (
    <div>
      <ExcelFile element={<button className="Expense__button">Выгрузить в Excel</button>}>
        <ExcelSheet dataSet={multiDataSet} name="Organization" />
      </ExcelFile>
    </div>
  );
}
export default exportToExcel;