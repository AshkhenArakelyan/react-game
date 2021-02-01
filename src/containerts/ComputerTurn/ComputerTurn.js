import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import './ComputerTurn.scss';

import loading from '../../assets/card-loading.gif';

class ComputerTurn extends Component {
    state = {
        loadingComputerNumber: true,
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState(() => ({loadingComputerNumber: false}))
        }, 1000);
    }
    
    render(){
        const {computerCardNumber, playerCardNumber, resultText} = this.props;
        return(
            <div className="app-computer-turn-block">
                <Card number={playerCardNumber}/>
                <h2>{resultText}</h2>
                {this.state.loadingComputerNumber ?
                 <img className="app-computer-turn-block__loading" src={loading} alt="loading"/> :
                 <Card number={computerCardNumber} className="app-computer-turn-block__computer-card"/>
                 }
            </div>
        )
    }
}

export default ComputerTurn;