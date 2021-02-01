import React, {Component} from 'react';

import Card from '../../components/Card/Card';

import './PlayerTurn.scss';
// import { cardNumber } from '../../data-mockup/card-data';

class PlayerTurn extends Component {
    render(){
        const {onClick, cardNumbers} = this.props;
        const randomCardNumbers = cardNumbers.sort(() => Math.random() - 0.5);
        return(
            <div className="app-player-turn-block">
                <h2 className="app-player-turn-block__choose-text">Choose a card &#8594;</h2>
                {randomCardNumbers.map((el, index) => {
                    return (
                        <Card 
                            key={el} 
                            number={randomCardNumbers[index]} 
                            onClick={() => onClick(el)}
                            hideNumbers="hidden-numbers"
                        />
                    )
                })}
            </div>
        )
    }
}

export default PlayerTurn;