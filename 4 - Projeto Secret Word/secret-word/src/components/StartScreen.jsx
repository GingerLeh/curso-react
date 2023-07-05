import style from "./StartScreen.module.css";

const StartScreen = ({startGame}) => {
  return (
    <div>
        <div className={style.start}>
            <h1>Palavra Secreta</h1>
            <p>Clique no botão para começar a jogar!</p>
            <button onClick={startGame}>Começar</button>
        </div>
        
    </div>
  )
}

export default StartScreen