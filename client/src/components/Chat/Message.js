import React from 'react';
import { connect } from 'react-redux';

class Message extends React.Component {

    renderAdminButton = () => {
        const {user, userId} = this.props;
        if (user && userId) {
            if (this.props.user.userId == this.props.userId) {
                return (
                    <div>
                        <button className="ui right floated primary button">Edit</button>
                        <button className="ui right floated negative button">Delete</button>
                    </div>
                )
            }
        }
    };
    render() {
        return (
            <div className="comment">
                <a className="avatar">
                    <img src={this.props.userPic} alt="User pic"/>
                </a>
                <div className="content">
                    <a className="author">{this.props.userName}</a>
                    {this.renderAdminButton()}
                    <div className="text">{this.props.message}</div>
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
};

export default connect(mapStateToProps)(Message)