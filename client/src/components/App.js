import React from 'react';

<<<<<<< HEAD
import GoogleAuth from './GoogleAuth';
import ChatBox from './ChatBox';
=======

import Header from './Header';
import ChatBox from './Chat/ChatBox';
>>>>>>> faf7884bf5cc30055553bf9f09799210335eadf2

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
<<<<<<< HEAD
                <div className="right menu">
                    <div className="ui item">
                        <GoogleAuth/>
                    </div>
                </div>
=======
                <Header/>
>>>>>>> faf7884bf5cc30055553bf9f09799210335eadf2
                <ChatBox/>
            </div>
        )
    }
}

export default App;