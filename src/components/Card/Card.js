import React, {Component} from 'react';

import './Card.scss';

class Card extends Component {
    render(){
        const {number, onClick, className, hideNumbers} = this.props;
        return(
            <div className={`app-card ${hideNumbers ? hideNumbers : ''} ${className ? className : ''}`} onClick={onClick}>
                <span className="app-card__text">{number}</span>
            </div>
        )
    }
}

export default Card;