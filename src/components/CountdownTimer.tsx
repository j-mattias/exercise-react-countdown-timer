import { useEffect, useRef, useState } from "react";

import "./CountdownTimer.css";

const TIME = 60;

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(TIME);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(TIME);

  // https://stackoverflow.com/questions/65638439/type-for-useref-if-used-with-setinterval-react-typescript
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // If timer has been started and there's time left
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);

      // If there's no time remaining stop the timer
    } else if (timeLeft <= 0) {
      setIsActive(false);
    }

    // Cleanup the interval, by clearing any existing timer. ! to assert value won't be null
    // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    return () => clearInterval(timerRef.current!);

    // Run useEffect when isActive or timeLeft changes. If only isActive is included, it will
    // not be able to check if timeLeft is 0
  }, [isActive, timeLeft]);

  // Update timeLeft and time value when input field is changed
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = parseInt(e.target.value);

    setTimeLeft(value);
    setTime(value);
  };

  // Conditional button handling
  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;

    // Early return if target isn't a button
    if (target.tagName !== "BUTTON") {
      return;
    }

    // Setup functionality for different buttons
    if (target.classList.contains("btn-start")) {
      setIsActive(true);
    }

    if (target.classList.contains("btn-pause")) {
      setIsActive(false);
    }

    if (target.classList.contains("btn-reset")) {
      setTimeLeft(time);
      setIsActive(false);
    }
  };

  return (
    <section className="countdown">
      <h1>Countdown Timer</h1>
      {timeLeft > 0 ? <h2>{timeLeft} seconds left</h2> : <h2>Timer finished!</h2>}

      <div className="input-wrapper">
        <label htmlFor="set-time">{isNaN(time) ? "Enter a valid number" : null}</label>
        <input
          id="set-time"
          onChange={(e) => handleInput(e)}
          type="number"
          min="0"
          className="timer-input"
          /* Cast to string to avoid error */
          value={String(time)}
          placeholder="10"
          disabled={isActive}
        />
      </div>
      <div className="button-wrapper" onClick={handleOnClick}>
        <button className="btn-start" disabled={isActive || timeLeft <= 0 || isNaN(time)}>
          Start
        </button>
        <button className="btn-pause" disabled={!isActive}>
          Pause
        </button>
        <button className="btn-reset">Reset</button>
      </div>
    </section>
  );
}

export default CountdownTimer;
