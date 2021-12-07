import "../styles/start.css";
import {stateContext} from "../helper/context";
import { useContext } from "react";

const Start = () => {
    const {name,setName,gameState,setGameState} = useContext(stateContext);
    return ( 
        <div className="start">
            <input type="text" placeholder="Enter your name.."
            value={name} onChange={e=>{setName(e.target.value)}}
            /><br/>
            <button onClick={()=>{setGameState("quiz")}}>Start</button>
        </div>
     );
}
 
export default Start;