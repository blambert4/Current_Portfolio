import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Main(){
    
    return(
        <div id = "main" style = {{display: 'none'}}>
            <FontAwesomeIcon className = "rotateY" id = "c" icon = "chevron-right" size = "lg" style = {{color:"teal",position: "absolute", top: "25%", left: "22%", color: "whitesmoke"}}/>
            <p style = {{position: "absolute", top: "21%", left: "27%", color: "whitesmoke"}}> About Me </p>
            <p style = {{position: "absolute", top: "31%", left: "27%", color: "whitesmoke"}}> My Stack </p>
            <p style = {{position: "absolute", top: "41%", left: "27%", color: "whitesmoke"}}> Hobbies </p>
            <div style = {{position: "absolute", top: "20%", left: "50%", border: "solid white", width: "250px", height: "250px", borderRadius: '50%', textAlign: "center"}}>
                <FontAwesomeIcon icon = {['fab', 'node']} style = {{color: 'teal', position: "relative", top: "5%",left: "15%"}} size = "4x" />
                <FontAwesomeIcon icon = {['fab', 'react']} style = {{color: 'teal', position: "relative", top: "65%", right: "15%"}} size = "4x"/>
                <FontAwesomeIcon icon = "plus" style = {{color: "orange", position: "relative", right: "30%", top: "25%"}}/>
            </div>
        </div>
        
    )
}