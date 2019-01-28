import React from 'react'
import MessageBox from './MessageBox';
import Message from './Message';

import { fetchChats } from '../../actions/index';
import { connect } from 'react-redux';

class ChatBox extends React.Component {

    componentDidMount() {
        this.props.fetchChats();
    }

    renderMessages() {
        if (!this.props.messages) {
            return <div>Messages</div>
        };

        return this.props.messages.map((element) => {
            return  <Message key={element.id} message={element.message} userName={element.userName} userPic={element.userPic}/>
        });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <div className="ui comments">
                        {this.renderMessages()}
                    </div>
                </div>
                <MessageBox/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.chat,
    }
}

export default connect(mapStateToProps, {fetchChats})(ChatBox);