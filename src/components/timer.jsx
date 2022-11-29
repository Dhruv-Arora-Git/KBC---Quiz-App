import { useState, useEffect } from "react";
import useSound from "use-sound";
import timerSound from "../sounds/timer.mpeg";
export default function Timer({
  setStopTimer,
  questionNumber,
  selectedAnswer,
  timerRef,
}) {
  const [timer, setTimer] = useState(30);
  const [timerPlay, { stop }] = useSound(timerSound);

  useEffect(() => {
    if (timer === 0) return setStopTimer(true);
    const interval = setInterval(() => {
      if (selectedAnswer) {
        stop();
        clearInterval(interval);
        setTimeout(() => {
          timerRef.current.className = "timer";
        }, 5000);

        return;
      } else {
        // timerRef.current.className = "timer";
        setTimer((prev) => prev - 1);
        if (timer > 6 && timer <= 16) {
          timerRef.current.className = "timer yellow";
        } else if (timer <= 6) {
          timerRef.current.className = "timer red";
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [setStopTimer, timer, selectedAnswer, questionNumber, timerRef, stop]);

  useEffect(() => {
    if (questionNumber === 16) return;
    setTimer(30);
    timerPlay();
  }, [questionNumber, timerPlay]);

  useEffect(() => {
    timerPlay();
  }, [timerPlay]);

  return timer;
}
