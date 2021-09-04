import Card from './Card';
import React from 'react';
import './GameRecom.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ItemList from './ItemList';

function GameRecom() {
    const gameCards = [
        {
            image: "/images/b8.jpeg",
            gameTitle : "Hill climbing",
            star: "⭐️ ⭐️ ⭐️ ⭐️"
        },
        {
            image: "/images/b4.jpeg",
            gameTitle : "Pubg Gamimg",
            star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
        },
        {
            image: "/images/g3.png",
            gameTitle : "Hill climbing",
            star: "⭐️ ⭐️ ⭐️ ⭐️"
        },
        {
            image: "/images/g6.jpeg",
            gameTitle : "Gaming Guru",
            star: "⭐️ ⭐️ ⭐️"
        },
        {
            image: "/images/g3.png",
            gameTitle : "Hill climbing",
            star: "⭐️ ⭐️ ⭐️ ⭐️"
        },
        {
            image: "/images/b5.jpeg",
            gameTitle : "Hill climbing",
            star: "⭐️ ⭐️ ⭐️ ⭐️"
        },
        
    ]

    const games = [
        {
            name: "BattleGround Mobile",
            image: "/images/g5.jpeg",
            date: "23-2-2001"
        },
        {
            name: "BattleGround Mobile",
            image: "/images/g6.jpeg",
            date: "23-2-2001"
        },
        {
            name: "BattleGround Mobile",
            image: "/images/b8.jpeg",
            date: "23-2-2001"
        }
    ]
    return (
        <div className="gameRecom">
                <div className="gameRecom__top">
                    <div className="topText">
                        <h1>Spider Man - Unlimited Fight</h1>
                        <p>Dharma Production</p>
                        <div className="topText__btn">
                            <h3>$4504</h3>
                            <button>Purchase</button>
                        </div>

                    </div>
                    <div className="topImage">
                        <img src="/images/1.png" />
                    </div>
                </div>

            <div className="gameRecom__center">
                <div className="center__topic">
                     <h2>Related</h2>
                </div>
                <div className="center__cards">
                    <div className="card__swipe">
                        {gameCards.map((gameCard)=>{
                            return(
                                <Card image={gameCard.image} gameTitle= {gameCard.gameTitle} star = {gameCard.star}/>
                            )

                        })}
                       
                    </div>
                </div>
                

            </div>
            <br />
            <div className="gameRecom__bottom">

                <div className="gameRecom__bottomGame1">
                    <div className="textTop1">
                        <p>Accessories</p>
                        <ArrowForwardIcon/>
                    </div>
                    <div className="gameRecom__accer">
                        <img src="/images/a2.png" alt="" />
                    </div>
                </div>

                <div className="gameRecom__bottomGame2">
                    <div className="gameRecom__header">
                        <p>Library</p>
                        <ArrowForwardIcon/>
                    </div>
                    <div className="gameRecom__items">
                        {games.map((game)=>{
                            return(
                                <ItemList image={game.image} name= {game.name} date={game.date}/>

                            )
                        })}
                       
                    </div>
                    

                </div>
                
                
                
            </div>
        
        </div>
    )
}

export default GameRecom
