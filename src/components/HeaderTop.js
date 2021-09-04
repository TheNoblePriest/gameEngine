import React from 'react';
import './HeaderTop.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalMallIcon from '@material-ui/icons/LocalMall';
function HeaderTop() {
    return (
        <div className="headerTop">
            <div className="headerTop__search">
                <input placeholder="Search Games Here" type="text" />
                <div className="search_button">
                  <SearchIcon/>

                </div>
            </div>
            <div className="headerTop__title">
                <h2>GAME STORE</h2>
            </div>
            <div className="headerTop__icons">

                    <Button className="button"><NotificationsIcon /></Button>

                    <Button className="button">
                        <LocalMallIcon />

                    </Button>


                <div className="button">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLVjWQIiuAVtabZYzaiI_0lobU3yrN8wkplOV4IbPVVJdpUHWfM82sBdY0CJ3-33Sub8&usqp=CAU"/>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default HeaderTop
