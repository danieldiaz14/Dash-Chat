import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Chat from './Chat';
import Landing from './Landing';

class App extends React.Component {

    renderContent = () => {
        const {auth} = this.props;
        if (auth.isSignedIn) {
            return <Chat/>
        } else {
            return <Landing/>
        }
    }

    render() {
        return (
            <div className="ui container" style={{ backgroundImage: '../images/download.jpeg'}}>
                <Header/>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App);