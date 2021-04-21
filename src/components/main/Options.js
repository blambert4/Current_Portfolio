import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MoveCursorMouse1, MoveCursorMouse2, MoveCursorMouse3, MoveCursorMouse4,stopTicker, goTicker} from "../../functions/coolEffects"
import lyel from '../../lyel.jpg'
import thumb from '../../images/bugger_thumb.png';
import submit from '../../images/bugger_submit.png';
import edit from '../../images/bugger_edit.png';
import list from '../../images/bugger_list.png'
import bugger from '../../zoom_0.mp4'
import hooping from '../../images/hooping.webp';
import skating from '../../images/skating.webp';
import e40 from "../../images/e40.webp";
import sanfran from "../../images/sanfran.webp";
import bug from "../../images/bugg.webp";
import plo from "../../images/p_lo.gif";
import gaming from "../../images/gaming.gif";
import keyboard from "../../images/keyboard.webp";
import me from "../../images/me.jpg";
export function MyStack(){
    return(
        <div  id = "k" style = {{display: 'none' ,position: "absolute", top: "20%", left: "50%", width: "400px", height: "400px", color: "white"}}>
                <h1> MERN <FontAwesomeIcon className = "spin" icon = {['fab', 'react']} style = {{color: 'teal', position: "relative", left: "20px"}} size = "lg"/>  <FontAwesomeIcon className = "rotate" icon = {['fab', 'node']} style = {{float: "left" ,color: 'teal', position: "relative", left: "230px"}} size = "lg" /></h1>
                <p> I used to use Django and Springboot and it was alright, but I think the MERN stack is just so much more flexible. Javascript is such as great language in terms of front-end development,obviously, but it really shines in the back-end role in my opinion. Node Js is easy, intuitive, and fluid. I use it to create servers and connect to API's. Personally, it just makes sense to use javascript through and through. </p>
                <br></br>
                <br />
                <br />
                
                
        </div>
                
    )
}
export function AboutMe(){
    return(
        <div id = "j" style = {{color: "white", display: 'block' ,position: "absolute", top: "20%", left: "50%", width: "600px", height: "400px", textAlign: "left", overflow: "auto", padding: "10px",}}>
            <h1> Bradley Lambert<img style = {{float: 'right'}}width = "220px" src = {me} /></h1>
            <p> Hometown- Fremont, CA</p>
            <p> College- CSUDH </p>
            <p> Other Education- Tech Talent South Code Immersion</p>
            <br />
            <img width = "60px" src = {sanfran} />
            <p> I was born in Buffalo, NY but raised in the Bay Area by a single mother along side my adopted brother. I'm a huge basketball fan, gamer, and skater, and now a father. I've always been into tech, but never considered it to be a career until I started learning code. I'm most excited about being a new father and learning to love and care for my baby boy. Life over the past year has been challenging yet rewarding. Im looking forward to the next chapter </p>
        </div>
    )
}

export function Ticker(){
    return(
        <div style = {{overflow: "hidden", position: "absolute", top: "0px", width: "100%", height: "30px", backgroundColor: "black"}} onMouseOver = {stopTicker} onMouseOut = {goTicker}>
                <div id = "p" className = "slide" style = {{whiteSpace: "nowrap", backgroundColor: 'black', position: "absolute"}}>
                    <div style = {{display: "inline-flex",  padding: "0 10rem"}}> Tip: You can use the arrow keys to move the cursor as well </div>

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
        <div id = "q" style = {{color: "white", display: 'none' ,position: "absolute", top: "20%", left: "50%", width: "600px", height: "400px", overflow: 'auto', padding: "10px"}}>
        
        <p><img style = {{float: "left"}} width = "200px" height = "220px" src = {hooping} /> I've been hooping for 15 years and I absolutely love it. Its my favorite thing to play, watch, and talk about. If you read up there that from the Bay, then don't get me started about my boy Steph Curry. That man is a revolutionary and I'm glad he's on my favorite team. Zion is one of my favorite players since he was in high shcool. He's like the point guard version of shaq/barkley with a 40inch vertical. He's extremely unique and talented. I'm a slasher and a spot up shooter myself, I don't do many dribble moves just quick jabs and swift cuts. </p>
        <br></br>
        <br></br>
        <p><img style = {{float: "right"}} width = "200px" src = {skating} /> Growing up I was actually a rollerblader but the quads are sooooo much fun. I went from not having great balance to doing tricks in a few weeks. I actually started creating custom skates out of some cool shoes I bought.</p>
        <br />
        <br />
        
        <p> <img src = {gaming} style = {{float: "left", width: "200px"}}/>Boy do I love some gaming. I grew up on the Playstation 1, Gamecube, and especially the Gameboy. Shooting games, basketball games, adventure, platforming, MMO, RPG, RTS, etc! You name it, I've played it.</p>
        </div>
        
    )
}

export function Projects(){
    return(
        <div id = "lz" style = {{color: "white", display: 'none' ,position: "absolute", top: "20%", left: "50%", width: "600px", height: "400px", textAlign: "left", overflow: "auto", padding: "10px"}}>
            <h1> Bugger <img width = "30px" src = {bug} /></h1>
            <p> A simple CRUD application for logging bugs! Created using Node(express), React, and PostgreSQL. The database is stored online through Heroku.</p>
           <video position = "relative" display = "inline-block" width = "100%" height = "50%" controls poster = {thumb} >
               <source src = {bugger} type="video/mp4" />
            </video>
            <p> Submit a bug for review</p>
            <img width = "100%" src = {submit} />
            <p> View bugs in the backlog</p>
            <img width = "100%" src = {list} />
            <p> Edit a bug with all the necessary information</p>
            <img width = "100%" src = {edit} />
        </div>
    )
}
