import { useContext,useEffect,useState } from "react";
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
            <h1 className="player-name">PLAYER : {name} </h1>
            <div className="quiz">
                <h1 className="ques-text">{Questions[currentQuestion].ques}</h1>
                <div className="options">
              
                {(optionChosen)?(
                    (Questions[currentQuestion].ans === "optA")?(
                        <button style={{border:"solid 4px green"}} onClick={()=>{selectOption("optA")}}>{Questions[currentQuestion].optA}</button>
                    ):(
                        <button style={{border:"solid 4px red"}} onClick={()=>{selectOption("optA")}}>{Questions[currentQuestion].optA}</button>
                    )
                ):(
                    <button onClick={()=>{selectOption("optA")}}>{Questions[currentQuestion].optA}</button>
                )}

                {(optionChosen)?(
                    (Questions[currentQuestion].ans === "optB")?(
                        <button style={{border:"solid 4px green"}} onClick={()=>{selectOption("optB")}}>{Questions[currentQuestion].optB}</button>
                    ):(
                        <button style={{border:"solid 4px red"}} onClick={()=>{selectOption("optB")}}>{Questions[currentQuestion].optB}</button>
                    )
                ):(
                    <button onClick={()=>{selectOption("optB")}}>{Questions[currentQuestion].optB}</button>
                )}



                {(optionChosen)?(
                    (Questions[currentQuestion].ans === "optC")?(
                        <button style={{border:"solid 4px green"}} onClick={()=>{selectOption("optC")}}>{Questions[currentQuestion].optC}</button>
                    ):(
                        <button style={{border:"solid 4px red"}} onClick={()=>{selectOption("optC")}}>{Questions[currentQuestion].optC}</button>
                    )
                ):(
                    <button onClick={()=>{selectOption("optC")}}>{Questions[currentQuestion].optC}</button>
                )}



                {(optionChosen)?(
                    (Questions[currentQuestion].ans === "optD")?(
                        <button style={{border:"solid 4px green"}} onClick={()=>{selectOption("optD")}}>{Questions[currentQuestion].optD}</button>
                    ):(
                        <button style={{border:"solid 4px red"}} onClick={()=>{selectOption("optD")}}>{Questions[currentQuestion].optD}</button>
                    )
                ):(
                    <button onClick={()=>{selectOption("optD")}}>{Questions[currentQuestion].optD}</button>
                )}

                </div>
                
            {(currentQuestion === Questions.length - 1 && optionChosen) ? (
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