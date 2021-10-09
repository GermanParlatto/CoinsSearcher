import React from "react";
import { Bar } from "react-chartjs-2";
import { ICoinChart } from "../types";

type Props = {
  data: ICoinChart | undefined;
};
const Chart: React.FC<Props> = ({ data }) => {
  if (!data) return <> </>;

  const dataToChart = {
    labels: [...data.labels],
    datasets: [
      {
        label: "price in USD",
        data: [...data.values],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-h-screen max-w-5xl">
      <Bar data={dataToChart} />
    </div>
  );
};

Chart.displayName = "Chart";
export default Chart;
