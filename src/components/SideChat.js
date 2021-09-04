import React from 'react'
import './SideChat.css';
import UserCard from './UserCard';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';

function SideChat() {

    const onlines = [
        {
            name: "Prince",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSoQLn8t4J8qK3Hxf7HZoCt8o4bbPXbdypA&usqp=CAU",
            status: "playing BGMI"
        },
        {
            name: "Kut",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbhom23FEsNfohuv_CI4zsGE6nOQhusAC5lK3wjWWzeNlrLEZQjEr9aKZIK9XQbUMgkg&usqp=CAU",
            status: "playing Indain Pubg"
        },
        {
            name: "Sniper",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-C9ZXcABDgEMUy1uUOJXdKI2WpSYqZmVye28kcf9-nzO01HUPo-XYyv9oqksYlIxgh8&usqp=CAU",
            status: "playing sniper Fury"
        },
    ]

    const Playings = [
        {
            name: "luv ",
            src: "https://pbs.twimg.com/profile_images/502819257541881859/lbPRmyJw.jpeg",
            status: "playing pop"
        },
        {
            name: "Ayu ",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t_diTJJDRaX29xuG9cpdP2O3tXMBTyuAVIGyYUW2dp_ahiIbUsr38Fvdbpkwhg1Rtb8&usqp=CAU",
            status: "playing CoD"
        },
        {
            name: "Amber ",
            src: "https://i.pinimg.com/236x/b7/5d/a7/b75da7b12032ac8bed0b424fb1b7fc7e.jpg",
            status: "playing Bow and Arrow"
        },
    ]
    return (
        <div className="sideChat">
            <div className="sideChat__search">
                <div className="search__text">
                    <h2>Social</h2>
                    <KeyboardArrowDownOutlinedIcon/>
                </div>
            </div>

            <div className="sideChat__top">
                    <div className="sideChat__topText">
                        <h3>Rocket Update</h3>
                        <p>12 min remaining</p>
                    </div>
                    <div className="sideChat__topImg">
                        🚀
                    </div>

            </div>
            {/* <br /> */}
            <div className="sideChat__playerCard">
                <div className="sideChat__playerText">
                    <h4>Online <span>+4</span> </h4>
                    <KeyboardArrowDownOutlinedIcon/>

                </div>
                <div className="sideChat__palyer">
                    {onlines.map((online)=>{
                        return(
                            <UserCard name = {online.name} src={online.src} status={online.status}/>

                        )
                    })}
                   
                </div>
               
            </div>
            <div className="sideChat__playerCard">
                <div className="sideChat__playerText">
                    <h4>Playing <span>+8</span> </h4>
                    <KeyboardArrowDownOutlinedIcon/>

                </div>
                <div className="sideChat__palyer">
                {Playings.map((playing)=>{
                        return(
                            <UserCard name = {playing.name} src={playing.src} status={playing.status}/>

                        )
                    })}
                </div>
               
            </div>
            <br />
            <div className="sideChat__chat">
                <div className="sideChat__group">
                    <div className="sideChat__groupText">
                        <p>Group Call</p>
                        <h3>Online Server Call</h3>
                    </div>
                    <div className="sideChat__groupIcons"> 
                         <MicNoneOutlinedIcon fontSize="small"/>
                         <CallIcon fontSize="small"/>
                    </div>
                   
                </div>
                <br />
                <div className="sideChat__message">
                    <input placeholder="Enter your message" type="text" />
                    <SendIcon  fontSize="small" className="icon"/>
                    

                </div>
            </div>
        </div>
    )
}

export default SideChat
