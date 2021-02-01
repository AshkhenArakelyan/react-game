import React, {Component} from 'react';

import ScoreBlock from  '../ScoreBlock/ScoreBlock';
import PlayerTurn from  '../PlayerTurn/PlayerTurn';
import ComputerTurn from '../ComputerTurn/ComputerTurn';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            showPlayButton: false,
            swithchPage: false,
            playerCardNumber: null,
            computerCardNumber: null,
            resultText: '',
            cardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }
    
    cardSelectHandle = (cardValue) => {
        this.setState({
            playerCardNumber: cardValue,
            swithchPage: true,
            showPlayButton: true,
        }, () => {
            if(this.state.swithchPage) {
                this.generateComputerCardNumber();
            } 
        })

        setTimeout(() => {
            const playerCardNumber = this.state.playerCardNumber;
            const computerCardNumber = this.state.computerCardNumber;
            const score = this.state.score;
            console.log('play');
            if(playerCardNumber > computerCardNumber) {
                this.setState({
                    score: this.state.score + 1,
                    resultText: 'You Win'
                })
            } else if(playerCardNumber < computerCardNumber && score > 0) {
                this.setState({
                    score: this.state.score - 1,
                    resultText: 'You Lose'

                })
            } else if(playerCardNumber < computerCardNumber) {
                this.setState({
                    resultText: 'You Lose'
                })
            } else if(playerCardNumber === computerCardNumber){
                this.setState({
                    resultText: 'Draw'
                })
            }
        }, 1000)
    }

    generateComputerCardNumber = () => {
        const cardNumbersCount = this.state.cardNumbers.length;
        let generatedNumber = this.state.cardNumbers[Math.floor(Math.random() * cardNumbersCount)];
        this.setState({
            computerCardNumber: generatedNumber,
        });
    }

    componentDidMount() {
        this.generateComputerCardNumber()
    }

    handlePlayAgain = () => {    
        this.setState({
            swithchPage: false,
            showPlayButton: false,
            resultText: ''
        })
    }

    render(){
        return(
            <div className="app-play">
                <ScoreBlock
                    score={this.state.score}
                    showPlayButton={this.state.showPlayButton}
                    playAgain={() => this.handlePlayAgain()}
                 />
                {this.state.swithchPage ?
                    <ComputerTurn
                        playerCardNumber={this.state.playerCardNumber}
                        computerCardNumber={this.state.computerCardNumber}
                        resultText={this.state.resultText}
                    /> :
                    <PlayerTurn 
                        cardNumbers={this.state.cardNumbers}
                        onClick={this.cardSelectHandle}
                    />
                }
            </div>
        )
    }
}

export default Play;