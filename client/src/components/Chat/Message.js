import React from 'react';
import { connect } from 'react-redux';

import { deleteChat } from '../../actions/index';

import Comment from './ChatUI/Comment';
import DropDown from './ChatUI/DropDown';

class Message extends React.Component {

    renderAdminButton = () => {
        const {user, userId} = this.props;
        if (user && userId) {
            if (this.props.user.userId == this.props.userId) {
                return (
                    <DropDown msgId={this.props.msgId}/>
                )
            }
        }
    };
    render() {
        console.log(this.props);
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className="column">
                        <div className="ui segment">
                            <Comment author={this.props.userName} message={this.props.message} img={this.props.userPic}/>
                        </div>
                    </div>
                    <div className="right floated column">
                        {this.renderAdminButton()}
                    </div>
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        user: state.auth,
        chat: state.chat
    }
};

export default connect(mapStateToProps, {deleteChat})(Message)