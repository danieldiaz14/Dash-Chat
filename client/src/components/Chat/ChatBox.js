import React from 'react'
import MessageBox from './MessageBox';

import { fetchChats } from '../../actions/index';
import { connect } from 'react-redux';

class ChatBox extends React.Component {

    componentDidMount() {
        this.props.fetchChats();
    }

    render() {
        return (
            <div className="ui container">
                ChatBox
                <MessageBox/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        messages: state.chat
    }
}

export default connect(mapStateToProps, {fetchChats})(ChatBox);