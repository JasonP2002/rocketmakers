import * as React from "react";
import "../styles.css";

interface ICardProps {
  summonerName: string;
  championName: string;
  role: string;
}

export const Card = (props: ICardProps) => {
  return (
    <div className="Card">
      <img
        className="Card-Image"
        alt="champion pic"
        src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${props.championName}.png`}
      />
      <div>
        <div className="CardDataHeading">Summoner Name:</div>
        <div className="CardDataValue">{props.summonerName}</div>
        <div className="CardDataHeading">Champion:</div>
        <div className="CardDataValue">{props.championName}</div>
        <div className="CardDataHeading">Role: </div>
        <div className="CardDataValue">{props.role}</div>
      </div>
    </div>
  );
};
