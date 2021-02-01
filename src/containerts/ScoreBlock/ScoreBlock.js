import React, {Component} from 'react';

import './ScoreBlock.scss';

class ScoreBlock extends Component {
    render(){
        const {score, showPlayButton, playAgain} = this.props;
        return(
            <div className="app-score-block">
                <h1 className="app-score-block__score">Your Score: {score}</h1>
                {showPlayButton ?
                    <button className="app-score-block__play-again-button" onClick={playAgain}>Play again</button> :
                    null}
            </div>
        )
    }
}

export default ScoreBlock;