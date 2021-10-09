import React from "react";
import { Link } from "react-router-dom";
import { ICoinShort } from "../types/ICoinResult";
import Card from "./_shared/Card";

type Props = {
  coins: ICoinShort[];
};

export const RecentlySearch: React.FC<Props> = ({ coins }) => {
  return (
    <>
      {coins.length > 0 && (
        <Card>
          <div className="flex-col w-full text-gray-500 font-semibold">
            Recently searched:
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="pl-4 font-bold text-green-500 hover:text-indigo-600"
              >
                <Link to={`/details/${coin.id}`}>{coin.name}</Link>
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );
};

RecentlySearch.displayName = "RecentlySearch";
