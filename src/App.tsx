import "./styles.css";
import { RegionDrop } from "./components/regionDrop";
import { RoleDrop } from "./components/roleDrop";
import { CardWrapper } from "./components/cardWrapper";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import _ from "lodash";
import { topPlayers } from "./utils/lolPlayerz";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState(["Top", "Top", "Top", "Top"]);
  const [top_players, setTop_players] = useState([]);

  useEffect(() => {
    if (data.length > 0) setTop_players(_.sampleSize(topPlayers, 3));
  }, [data]);

  function onSubmit(data) {
    setData(data);
  }

  function getMissingRole(roles, selected) {
    return roles.filter((e) => !selected.includes(e));
  }

  return (
    <div className="App">
      <div className="header-background">
        <Header />
      </div>
      <p className="title">Enter the players of your team </p>
      <form
        onSubmit={handleSubmit((data) =>
          setData([
            data.player1Name,
            data.player2Name,
            data.player3Name,
            data.player4Name
          ])
        )}
        className="input-form"
      >
        <RegionDrop />
        <div className="layout">
          <input
            className="player-input"
            {...register("player1Name")}
            placeholder="Player 1 Name"
          />
          <RoleDrop roleIndex={0} roles={roles} setRoles={setRoles} />
        </div>
        <div className="layout">
          <input
            className="player-input"
            {...register("player2Name")}
            placeholder="Player 2 Name"
          />
          <RoleDrop roleIndex={1} roles={roles} setRoles={setRoles} />
        </div>
        <div className="layout">
          <input
            className="player-input"
            {...register("player3Name")}
            placeholder="Player 3 Name"
          />
          <RoleDrop roleIndex={2} roles={roles} setRoles={setRoles} />
        </div>
        <div className="layout">
          <input
            className="player-input"
            {...register("player4Name")}
            placeholder="Player 4 Name"
          />
          <RoleDrop roleIndex={3} roles={roles} setRoles={setRoles} />
        </div>
        <div className="submit-layout">
          <input className="submit-button" type="submit" onSubmit={onSubmit} />
        </div>
      </form>
      {/* user input */}
      <p className="title">Your Team</p>
      <div className="card-grid">
        {data.map((d, idx) => (
          <CardWrapper summonerName={d} role={roles[idx]} />
        ))}
      </div>

      <div>
        <p className="title">Suggestions</p>
      </div>

      {/* suggestions */}
      <div className="card-grid">
        {top_players.map((player) => (
          <CardWrapper
            summonerName={player}
            role={getMissingRole(
              ["Top", "Mid", "Carry", "Support", "Jungle"],
              roles
            )}
          />
        ))}
      </div>
    </div>
  );
}
