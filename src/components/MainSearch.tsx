import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCoinSearched } from "../state/slice";
import { ICoinShort } from "../types/ICoinResult";
import Card from "./_shared/Card";

type Props = {
  onSearch: (searchTerm: string) => void;
  resetSearchResult: () => void;
  searchResult: ICoinShort[];
};

const ENTER_KEY = "Enter";

export const MainSearch: React.FC<Props> = ({
  onSearch,
  searchResult,
  resetSearchResult,
}) => {
  const [searchTerm, setTerm] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    resetSearchResult();
  };

  const handledKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) onSearch(searchTerm);
  };

  const handledClickLink = (coin: ICoinShort) => {
    // TODO check if coind already exist in recently searched
    dispatch(addCoinSearched(coin));
    history.push(`/details/${coin.id}`);
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-full flex p-4">
        <input
          placeholder="Search your coin here and press ENTER"
          onChange={handledChange}
          onKeyPress={handledKey}
          className="w-full"
        />
      </div>
      {searchResult.length > 0 && (
        <>
          <div className="h-4"></div>
          <Card>
            <h2 className="text-gray-500 font-medium"> Results:</h2>
            <div className="max-h-32 overflow-y-auto">
              {searchResult.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handledClickLink(item)}
                  className="cursor-pointer font-bold text-green-500 hover:text-indigo-600"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </>
  );
};

MainSearch.displayName = "MainSearch";
