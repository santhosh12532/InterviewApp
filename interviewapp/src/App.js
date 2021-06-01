import InterviewQuestionsApp from './Components/InterviewQuestionsApp'
import './App.css';

const levelsData = [
  {
    id: 1,
    level: 'easy',
  },
  {
    id: 2,
    level: 'medium',
  },
  {
    id: 3,
    level: 'hard',
  },
]

const App = () => (
  <InterviewQuestionsApp levelsData={levelsData}/>
)

export default App;
