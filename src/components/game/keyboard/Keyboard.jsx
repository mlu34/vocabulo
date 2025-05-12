import KeyboardKey from "./KeyboardKey";

function Keyboard() {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L",];
  const rowThree = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫",];

   function createKey(letter) {
    return (
      <KeyboardKey key={letter} letter={letter}></KeyboardKey>
    );
  }

  return (
    <div className="m-5">
      <div className="d-flex justify-content-center">{rowOne.map(createKey)}</div>
      <div className="d-flex justify-content-center">{rowTwo.map(createKey)}</div>
      <div className="d-flex justify-content-center">{rowThree.map(createKey)}</div>
    </div>
  );
}

export default Keyboard;
