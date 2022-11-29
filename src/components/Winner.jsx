import "../css/winner.css";
import useSound from "use-sound";
import winSound from "../sounds/winner.mpeg";
import kbcLogo from "../assets/logo.png";
import Confetti from "react-confetti";
import { useEffect } from "react";

export default function Winner({ playerName, gameWon }) {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
  ];
  const [winPlay] = useSound(winSound);
  useEffect(() => {
    winPlay();
  }, [gameWon, winPlay]);
  return (
    <>
      <Confetti numberOfPieces={200} colors={colors} />
      <div className="win">
        <img className="kbc-logo" src={kbcLogo} alt="logo" />
        <h1 className="win-heading">Congratulations {playerName} !</h1>
        <h2 className="win-subheading">
          You have won{" "}
          <span className="win-amount">
            <span className="--i:1">1</span>
            <span className="--i:2">0</span>
            <span className="--i:3">C</span>
            <span className="--i:4">r</span>
            <span className="--i:5">o</span>
            <span className="--i:6">r</span>
            <span className="--i:7">e</span>
          </span>
          <span> </span>
          Rupees
        </h2>
      </div>
    </>
  );
}
