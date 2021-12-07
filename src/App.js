import { useState } from 'react/cjs/react.development';
import {stateContext} from  "./helper/context";
import './App.css';
import End from './components/End';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {
  const [gameState,setGameState]=useState("start");
  const [name,setName]=useState("");
  const [score,setScore]=useState(0);
  
  if(!name){
    alert("Enter name !!")
  }
  return (

    <div className="App">
      <stateContext.Provider
        value={{
          gameState,
          setGameState,
          name,
          setName,
          score,
          setScore,
        }}
      >
      <h1>Welcome to Quiz App!</h1>
      {gameState==="start" && <Start/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="end" && <End/>}
      </stateContext.Provider>
    </div>
  );
}

export default App;
