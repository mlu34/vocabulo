function GuessCell() {
  return (
    <input 
      type="text" 
      maxLength="1"
      id="guess-cell"
      disabled
      className="m-1"
    ></input>
  );
}

export default GuessCell;