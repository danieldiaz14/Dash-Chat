import React from 'react';

const Message = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={props.userPic} alt="User pic"/>
            </a>
            <div className="content">
                <a className="author">{props.userName}</a>
                <div className="text">{props.message}</div>
            </div>
        </div>
    )
}
export default Message