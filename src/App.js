import React, { useRef, useState } from "react";
import Trivia from "./components/trivia";
import Timer from "./components/timer";
import Start from "./components/Start";
import useSound from "use-sound";
import play from "./sounds/play.mp3";
import "./css/App.css";

import { useEffect } from "react";
import Winner from "./components/Winner";
import GameOver from "./components/GameOver";
import MoneyBar from "./components/MoneyBar";
import Quit from "./components/Quit";

function App() {
  const data = [
    {
      id: 1,
      question: "Identify the correct syntax for declaring arrays in C++.",
      answers: [
        {
          text: "int[] arr",
          correct: false,
        },
        {
          text: "int arr[]",
          correct: true,
        },
        {
          text: "int arr = new int[]",
          correct: false,
        },
        {
          text: "int arr = new Array()",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is “address of operator” ?",
      answers: [
        {
          text: "&",
          correct: true,
        },
        {
          text: "*",
          correct: false,
        },
        {
          text: "::",
          correct: false,
        },
        {
          text: "[]",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "When can an inline function be expanded?",
      answers: [
        {
          text: "Runtime",
          correct: false,
        },
        {
          text: "Compile time",
          correct: true,
        },
        {
          text: "Never gets expanded",
          correct: false,
        },
        {
          text: "depends on compiler",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Choose the correct subscript operator:",
      answers: [
        {
          text: "()",
          correct: false,
        },
        {
          text: "{}",
          correct: false,
        },
        {
          text: "*",
          correct: false,
        },
        {
          text: "[]",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "How much bytes of memory does void occupy?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "0",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Identify the storage classes that have global visibility.",
      answers: [
        {
          text: "static",
          correct: false,
        },
        {
          text: "register",
          correct: false,
        },
        {
          text: "auto",
          correct: false,
        },
        {
          text: "extern",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Choose the option below which is not a member of class.",
      answers: [
        {
          text: "Friend function",
          correct: true,
        },
        {
          text: "Static function",
          correct: false,
        },
        {
          text: "Virtual function",
          correct: false,
        },
        {
          text: "Const function",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Under which pillar of OOPS does base class and derived class relationship come?",
      answers: [
        {
          text: "Abstraction",
          correct: false,
        },
        {
          text: "Polymorphism",
          correct: false,
        },
        {
          text: "Encapsulation",
          correct: false,
        },
        {
          text: "Inheritence",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question:
        "Which of the following functions can be inherited from base class?",
      answers: [
        {
          text: "Constructor",
          correct: false,
        },
        {
          text: "Destructor",
          correct: false,
        },
        {
          text: "Static",
          correct: false,
        },
        {
          text: "None",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following is not a type of inheritance?",
      answers: [
        {
          text: "Multilevel",
          correct: false,
        },
        {
          text: "Distributed",
          correct: true,
        },
        {
          text: "Heirarichal",
          correct: false,
        },
        {
          text: "Multiple",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Which of the following is used to terminate the function declaration in C++?",
      answers: [
        {
          text: ";",
          correct: true,
        },
        {
          text: "}",
          correct: false,
        },
        {
          text: "]",
          correct: false,
        },
        {
          text: ")",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which keyword is used to define the macros in C++?",
      answers: [
        {
          text: "#define",
          correct: true,
        },
        {
          text: "#marco",
          correct: false,
        },
        {
          text: "using",
          correct: false,
        },
        {
          text: "macro",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "How structures and classes in C++ differ?",
      answers: [
        {
          text: "Structures cannot have private members whereas classes can have",
          correct: false,
        },
        {
          text: "Structures by default hide every member whereas classes do not",
          correct: false,
        },
        {
          text: "In Structures, members are private by default whereas, in Classes, they are public by default",
          correct: false,
        },
        {
          text: "In Structures, members are public by default whereas, in Classes, they are private by default",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question:
        "Which of the following is not correct for virtual function in C++ ?",
      answers: [
        {
          text: "Virtual function can be static",
          correct: true,
        },
        {
          text: "Virtual function should be accessed using pointers",
          correct: false,
        },
        {
          text: "Must be declared in public section of class",
          correct: false,
        },
        {
          text: "Virtual function is defined in base class",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Which of the following data type is supported in C++ but not in C?",
      answers: [
        {
          text: "int",
          correct: false,
        },
        {
          text: "bool",
          correct: true,
        },
        {
          text: "double",
          correct: false,
        },
        {
          text: "float",
          correct: false,
        },
      ],
    },
  ];

  const rupee = String.fromCharCode(0x20b9);
  const moneyList = [
    { id: 1, amount: `${rupee} 1,000`, value: 1000 },
    { id: 2, amount: `${rupee} 5,000`, value: 5000 },
    { id: 3, amount: `${rupee} 10,000`, value: 10000 },
    { id: 4, amount: `${rupee} 20,000`, value: 20000 },
    { id: 5, amount: `${rupee} 50,000`, value: 50000 },
    { id: 6, amount: `${rupee} 1,00,000`, value: 100000 },
    { id: 7, amount: `${rupee} 2,00,000`, value: 200000 },
    { id: 8, amount: `${rupee} 5,00,000`, value: 500000 },
    { id: 9, amount: `${rupee} 10,00,000`, value: 1000000 },
    { id: 10, amount: `${rupee} 20,00,000`, value: 2000000 },
    { id: 11, amount: `${rupee} 50,00,000`, value: 5000000 },
    { id: 12, amount: `${rupee} 1,00,00,000`, value: 10000000 },
    { id: 13, amount: `${rupee} 3,00,00,000`, value: 30000000 },
    { id: 14, amount: `${rupee} 5,00,00,000`, value: 50000000 },
    { id: 15, amount: `${rupee} 10,00,00,000`, value: 100000000 },
  ].reverse();

  const [questionNumber, setQuestionNumber] = useState(1);
  const [checkpoint, setCheckpoint] = useState(1);
  const [stopTimer, setStopTimer] = useState(0);
  const [moneyEarned, setMoneyEarned] = useState(`${rupee} 0`);
  const [moneyEarnedTillNow, setmoneyEarnedTillNow] = useState(`${rupee} 0`);
  const [userQuit, setUserQuit] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userName, setUserName] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const timerRef = useRef();

  const [playSound] = useSound(play);

  useEffect(() => {
    if (questionNumber === 16) {
      setStopTimer(true);
      setGameWon(true);
      return;
    }
    playSound();
  }, [questionNumber, playSound]);

  useEffect(() => {
    if (questionNumber > 1) {
      setmoneyEarnedTillNow(moneyList[16 - questionNumber].amount);
      if (questionNumber === 5) {
        setMoneyEarned(`${rupee} 50,000`);
        setCheckpoint(5);
      } else if (questionNumber === 10) {
        setMoneyEarned(`${rupee} 20,00,000`);
        setCheckpoint(10);
      }
    }
  }, [moneyList, questionNumber, rupee]);

  return (
    <div className="app">
      {userName ? (
        gameWon ? (
          <Winner playerName={userName} gameWon={gameWon} />
        ) : (
          <>
            <div className="main">
              {stopTimer ? (
                <GameOver
                  userName={userName}
                  moneyEarned={moneyEarned}
                  moneyEarnedTillNow={moneyEarnedTillNow}
                  userQuit={userQuit}
                  setStopTimer={setStopTimer}
                  setQuestionNumber={setQuestionNumber}
                  setCheckpoint={setCheckpoint}
                  setmoneyEarnedTillNow={setmoneyEarnedTillNow}
                  setMoneyEarned={setMoneyEarned}
                  setSelectedAnswer={setSelectedAnswer}
                  setUserQuit={setUserQuit}
                />
              ) : (
                <>
                  <div className="top">
                    <Quit
                      setStopTimer={setStopTimer}
                      setUserQuit={setUserQuit}
                      selectedAnswer={selectedAnswer}
                    />
                    <div ref={timerRef} className="timer">
                      <Timer
                        setStopTimer={setStopTimer}
                        questionNumber={questionNumber}
                        selectedAnswer={selectedAnswer}
                        timerRef={timerRef}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStopTimer={setStopTimer}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      selectedAnswer={selectedAnswer}
                      setSelectedAnswer={setSelectedAnswer}
                    />
                  </div>
                </>
              )}
            </div>
            <MoneyBar
              moneyList={moneyList}
              questionNumber={questionNumber}
              stopTimer={stopTimer}
              checkpoint={checkpoint}
              userQuit={userQuit}
            />
          </>
        )
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
