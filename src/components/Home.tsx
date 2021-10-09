import React, { useState } from "react";
import { MainSearch } from "./MainSearch";
import { RecentlySearch } from "./RecentlySearch";
import { useQuery, UseQueryResult } from "react-query";
import { ICoinShort } from "../types/ICoinResult";
import { useDispatch, useSelector } from "react-redux";
import { allCoinsSelector, recentlySearchedSelector } from "../state/selector";
import { addAllCoins } from "../state/slice";

const fetchCoinList = async () => {
  const resp = await fetch("https://api.coingecko.com/api/v3/coins/list/");
  return resp.json();
};

const filterCoins = (item: ICoinShort, searchTerm: string) =>
  item.name.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase());

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const initialConinsResult: ICoinShort[] = [];
  const [coinsResult, setCoinsResult] = useState(initialConinsResult);

  const allCoins = useSelector(allCoinsSelector);
  const recentlySearched = useSelector(recentlySearchedSelector);

  const { isLoading }: UseQueryResult<ICoinShort[], Error> = useQuery<
    ICoinShort[],
    Error,
    ICoinShort[],
    string
  >("coin", fetchCoinList, {
    enabled: allCoins.length === 0,
    staleTime: Infinity,
    onSuccess: (data) => {
      dispatch(addAllCoins(data));
    },
  });

  const handledSearch = (searchTerm: string) => {
    setCoinsResult(allCoins.filter((item) => filterCoins(item, searchTerm)));
  };

  const handledResetSearchResult = () => {
    setCoinsResult(initialConinsResult);
  };

  if (isLoading) return <>IS LOADING....</>;
  return (
    <>
      <MainSearch
        onSearch={handledSearch}
        resetSearchResult={handledResetSearchResult}
        searchResult={coinsResult}
      />
      <div className="h-8"></div>
      <RecentlySearch coins={recentlySearched} />
    </>
  );
};

Home.displayName = "Home";
export default Home;
