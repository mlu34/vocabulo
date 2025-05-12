function KeyboardKey(props) {
  const letter = props.letter;

  return (
    <button 
      type="button" 
      id="keyboard-btn" 
      className="btn btn-secondary"
    >{letter}</button>
  );
}

export default KeyboardKey;
