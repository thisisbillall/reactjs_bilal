import "../styles/start.css";
import {stateContext} from "../helper/context";
import { useContext } from "react";

const Start = () => {
    const {name,setName,setGameState} = useContext(stateContext);

    const startGame = ()=>{
        if(!name){
            alert("Enter Name!!");
            return;
        }
        setGameState("quiz");  
    };
    return ( 
        <>
        <h1>Welcome to Quiz App!</h1>

        <div className="start">
            <input type="text" placeholder="Enter your name.."
            value={name} onChange={e=>{setName(e.target.value)}}
            /><br/>
            <button onClick={()=>{startGame()}}>Start</button>
        </div>
        </>
     );
}
 
export default Start;