import React from 'react';
import './ItemList.css';

function ItemList({image, name, date}) {

    const downloadStatus = ()=>{
        document.getElementById("but").innerHTML="Installing"
    }
    return (
        <div className="itemList">
            <div className="itemList__logo">
                <img src={image} />
                <p>{name}</p>
            </div>
            <div className="itemList__center">
                <p>{date}</p>
            </div>
            <div className="itemList__download">
                <button id="but" onClick={downloadStatus}>Download</button>
            </div>

        </div>
    )
}

export default ItemList
