import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MoveCursorMouse1, MoveCursorMouse2, MoveCursorMouse3} from "../functions/coolEffects";
export default function Main(){
    
    return(
        <div id = "main" style = {{display: 'none'}}>
            <FontAwesomeIcon className = "rotateY" id = "c" icon = "chevron-right" size = "lg" style = {{color:"whitesmoke",position: "absolute", top: "25%", left: "22%",}}/>
            <p onMouseOver = {MoveCursorMouse1} style = {{position: "absolute", top: "21%", left: "27%", color: "teal"}}> About Me </p>
            <p onMouseOver = {MoveCursorMouse2} style = {{position: "absolute", top: "31%", left: "27%", color: "whitesmoke"}}> My Stack </p>
            <p onMouseOver = {MoveCursorMouse3} style = {{position: "absolute", top: "41%", left: "27%", color: "whitesmoke"}}> Hobbies </p>

            <div  id = "k" style = {{display: 'none' ,position: "absolute", top: "20%", left: "50%", border: "solid white", width: "250px", height: "250px", borderRadius: '50%', textAlign: "center"}}>
                <FontAwesomeIcon icon = {['fab', 'node']} style = {{color: 'teal', position: "relative", top: "5%",left: "15%"}} size = "4x" />
                <FontAwesomeIcon icon = {['fab', 'react']} style = {{color: 'teal', position: "relative", top: "65%", right: "15%"}} size = "4x"/>
                <FontAwesomeIcon icon = "plus" style = {{color: "orange", position: "relative", right: "30%", top: "25%"}}/>
            </div>
        </div>
        
    )
}