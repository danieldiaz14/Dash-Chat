import React from 'react'
import MessageBox from './MessageBox';



class ChatBox extends React.Component {

    render() {
        return (
            <div className="ui container">
                ChatBox
                <MessageBox/>
            </div>
        )
    }
}

export default ChatBox;