import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Ticker, MyStack, AboutMe, Projects, InformationDiv} from "./main/Options";
import {MoveCursorMouse1, MoveCursorMouse2, MoveCursorMouse3, MoveCursorMouse4,stopTicker, goTicker} from "../functions/coolEffects"
import {useEffect, useState} from 'react';

export default function Main(){

    return(
        <div id = "main" style = {{border: "solid"}}>
            
            <Ticker />
            
            <FontAwesomeIcon className = "rotateY" id = "c" icon = "chevron-right" size = "lg" style = {{color:"whitesmoke",position: "absolute", top: "25%", left: "4%",}}/>

            <p onMouseOver = {MoveCursorMouse1} style = {{position: "absolute", top: "22%", left: "6%", color: "teal"}}> About me </p>
            <p onMouseOver = {MoveCursorMouse2} style = {{position: "absolute", top: "32%", left: "6%", color: "whitesmoke"}}> My stack </p>
            <p onMouseOver = {MoveCursorMouse3} style = {{position: "absolute", top: "42%", left: "6%", color: "whitesmoke"}}> Projects </p>

            <AboutMe />
            <MyStack />
            <Projects />
            <InformationDiv />
        </div>
        
    )
}