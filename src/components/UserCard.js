import { Avatar } from '@material-ui/core';
import React from 'react';
import './UserCard.css';

function UserCard({name, src, status}) {
    return (
        <div className="userCard">
            <div className="userCard__logo">
                <Avatar src={src}/>
            </div>
            <div className="userCard__userName">
                <h3>{name}</h3>
                 <p>{status}</p>
            </div>

        </div>
    )
}

export default UserCard
