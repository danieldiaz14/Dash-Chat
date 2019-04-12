import React from 'react';
import { connect } from 'react-redux';

import { createChat } from '../../actions/index';

class MessageBox extends React.Component{
    state = {value: ''}
    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    sendMessage = () => {
        const {currentUser} = this.props;
        if (this.state.value.length > 0) {
            this.props.createChat({
                message: this.state.value,
                userName: currentUser.userName,
                userPic: currentUser.userPic,
                userId: currentUser.userId
            });
            this.setState({value: ''});
        };
    };
    renderContent = () => {
        const {currentUser} = this.props;
        if (!currentUser.isSignedIn) {
            return (
                <textarea placeholder="Please sign in"/>
            )
        } else {
            return (
                <div>
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                    <div onClick={this.sendMessage} className="ui button labeled submit icon button">
                        <i className="comment icon"/> Send
                    </div>
                </div>
            )
        }
    };

    render() {
        return (
            <form  className="ui reply form">
                <div className="field">
                    {this.renderContent()}
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