import GuessRow from "./GuessRow";

function GuessGrid() {
  return (
    <div>
      <GuessRow className="d-flex justify-content-center"></GuessRow>
      <GuessRow className="d-flex justify-content-center"></GuessRow>
      <GuessRow className="d-flex justify-content-center"></GuessRow>
      <GuessRow className="d-flex justify-content-center"></GuessRow>
      <GuessRow className="d-flex justify-content-center"></GuessRow>
    </div>
  );
}

export default GuessGrid;