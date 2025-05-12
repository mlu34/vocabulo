import { useEffect } from "react";
import GuessCell from "./GuessCell";

function GuessRow(props) {
  const guess = props.guess;

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div>
      <GuessCell />
      <GuessCell />
      <GuessCell />
      <GuessCell />
      <GuessCell />
      <img 
        src="/question-circle.svg" 
        alt="info icon" 
        className="question-icon m-2"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title={guess? guess : ""}
      />
    </div>
  );
}

export default GuessRow;