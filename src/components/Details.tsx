import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { ICoinMarketChart, ICoinChart } from "../types";
import Chart from "./Chart";

import Card from "./_shared/Card";

const Details: React.FC = () => {
  const { coinID } = useParams<{ coinID: string }>();
  console.log(coinID);

  const { isLoading, data }: UseQueryResult<ICoinChart, Error> = useQuery<
    ICoinMarketChart,
    Error,
    ICoinChart,
    string
  >(
    "coinMarketChart",
    async () => {
      const resp = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1`
      );
      return resp.json();
    },
    {
      refetchOnMount: true,
      select: (data) => {
        return {
          values: data.prices.map((item) => item[1]),
          labels: data.prices.map((item) =>
            new Date(item[0]).toLocaleDateString()
          ),
        };
      },
    }
  );
  if (isLoading) return <>IS LOADING....</>;

  return (
    <Card>
      <h1 className="font-bold text-blue-700 text-2xl">
        {coinID.toUpperCase()}
      </h1>
      <Chart data={data} />
    </Card>
  );
};

Details.displayName = "Details";
export default Details;
