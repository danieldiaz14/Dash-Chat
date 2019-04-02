import React from 'react';
import Header from '../Header';
import Body from './Body';
class Landing extends React.Component {

    render() {
        return (
            <div className="ui container">
                <Body/>
            </div>
        )
    }
};

export default Landing;