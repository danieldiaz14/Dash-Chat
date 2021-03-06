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
            const getInfo = this.auth.currentUser.get().getBasicProfile();
            const userName = getInfo.getName();
            const userId = getInfo.getId();
            const userPic = getInfo.getImageUrl();
            this.props.signIn({userId, userName, userPic});
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
            <button onClick={this.onSignOutClick} className="ui small google plus button">
                <i className="google plus icon"/>
                Sign out
            </button>
            )
        } else {
            return (
            <button onClick={this.onSignInClick} className="ui small google plus button">
                <i className="google plus icon"/>
                Sign in
            </button>
            )
        }
    }


    render() {
        return (
            <div className="item">
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userName: state.auth.userName
    };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);