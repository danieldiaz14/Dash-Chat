import React from 'react';

import GoogleAuth from './GoogleAuth';
import ChatBox from './ChatBox';

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <div className="right menu">
                    <div className="ui item">
                        <GoogleAuth/>
                    </div>
                </div>
                <ChatBox/>
            </div>
        )
    }
}

export default App;