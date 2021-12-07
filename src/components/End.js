import { useContext } from "react";
import { stateContext } from "../helper/context";
import Questions from "../helper/questions";
import "../styles/end.css";

const End = () => {

    var dispMsg ="";
    var color ="";
    
    const resetGame=()=>{
        setScore(0);
        setGameState("start");
        setName("");
    };
    const {name,setName,score,setScore,setGameState}=useContext(stateContext);
    if(score===5){
        dispMsg="Well Done!!!";
        color = "red";
    }
    else if(score>=3 && score<=4){
        dispMsg="Very Good!!!";
        color = "skyblue";

    }
    else{
        dispMsg="Sorry you're not eligible to get best offer,please try again";
        color = "white";

    }
    return ( 
        <div className="end">
            <h1 style={{color}}> {dispMsg}  {name} </h1>
            <h2>You scored: {score}/{Questions.length}</h2>
            <button className="restart-btn"
            onClick={resetGame}>Restart</button>
        </div>
     );
}
 
export default End;