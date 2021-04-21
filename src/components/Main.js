import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Ticker, Hobbies, MyStack, AboutMe, Projects} from "./main/Options";
import {MoveCursor, MoveCursorMouse1, MoveCursorMouse2, MoveCursorMouse3, MoveCursorMouse4,stopTicker, goTicker} from "../functions/coolEffects"
import {useEffect, useState} from 'react';

export default function Main(){

    return(
        <div id = "main" style = {{display: 'none'}}>
            
            <Ticker />
            
            <FontAwesomeIcon className = "rotateY" id = "c" icon = "chevron-right" size = "lg" style = {{color:"whitesmoke",position: "absolute", top: "25%", left: "22%",}}/>

            <p onMouseOver = {MoveCursorMouse1} style = {{position: "absolute", top: "22%", left: "27%", color: "teal"}}> About Me </p>
            <p onMouseOver = {MoveCursorMouse2} style = {{position: "absolute", top: "32%", left: "27%", color: "whitesmoke"}}> My Stack </p>
            <p onMouseOver = {MoveCursorMouse3} style = {{position: "absolute", top: "42%", left: "27%", color: "whitesmoke"}}> Hobbies </p>
            <p onMouseOver = {MoveCursorMouse4} style = {{position: "absolute", top: "52%", left: "27%", color: "whitesmoke"}}> Projects </p>

            <AboutMe />
            <MyStack />
            <Hobbies />
            <Projects />
        </div>
        
    )
}