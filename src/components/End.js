import { useContext } from "react";
import { stateContext } from "../helper/context";
import Questions from "../helper/questions";
import "../styles/end.css";

const End = () => {
    const resetGame=()=>{
        setScore(0);
        setGameState("start");
    };
    const {name,score,setScore,gameState,setGameState}=useContext(stateContext);
    return ( 
        <div className="end">
            <h1>Congrats {name} !</h1>
            <h3>You scored: {score}/{Questions.length}</h3>
            <button className="restart-btn"
            onClick={resetGame}>Restart</button>
        </div>
     );
}
 
export default End;