import React from 'react';

const Body = () => {
    return (
        <div className="ui container">
            <div style={{background: 'linear-gradient(to right, #434343 0%, black 100%)'}} className="ui segment">
            <h1 className="ui center aligned inverted header">Dash Chat</h1>
            <h2 className="ui center aligned inverted header"> React Communications App</h2>
            </div>
            <div className=" ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <h3>Talk to all your friends through this chat app!</h3>
                        <i className="huge users icon"/>
                    </div>
                    <div className="column">
                        <h3>insert another reason here!</h3>
                    </div>
                </div>
                <div className="ui vertical divider">
                    and
                </div>
            </div>
            <div className="ui segment">
                <h2 style={{cursor: 'pointer'}} className="ui center aligned header">Try this today!</h2>
            </div>
        </div>
    )
};

export default Body;