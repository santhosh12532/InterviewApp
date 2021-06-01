import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {

    updateOptionClass = () => {
        return 'correct-ans'
    }
    
    renderOptions = (correct_answer,option1,option2,option3) => {
        
        if(option2===""){
            return <div>
                <li className="option">{option1}</li>
                <li className="option">{correct_answer}</li>

            </div>
        }
        return <div>
            <li className= "option" onClick={this.updateOptionClass}>{correct_answer}</li>
            <li className="option" onClick={this.updateOptionClass}>{option1}</li>
            <li className="option" onClick={this.updateOptionClass}>{option2}</li>
            <li className="option" onClick={this.updateOptionClass}>{option3}</li>
        </div>
    }
    
    render(){
        const {fetchedDataWithTimer=""} = this.props;
        const {questionNumber,timer} = this.props
        const { question="Click on Start Quiz Button to start the quiz", correct_answer="correcti ans",option1="",option2="",option3=""} = fetchedDataWithTimer
       console.log(" Question is ",question)
            return(
                    <div className="question-container">
                        <div className="heading-container">
                            <div className="score-container">
                                <p className="score">SCORE</p>
                                <p className="count">0/10</p>
                            </div>
                            <h1 className="heading">Question {questionNumber+1} of 10</h1>
                            <div className="time-container">
                                <p className="score">TIME</p>
                                <p className="count">{timer} sec(s)</p>
                            </div>
                        </div>
                        
                        <p className="question">{question}</p>
                        <ul className="option-container">
                            {this.renderOptions(correct_answer,option1,option2,option3)}
                        </ul>
                    </div>
        )
    }
}

export default InterviewQuestion