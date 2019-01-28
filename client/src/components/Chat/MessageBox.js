import React from 'react';
import { connect } from 'react-redux';

import { createChat } from '../../actions/index';

class MessageBox extends React.Component{
    state = {value: ''}

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    sendMessage = () => {
        this.props.createChat({
            message: this.state.value,
            userName: this.props.currentUser.userName
        });
        this.setState({value: ''});
    };

    render() {
        return (
            <form className="ui reply form">
                <div className="field">
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                    <div onClick={this.sendMessage} className="ui button labeled submit icon button">
                        <i className="comment icon"/> Send
                    </div>
                </div>
            </form>
        )
    }
}


const mapStateToProps = state => {
    return {
        currentUser: state.auth,
        messages: state.chat
    }
}

export default connect(mapStateToProps, {createChat})(MessageBox);