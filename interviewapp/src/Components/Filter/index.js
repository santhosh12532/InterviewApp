import {Component} from 'react'

import './index.css'

class Filter extends Component {
    
    renderDifficultyLevelOptions = () => {
        const {levelsData} = this.props

        return levelsData.map(({id, level}) => (
            <option key={id} className="option" value={level}>
              {level.toUpperCase()}
            </option>
          ))
    }

    onChangeLevel = event => {
        const {onChangeDifficultyLevel} = this.props
        const {value} = event.target
    
        return onChangeDifficultyLevel(value)
      }
   
    render() {
        return(
            <div className="select-filters">
                <div className="select-options">
                    <label htmlFor="difficulty-level" className="filter-name">
                        DIFFICULTY LEVEL
                    </label>
                    <select className="select-item" onChange={event =>this.onChangeLevel(event)}>
                        {this.renderDifficultyLevelOptions()}
                    </select>
                </div>
          </div>
        )
    }
}

export default Filter