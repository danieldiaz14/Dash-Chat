import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions/index';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '31538088877-c0h6vrpolnofg55k5997s9k63v2ppf38.apps.googleusercontent.com',
                scope: 'profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    };

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getBasicProfile());
        } else {
            this.props.signOut(this.auth.currentUser.get().getBasicProfile());
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
            <button onClick={this.onSignOutClick} className="ui google plus button">
                <i className="google plus icon"/>
                Sign out
            </button>
            )
        } else {
            return (
            <button onClick={this.onSignInClick} className="ui google plus button">
                <i className="google plus icon"/>
                Sign in
            </button>
            )
        }
    }


    render() {
        return (
            <div className="ui right aligned header">
                <div className="ui horizontal list">
                    <div className="item">
                        <img className="ui mini circular image" src={this.props.userPic}/>
                        <div className="content">
                            <div className="ui sub header">{this.props.userName}</div>
                            {this.renderAuthButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userName: state.auth.userName,
        userId: state.auth.userId,
        userPic: state.auth.userPic
    };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);