import {Component} from 'react'

import './index.css'

let scoreCount = 0

class InterviewQuestion extends Component {

    renderScoreCard = () => {
        return <div className="score-card">
            <h1>TIME IS UP</h1>
            <h1 className='heading'>Your Score : {scoreCount}</h1>
        </div>
    }

    renderClickedValue = (event) => {
        
        const {resetTimeAndProceedToNextQuestion,isClicked} = this.props
        
        const {fetchedDataWithTimer=""} = this.props;
        const {correct_answer}=fetchedDataWithTimer
 
        let clickedValue = event.target.textContent;
        console.log("event object",event.target)
        
        if(clickedValue===correct_answer){
            scoreCount+=1
            console.log(scoreCount)
            
            return resetTimeAndProceedToNextQuestion(event)
        }else{
            console.log("Wrong Answer")
        }
    }

    renderOptions = (correct_answer,option1,option2,option3) => {
        const {isClicked} = this.props
        const correctOptionClass = isClicked ? "correct-ans":"option"
        console.log("Render Options Function Called")
        console.log(correctOptionClass)
        if(option2===""){
            return <div>
                <li className="option" onClick={this.renderClickedValue} value={option1}>{option1}</li>
                <li className="option" onClick={this.renderClickedValue} value={correct_answer}>{correct_answer}</li>

            </div>
        }
        return <div>
            
            <li className= {`${correctOptionClass}`}value={correct_answer} onClick={this.renderClickedValue} >{correct_answer}</li>
            <li className="option" value={option1} onClick={this.renderClickedValue} >{option1}</li>
            <li className="option" value={option2} onClick={this.renderClickedValue} >{option2}</li>
            <li className="option"  value={option3}onClick={this.renderClickedValue} >{option3}</li>
        </div>
    }
    


    renderQuestion = () => {
        const {fetchedDataWithTimer=""} = this.props;
        const {questionNumber,timer} = this.props
        
        const { question="Click on Start Quiz Button to start the quiz", correct_answer="correct ans",option1="",option2="",option3=""} = fetchedDataWithTimer

        return <div >
        <div className="heading-container">
            <div className="score-container">
                <p className="score">SCORE</p>
                <p className="count">{scoreCount}/10</p>
            </div>
            <h1 className="heading">Question {questionNumber+1} of 10</h1>
            <div className="time-container">
                <p className="score">TIME</p>
                <p className="count">{timer} sec(s)</p>
            </div>
        </div>
        
        
        <p className="question">{questionNumber+1}.{question}</p>
        <ul className="option-container" >
            {this.renderOptions(correct_answer,option1,option2,option3)}
        </ul>
    </div>
    }
    
    
    render(){
        // const {fetchedDataWithTimer=""} = this.props;
         const {questionNumber} = this.props
        // const { question="Click on Start Quiz Button to start the quiz", correct_answer="correcti ans",option1="",option2="",option3=""} = fetchedDataWithTimer
       
            return(
                <div className="question-container">
                    {
                    questionNumber===10 ? this.renderScoreCard() : this.renderQuestion()
                }
                </div>
                
            )
    }
}

export default InterviewQuestion