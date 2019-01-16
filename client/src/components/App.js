import React from 'react';


import Header from './Header';
import ChatBox from './Chat/ChatBox';

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <Header/>
                <ChatBox/>
            </div>
        )
    }
}

export default App;