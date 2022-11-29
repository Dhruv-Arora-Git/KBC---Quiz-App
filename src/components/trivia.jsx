import { useState, useEffect } from "react";
import useSound from "use-sound";
import select from "../sounds/select.mpeg";
import correct from "../sounds/correct.mp3";
import incorrect from "../sounds/wrong.mp3";

export default function Trivia({
  data,
  setStopTimer,
  questionNumber,
  setQuestionNumber,
  selectedAnswer,
  setSelectedAnswer,
}) {
  const [playCorrect] = useSound(correct);
  const [playIncorrect] = useSound(incorrect);
  const [playSelect] = useSound(select);

  const [question, setQuestion] = useState(null);
  const [selectedClass, setSelectedClass] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    setSelectedClass("answer");
  }, [questionNumber]);
  const handleSelectOption = (ans) => {
    playSelect();
    setSelectedAnswer(ans);
    setSelectedClass("answer active wait");
    delay(3000, () => {
      setSelectedClass(
        ans.correct ? "answer correct wait" : "answer wrong wait"
      );
    });
    delay(4500, () => {
      if (ans.correct) {
        playCorrect();
        delay(5000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        playIncorrect();
        delay(5000, () => {
          setStopTimer(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            key={question?.answers.indexOf(answer)}
            className={
              Object.is(answer?.text, selectedAnswer?.text)
                ? selectedClass
                : selectedClass === "answer active wait" ||
                  selectedClass === "answer correct wait" ||
                  selectedClass === "answer wrong wait"
                ? "answer wait"
                : "answer"
            }
            onClick={() => handleSelectOption(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
