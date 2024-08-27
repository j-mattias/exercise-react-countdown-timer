import { ReactElement } from "react";

interface ICountDownButtonsProps {
  handleOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  timeLeft: number;
  isActive: boolean;
  time: number;
}

function CountDownButtons({
  handleOnClick,
  timeLeft,
  isActive,
  time,
}: ICountDownButtonsProps): ReactElement {

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
