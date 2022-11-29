import "../css/quit.css";
export default function Quit({ setStopTimer, setUserQuit, selectedAnswer }) {
  function handleQuit() {
    setUserQuit(true);
    setStopTimer(true);
  }
  return (
    <h1
      className={selectedAnswer ? "quit freeze" : "quit"}
      onClick={() => handleQuit()}
    >
      Quit
    </h1>
  );
}
