import {Component} from 'react'

import Filter from '../Filter'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'


class InterviewQuestionsApp extends Component{
    state = {
        activeDifficultyLevel: 'easy',
        fetchedQuestionData :[],
        questionNumber:0,
        timer:0,
        isQuizStarted:false,
        isClicked:false
        
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
      }

    onChangeDifficultyLevel = value => {
        this.setState({
            activeDifficultyLevel:value
        })
    }

    resetTimeAndProceedToNextQuestion = value =>{
        //clearInterval(this.timeInterval)
        this.setState({
            timer:9,
            isClicked:true,
        })
    }

    updateTimer = () => {
        const {timer,questionNumber}= this.state
        if(timer>=10){
            
            this.setState(prevState =>({
                timer:0,
                questionNumber:prevState.questionNumber+1,
                
            }))
        }
        else{
            this.setState(prevState =>({
                isQuizStarted:true,
                timer:prevState.timer+1,
                isClicked:false,
            }))
        }
        if(questionNumber===10)
        {
            clearInterval(this.timeInterval)
            
        }
    }

    // setQuestionsData = (questionDataToState) =>{
        
    // }

    fetchData = async () => {
        const {activeDifficultyLevel}= this.state
        
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${activeDifficultyLevel}`)
        const data = await response.json()
        const fetchedData = data.results
        const questionDataToState = fetchedData.map(eachQuestion =>({
            question:eachQuestion.question,
            correct_answer:eachQuestion.correct_answer,
            option1:eachQuestion.incorrect_answers[0],
            option2:eachQuestion.incorrect_answers[1],
            option3:eachQuestion.incorrect_answers[2]
        }))

        this.setState({
            fetchedQuestionData:questionDataToState
        })
        this.timeInterval=setInterval(this.updateTimer, 1000);
        
    }
    render(){
        const {levelsData}=this.props
        
         //const questionDataFromAPI =  this.fetchData();
        const {fetchedQuestionData,questionNumber,timer,isQuizStarted,isClicked} = this.state
        
        const fetchedDataWithTimer = fetchedQuestionData[questionNumber]

        //console.log("with timer",fetchedDataWithTimer)
        return(
            <div className="app-container">
                <h1 className="heading">
                    Interview Quiz Application
                </h1>
                <Filter levelsData={levelsData} onChangeDifficultyLevel={this.onChangeDifficultyLevel}/>
                {isQuizStarted ? <InterviewQuestion fetchedDataWithTimer={fetchedDataWithTimer} 
                questionNumber={questionNumber}
                timer={timer}
                resetTimeAndProceedToNextQuestion={this.resetTimeAndProceedToNextQuestion}
                isClicked ={isClicked}
                /> : "Click the below button to start Quiz"}
                <div className="button-container">
                <button className="start-button" onClick={this.fetchData}>Start Quiz</button>
                </div>
            </div>
        )
    }
}


export default InterviewQuestionsApp
