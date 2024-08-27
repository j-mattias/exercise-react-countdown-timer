import { useEffect, useRef, useState } from "react";

const TIME = 3;

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(TIME);
  const [isActive, setIsActive] = useState<boolean>(false);

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

  return (
    <section className="countdown">
      <h1>Countdown Timer</h1>
      <h2>{timeLeft} seconds left</h2>
      <button disabled={isActive || timeLeft <= 0} onClick={() => setIsActive(true)}>
        Start
      </button>
      <button disabled={!isActive} onClick={() => setIsActive(false)}>
        Pause
      </button>
      <button
        onClick={() => {
          setTimeLeft(TIME);
          setIsActive(false);
        }}
      >
        Reset
      </button>
    </section>
  );
}

export default CountdownTimer;
