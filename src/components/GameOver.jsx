import "../css/gameover.css";

export default function GameOver({
  userName,
  moneyEarned,
  moneyEarnedTillNow,
  userQuit,
  setStopTimer,
  setQuestionNumber,
  setCheckpoint,
  setmoneyEarnedTillNow,
  setMoneyEarned,
  setSelectedAnswer,
  setUserQuit,
}) {
  const rupee = String.fromCharCode(0x20b9);
  return (
    <div className="game-over">
      <h1 className="user-name">{userName}</h1>
      <span className="earned">Won</span>
      <h2 className="amount">{userQuit ? moneyEarnedTillNow : moneyEarned}</h2>
      <div
        className="play-again"
        onClick={() => {
          setStopTimer(false);
          setCheckpoint(1);
          setQuestionNumber(1);
          setmoneyEarnedTillNow(`${rupee} 0`);
          setMoneyEarned(`${rupee} 0`);
          setSelectedAnswer(null);
          setUserQuit(false);
        }}
      >
        Play Again ?
      </div>
      <div className="play-again exit" onClick={() => window.location.reload()}>
        Exit
      </div>
    </div>
  );
}
