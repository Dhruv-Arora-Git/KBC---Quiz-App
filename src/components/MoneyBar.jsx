export default function MoneyBar({
  moneyList,
  questionNumber,
  stopTimer,
  checkpoint,
  userQuit,
}) {
  return (
    <div className="money-bar">
      <ul className="money-list">
        {stopTimer
          ? userQuit
            ? moneyList.map((money) => (
                <li
                  className={
                    questionNumber - 1 === money.id
                      ? "money-list-item active"
                      : money.id === 5 || money.id === 10
                      ? "money-list-item checkpoint"
                      : money.id < questionNumber
                      ? "money-list-item marked"
                      : "money-list-item"
                  }
                  key={money.value}
                >
                  <span className="money-list-item-number">{money.id}</span>
                  <span className="money-list-item-amount">
                    {" "}
                    {money.amount}
                  </span>
                </li>
              ))
            : moneyList.map((money) => (
                <li
                  className={
                    checkpoint === 1
                      ? money.id === 1
                        ? "money-list-item active"
                        : money.id === 5 || money.id === 10
                        ? "money-list-item checkpoint"
                        : "money-list-item"
                      : checkpoint === 5
                      ? money.id === 5
                        ? "money-list-item active"
                        : money.id < 5
                        ? "money-list-item marked"
                        : money.id === 10
                        ? "money-list-item checkpoint"
                        : "money-list-item"
                      : money.id === 10
                      ? "money-list-item active"
                      : money.id < 10
                      ? money.id === 5
                        ? "money-list-item checkpoint"
                        : "money-list-item marked"
                      : "money-list-item"
                  }
                  key={money.value}
                >
                  <span className="money-list-item-number">{money.id}</span>
                  <span className="money-list-item-amount">
                    {" "}
                    {money.amount}
                  </span>
                </li>
              ))
          : moneyList.map((money) => (
              <li
                className={
                  questionNumber === money.id
                    ? "money-list-item active"
                    : money.id === 5 || money.id === 10
                    ? "money-list-item checkpoint"
                    : money.id < questionNumber
                    ? "money-list-item marked"
                    : "money-list-item"
                }
                key={money.value}
              >
                <span className="money-list-item-number">{money.id}</span>
                <span className="money-list-item-amount"> {money.amount}</span>
              </li>
            ))}
      </ul>
    </div>
  );
}
