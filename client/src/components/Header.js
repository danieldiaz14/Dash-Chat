import React from 'react';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {

    render() {
        return (
            <div className="ui three item menu">
                <p className="item">Home</p>
                <p className="item">Settings</p>
                <GoogleAuth/>
            </div>
        )
    }
}

export default Header;