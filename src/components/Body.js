import React, {useState} from 'react';
import './Body.css';
import GameRecom from './GameRecom';
import Header from './Header';
import HeaderTop from './HeaderTop';
import SideChat from './SideChat';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


function Body() {
    const [darkMode, setDarkMode] = useState(true);


    const enableDark = ()=>{
      setDarkMode(!darkMode);
    }
    
    return (
        <div className={darkMode ? "body": "bodyPart"}>
              <div onClick={enableDark}  className={darkMode ? "app__float": "app__floatback"}>
                  <WbSunnyIcon/>
            </div>
            <div className="container">
                <div className="container__left">
                    <Header/>
                </div>
                <div className="container__right">
                    <div className="right__header">
                         <HeaderTop/>
                    </div>
                    <div className={darkMode ? "container__center": "container__centerDark"}>
                        <div className="container__games">
                            <GameRecom/>
                        </div>
                        <div className="container__contacts">
                            <SideChat/>
                        </div>
                    </div>

                </div>
            </div>
    
        </div>
    )
}

export default Body
