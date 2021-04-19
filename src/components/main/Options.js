import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function MyStack(){
    return(
        <div  id = "k" style = {{display: 'none' ,position: "absolute", top: "20%", left: "50%", border: "solid white", width: "250px", height: "250px", borderRadius: '50%', textAlign: "center"}}>
                <FontAwesomeIcon className = "rotate" icon = {['fab', 'node']} style = {{color: 'teal', position: "relative", top: "5%",left: "15%"}} size = "4x" />
                <FontAwesomeIcon className = "spin" icon = {['fab', 'react']} style = {{color: 'teal', position: "relative", top: "65%", right: "15%"}} size = "4x"/>
                <FontAwesomeIcon icon = "plus" style = {{color: "orange", position: "relative", right: "30%", top: "25%"}}/>
        </div>
    )
}
export function AboutMe(){
    return(
        <div id = "j" style = {{color: "white", display: 'block' ,position: "absolute", top: "20%", left: "50%", border: "solid white", width: "350px", height: "250px", textAlign: "center"}}>
                <p> Hey this is where I'm gonna put some of my family pictures</p>
            </div>
    )
}