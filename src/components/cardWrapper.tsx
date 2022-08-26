import * as React from "react";
import "../styles.css";
import { Card } from "./card";
import { useSummonerName } from "../hooks/useSummonerName";
import { useMatchIds } from "../hooks/useMatchIds";
import { useMatch } from "../hooks/useMatch";

interface ICardWrapperProps {
  summonerName: string;
  role: string;
}

export const CardWrapper = (props: ICardWrapperProps) => {
  const summoner = useSummonerName(props.summonerName);
  const matchIds = useMatchIds(summoner?.puuid);
  const match = useMatch(matchIds.length ? matchIds[0] : undefined);

  const summonerMatch = match?.info.participants.find(
    (p) => p.puuid === summoner.puuid
  );

  return (
    <Card
      summonerName={props.summonerName}
      championName={summonerMatch?.championName}
      role={props.role}
    />
  );
};
