import { ReactElement } from "react";

interface ITimerInputProps {
  time: number;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}

function TimerInput({ time, handleInput, isActive }: ITimerInputProps): ReactElement {
  return (
    <div className="input-wrapper">
      <label htmlFor="set-time">{isNaN(time) ? "Enter a valid number" : null}</label>
      <input
        id="set-time"
        onChange={handleInput}
        type="number"
        min="0"
        className="timer-input"
        /* Cast to string to avoid error */
        value={String(time)}
        placeholder="10"
        disabled={isActive}
      />
    </div>
  );
}

export default TimerInput;
