import Keyboard from "./keyboard/Keyboard";
import GuessGrid from "./guess-grid/GuessGrid";

function Game() {
  return (
    <div className="text-center">
      <GuessGrid></GuessGrid>
      <Keyboard></Keyboard>
    </div>
  );
}

export default Game;
