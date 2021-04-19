import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MoveCursorMouse1, MoveCursorMouse2, MoveCursorMouse3, MoveCursorMouse4} from "../functions/coolEffects";
import {MyStack, AboutMe} from "./main/Options";
export default function Main(){
    
    return(
        <div id = "main" style = {{display: 'none'}}>
            <div style = {{overflow: "hidden", position: "absolute", top: "0px", width: "100%", height: "30px", backgroundColor: "black"}}>
                <div className = "slide" style = {{backgroundColor: 'black', position: "absolute"}}>
                    <div style = {{display: "inline-flex",  padding: "0 5rem"}}> Tip: Eat a fart </div>
                    <div style = {{display: "inline-flex",  padding: "0 5rem"}}> Tip: Use the arrow keys to move the cursor </div>
                </div>
            </div>
            
            

            <FontAwesomeIcon className = "rotateY" id = "c" icon = "chevron-right" size = "lg" style = {{color:"whitesmoke",position: "absolute", top: "25%", left: "22%",}}/>

            <p onMouseOver = {MoveCursorMouse1} style = {{position: "absolute", top: "21%", left: "27%", color: "teal"}}> About Me </p>
            <p onMouseOver = {MoveCursorMouse2} style = {{position: "absolute", top: "31%", left: "27%", color: "whitesmoke"}}> My Stack </p>
            <p onMouseOver = {MoveCursorMouse3} style = {{position: "absolute", top: "41%", left: "27%", color: "whitesmoke"}}> Hobbies </p>
            <p onMouseOver = {MoveCursorMouse4} style = {{position: "absolute", top: "51%", left: "27%", color: "whitesmoke"}}> Projects </p>

            <AboutMe />
            <MyStack />
            
        </div>
        
    )
}