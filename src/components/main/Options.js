import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {stopTicker, goTicker, Blink2} from "../../functions/coolEffects"

import me from "../../images/me.jpg";
export function MyStack(){
    return(
        <div>
            <article id = "k" style = {{color: "white", display: 'none' ,position: "absolute", top: "20%", left: "30%", width: "1000px", height: "500px", textAlign: "left", padding: "10px"}}>
                <h1> What do I know?</h1>
                <p> While my experience is on the short, I have a mastery of the basic front-end development skills such as
                    <ul>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> Javascript</li>
                    </ul>
                however, my skills don't stop there! I have proficiencies in the following technologies
                    <ul>
                        <li> Bootstrap</li>
                        <li> ReactJS</li>
                        <li> NodeJS</li>
                        <li> Django</li>
                        <li> PostgreSQL</li>
                        <li> Git /</li>
                        <li> etc (ask me about it)</li>
                    </ul>
                </p>
            </article>
        </div>        
    )
}
export function AboutMe(){
    return(
        <div id = "j" style = {{color: "white", display: 'block' ,position: "absolute", top: "20%", left: "30%", width: "1000px", height: "500px", textAlign: "left", padding: "10px",}}>
            <article >
            
            <figure style = {{float: 'right', width: "200px"}}>
                <img src = {me} style = {{width: "200px"}} />
                <figcaption> Me and Doge! </figcaption>
            </figure>
            <h1> Bradley Lambert</h1>
            <p> Hello there! I would like say I am a simple guy, but thats not exactly true! I enjoy a lot of interests, <i> most of which are unrelated</i>, and I have a lot of things going on in my personal life. It is hard to put a label on who I am, <i> so why bother doing that</i>. Instead, I'll explain a little about who I am and why I am the way I am</p> 
        </article>
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
export function Hobbies(){
    return(
        <div id = "q" style = {{color: "white", display: 'none' ,position: "absolute", top: "20%", left: "30%", width: "1000px", height: "500px", textAlign: "left", padding: "10px"}}>
            <article> </article>
        </div>
        
    )
}

export function Projects(){
    return(
        <div id = "lz" style = {{color: "white", display: 'none' ,position: "absolute", top: "4%", left: "30%", width: "1000px", height: "650px", textAlign: "left", paddingTop: "10px"}}>
            <iframe top = "100px" width = "1000px" height = "600px" src = "http://lyel.herokuapp.com" />
            <details> Bugger is a CRUD application built in React, Node JS, and PostgreSQL. It replicates a simple bug tracker </details> 
        </div>
        
    )
}

export function InformationDiv(){
    return(
        
        <div id = "pt" style = {{position: "absolute", left: "6%", bottom: "10%", width: "300px", height: "200px", display: "none", color: "white"}}>
            <FontAwesomeIcon id = "trees" icon = "angle-double-right" size = "3x" style = {{color:"white",position: "absolute", right: "25%",top: "15%"}}
            onMouseOver = {Blink2} />
            <h1> Bugger </h1>
            <p> Bugger is one of my favorite projects I have worked on. I took on the task of creating a bug tracker and, <em> while basic, </em> I think it demonstrates my ability to create more than just some pretty HTML text </p>
        </div>
        
    )
}