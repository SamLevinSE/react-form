import React from 'react';
import './memestyle.css';

export default function MemeGenComponent(props) {
    return (
        <>
            <form className="meme-form">
                <input type="text"
                       name="topText"
                       placeholder="Top Text"
                       value={props.data.topText}
                       onChange={props.onChangeEvent}
                />
                <input type="text"
                       name="bottomText"
                       placeholder="Bottom Text"
                       value={props.data.bottomText}
                       onChange={props.onChangeEvent}
                />
                <button onClick={props.onClickEvent}>GEN</button>
            </form>
            <div className="meme">
                <h2 className="top">{props.data.topText}</h2>
                <h2 className="bottom">{props.data.bottomText}</h2>
                <img src={props.data.randomImg}
                     alt={props.data.topText + props.data.bottomText}
                />
            </div>
        </>
    )
}