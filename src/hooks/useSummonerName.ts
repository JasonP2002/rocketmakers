import axios from "axios";
import React, { useState } from "react";

export interface ISummoner {
  name: string;
  puuid: string;
}

export function useSummonerName(summonerName: string): ISummoner | undefined {
  const [summoner, setSummoner] = useState();

  React.useEffect(() => {
    if (!summonerName) return;
    axios
      .get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apikey}`
      )
      .then((response) => {
        setSummoner(response.data);
      });
  }, [summonerName]);

  return summoner ? (summoner as ISummoner) : undefined;
}
