import "../css/start.css";
import kbcLogo from "../assets/logo.png";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import welcomeSound from "../sounds/welcome.mpeg";

export default function Start({ setUserName }) {
  const inputRef = useRef();
  const heading = useRef();
  const head = useRef();

  const [playSound] = useSound(play);
  const [welcomePlay] = useSound(welcomeSound);

  const handleClick = () => {
    if (inputRef.current.value) {
      console.log(head.current);
      heading.current.innerHTML = "Your game is about to start";
      head.current.innerHTML = inputRef.current.value;
      welcomePlay();
      setTimeout(() => {
        setUserName(inputRef.current.value);
        playSound();
      }, 5000);
    }
  };

  return (
    <>
      <div className="top">
        <h1 ref={heading} className="heading">
          KBC - dcoder_op
        </h1>
        <p ref={head} className="head"></p>
      </div>
      <div className="start">
        <input
          type="text"
          placeholder="Enter your Name"
          className="start-input"
          ref={inputRef}
        />
        <button className="start-btn" onClick={() => handleClick()}>
          Start
        </button>
      </div>
      <img className="kbc-image" src={kbcLogo} alt="logo" />
    </>
  );
}
