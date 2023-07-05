import { useRef, useState } from "react";
import style from "./Game.module.css";

const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
  }) => {
    const [letter, setLetter] = useState();
    const letterInputRef = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      verifyLetter(letter);
  
      setLetter("");
  
      letterInputRef.current.focus();
    };
  
    return (
      <div className={style.game}>
        <p className={style.points}>
          <span>Pontuação</span>: {score}
        </p>
        <h1>Advinhe a palavra:</h1>
        <h3 className={style.tip}>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>
        <div className={style.wordContainer}>
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span className={style.letter} key={i}>
                {letter}
              </span>
            ) : (
              <span key={i} className={style.blankSquare}></span>
            )
          )}
        </div>
        <div className={style.letterContainer}>
          <p>Tente adivnhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              onChange={(e) => setLetter(e.target.value)}
              required
              value={letter}
              ref={letterInputRef}
            />
            <button>Jogar!</button>
          </form>
        </div>
        <div className={style.wrongLettersContainer}>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}, </span>
          ))}
        </div>
      </div>
    );
  };
export default Game