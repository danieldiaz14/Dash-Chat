import React from 'react';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui container">
            <div className="ui large inverted pointing menu">
                <a className="active item">About</a>
                <a className="item" target="_blank" href="https://danieldiaz14.github.io">Portfolio</a>
                <div className="right item">
                    <GoogleAuth/>
                </div>
            </div>
        </div>
    )
}

export default Header