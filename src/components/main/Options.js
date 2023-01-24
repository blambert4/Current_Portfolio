import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {stopTicker, goTicker} from "../../functions/coolEffects"

import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import javascript from "../../images/java-script.png";
export function AboutMe(){
    return(
        <div id = "About_Me" style = {{color: "white", display: 'block' ,position: "absolute", top: "20%", left: "30%", width: "1000px", height: "500px", textAlign: "left", padding: "10px",}}>
            <h1> hello </h1>
        </div>
        
    )
}

export function MyStack(){
    return(
        <div id = "My_Stack" style = {{color: "white", display: 'none' ,position: "absolute", top: "20%", left: "30%", width: "1000px", height: "500px", textAlign: "left", padding: "10px"}}>
            <h3> The Basics </h3>
            <img src= {html} style = {{width: "70px"}}/>
            <img src = {css} style = {{width: "70px"}}/>
            <img src = {javascript} style = {{width: "70px"}}/>
        </div>        
    )
}
 
export function Projects(){
    return(
        <div id = "My_Projects" style = {{color: "white", display: 'none' ,position: "absolute", top: "4%", left: "30%", width: "1000px", height: "650px", textAlign: "left", paddingTop: "10px"}}>
            <iframe top = "100px" width = "1000px" height = "600px" src = "http://lyel.herokuapp.com" />
            <details> Bugger is a CRUD application built in React, Node JS, and PostgreSQL. It replicates a simple ticket system </details> 
        </div>
        
    )
}

export function InformationDiv(){
    return(
        
        <div id = "pt" style = {{position: "absolute", left: "6%", bottom: "10%", width: "300px", height: "200px", display: "none", color: "white"}}>
            <FontAwesomeIcon id = "trees" icon = "angle-double-right" size = "3x" style = {{color:"white",position: "absolute", right: "25%",top: "15%"}}
            />
            <h1> Bugger </h1>
            <p> Bugger is one of my favorite projects I have worked on. I took on the task of creating a bug tracker and, <em> while basic, </em> I think it demonstrates my ability to create more than just some pretty HTML text </p>
        </div>
        
    )
}
export function Ticker(){
    return(
        <div style = {{overflow: "hidden", position: "absolute", top: "0px", width: "100vw", height: "30px", backgroundColor: "black"}} onMouseOver = {stopTicker} onMouseOut = {goTicker}>
                <div id = "p" className = "slide" style = {{whiteSpace: "nowrap", backgroundColor: 'black', position: "absolute"}}>
                    <div style = {{display: "inline-flex",  padding: "0 10rem"}}> Welcome! </div>

                    <div style = {{display: "inline-flex",  padding: "0 2rem"}}> Awesome Links: </div>

                    <div style = {{display: "inline-flex",  padding: "0 10px"}}> 
                        
                        <a className = "vb" style = {{textDecoration: "none", color: "white"}}href = "https://github.com/blambert4" target="_blank"> 
                            <FontAwesomeIcon icon = {['fab', 'github']} style = {{color: 'teal', position: "relative",}} size = "lg" />
                         </a>
                    </div>

                    <div style = {{display: "inline-flex",  padding: "0 10px"}}> 
                        
                        <a className = "vb" style = {{textDecoration: "none", color: "white"}}href = "https://www.linkedin.com/in/bradley-lambert-81100914b/" target="_blank"> 
                            <FontAwesomeIcon icon = {['fab', 'linkedin']} style = {{color: 'teal', position: "relative",}} size = "lg" />
                        </a>
                    </div>

                    <div style = {{display: "inline-flex",  padding: "0 1rem", }}> 
                        <a className = "vb" style = {{textDecoration: "none", color: "white"}}href = "mailto: bradley.cp.lambert@gmail.com" target="_blank"> 
                            <FontAwesomeIcon icon = 'envelope' style = {{color: 'teal', position: "relative",}} size = "lg" />
                        </a>
                    </div>

                    <div style = {{display: "inline-flex",  padding: "0 25rem"}}> Thanks for visiting my site! </div>

                </div>
            </div>
    )
}