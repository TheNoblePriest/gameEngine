import React from 'react';
import './Header.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import RadioRoundedIcon from '@material-ui/icons/RadioRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import DonutSmallTwoToneIcon from '@material-ui/icons/DonutSmallTwoTone';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header">
            <div className="header__img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmfFTV59A0-y0x92gjZSw7OCcJeaY51ccuIM3nxq3z1ob_eZoYEFdvRPOZQeBDowOK2w&usqp=CAU" alt="" />
            </div>

            <div className="header__icons">
                <div className="icons">
                    <HomeRoundedIcon/>
                </div>
                <div className="icons">
                     <LocalMallRoundedIcon/>
                 </div>
                 <div className="icons">
                     <RadioRoundedIcon/>
                </div>
                
                <div className="icons">
                    <DonutSmallTwoToneIcon/>
                </div>
               
                <div className="icons">
                    <ShoppingBasketIcon/>
                </div>

                <div className="icons">
                    <PeopleAltOutlinedIcon/>
                </div>
            </div>
            <div className="header__right">
                <img src="https://cdn.dribbble.com/users/567082/screenshots/4356358/profile_picture.png?compress=1&resize=800x600" alt="" />
            </div>


        </div>
    )
}

export default Header
