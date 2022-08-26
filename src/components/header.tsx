import * as React from "react";
import "../styles.css";
import logo from "../image/logo.png";

export const Header = () => {
  return (
    <div className="heading">
      <img className="logo" alt="logo" src={logo} />

      <h1>Esportr </h1>
    </div>
  );
};
