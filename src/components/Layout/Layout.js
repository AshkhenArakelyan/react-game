import React, {Component} from 'react';

import Play from '../../containerts/Play/Play';

import './Layout.scss';

class Layout extends Component {
    render(){
        return(
            <div className="app-layout">
                <Play />
            </div>
        )
    }
}

export default Layout;