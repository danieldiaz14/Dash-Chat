import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={props.img}/>
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="text">{props.message}</div>
            </div>
        </div>
    )
}

export default Comment