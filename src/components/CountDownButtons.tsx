import { ReactElement } from "react";

interface ICountDownButtonsProps {
  setIsActive: (bool: boolean) => void;
  setTimeLeft: () => void;
  timeLeft: number;
  isActive: boolean;
  time: number;
}

function CountDownButtons({
  setIsActive,
  setTimeLeft,
  timeLeft,
  isActive,
  time,
}: ICountDownButtonsProps): ReactElement {
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
      setTimeLeft();
      setIsActive(false);
    }
  };

  return (
    <div className="button-wrapper" onClick={handleOnClick}>
      <button className="btn-start" disabled={isActive || timeLeft <= 0 || isNaN(time)}>
        Start
      </button>
      <button className="btn-pause" disabled={!isActive}>
        Pause
      </button>
      <button className="btn-reset">Reset</button>
    </div>
  );
}

export default CountDownButtons;
