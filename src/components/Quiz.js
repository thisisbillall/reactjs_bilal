import { useContext,useState } from "react";
import { stateContext } from "../helper/context";
import Questions from "../helper/questions";
import "../styles/quiz.css";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
  
    const {name, score, setScore, setGameState } = useContext(stateContext);
   
    const nextQuestionHandler =()=>{
        if(Questions[currentQuestion].ans === optionChosen){
            setScore(score+1);
        }
        setCurrentQuestion(currentQuestion+1);
        setOptionChosen("");
    };

    const selectOption=(option)=>{
        setOptionChosen(option);
    };

    const endQuiz = () => {
        if (Questions[currentQuestion].ans === optionChosen) {
          setScore(score + 1);
        }
        setGameState("end");
    };
    return ( 
        <>
            <h1 className="player-name">PLAYER : {name}</h1>
            <div className="quiz">
                <h1 className="ques-text">{Questions[currentQuestion].ques}</h1>
                <div className="options">
                <button onClick={()=>{selectOption("optA")}}>{Questions[currentQuestion].optA}</button>
                <button onClick={()=>{selectOption("optB")}}>{Questions[currentQuestion].optB}</button>
                <button onClick={()=>{selectOption("optC")}}>{Questions[currentQuestion].optC}</button>
                <button onClick={()=>{selectOption("optD")}}>{Questions[currentQuestion].optD}</button>
                </div>
                
            {currentQuestion === Questions.length - 1 ? (
                <button onClick={endQuiz} className="next-btn">
                Finish
                </button>
            ) : (
                
                (optionChosen && <button onClick={nextQuestionHandler} className="next-btn">
                Next
                </button>)
            )}
              
                
            </div>
        </>
     );
}
 
export default Quiz;