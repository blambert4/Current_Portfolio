export function Blink(){
  var a = document.getElementById("a");
  setInterval(() => {
      a.style.opacity = "0%"
  }, 1000);
  setInterval(() => {
    a.style.opacity = "100%"
}, 2000);
}

export function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

export function Enter(){
  const sound = new Sound("win.wav")
  window.addEventListener('keypress', (e)=>{
      if (e.keyCode === 13){
        document.getElementById("a").style.display = "none";
        document.getElementById("main").style.display = "block";
      }
    })
}

export function MoveCursor(){
  window.addEventListener("keydown", (e)=>{
    var objImage = document.getElementById("c");
    var y = parseInt(objImage.style.top, 10)
    var words = document.getElementsByTagName("p")
    var z = document.getElementById("k")
    var zz = document.getElementById("j")
    var zzz = document.getElementById("q")
    var q = document.getElementById("lz")
    if (e.keyCode === 38){
        if(y !== 25){
          objImage.style.top = y - 5 + "%"

          if (objImage.style.top == "25%"){
            words[0].style.color = "teal";
            words[1].style.color = "whitesmoke";
            words[2].style.color = "whitesmoke";
            words[3].style.color = "whitesmoke";
            z.style.display = "none"
            zz.style.display = "inline-block";
            zzz.style.display = "none"
            q.style.display = "none"
          }
          else if (objImage.style.top == "35%"){
            words[1].style.color = "teal";
            words[0].style.color = "whitesmoke";
            words[2].style.color = "whitesmoke";
            words[3].style.color = "whitesmoke";
            z.style.display = "inline-block"
            zz.style.display = "none";
            zzz.style.display = "none"
            q.style.display = "none"
          }
          else if (objImage.style.top == "45%"){
            words[2].style.color = "teal";
            words[1].style.color = "whitesmoke";
            words[0].style.color = "whitesmoke";
            words[3].style.color = "whitesmoke";
            z.style.display = "none"
            zz.style.display = "none";
            zzz.style.display = "inline-block";
            q.style.display ="none"
          }
          else if (objImage.style.top == "55%"){
            words[3].style.color = "teal";
            words[2].style.color = "whitesmoke";
            words[1].style.color = "whitesmoke";
            words[0].style.color = "whitesmoke";
            z.style.display = "none";
            zz.style.display = "none";
            zzz.style.display = "none";
            q.style.display = "inline-block"
          }

        }
      }
    else if (e.keyCode === 40){
      if(y !== 55){
        objImage.style.top = y + 5 + "%"

        if (objImage.style.top == "25%"){
          words[0].style.color = "teal";
          words[1].style.color = "whitesmoke";
          words[2].style.color = "whitesmoke";
          words[3].style.color = "whitesmoke";
          z.style.display = "none";
          zz.style.display = "inline-block";
          zzz.style.display = "none";
          q.style.display = "none";
        }
        else if (objImage.style.top == "35%"){
          words[1].style.color = "teal";
          words[0].style.color = "whitesmoke";
          words[2].style.color = "whitesmoke";
          words[3].style.color = "whitesmoke";
          z.style.display = "inline-block"
          zz.style.display = "none";
          zzz.style.display = "none";
          q.style.display = "none";
        }
        else if (objImage.style.top == "45%"){
          words[2].style.color = "teal";
          words[1].style.color = "whitesmoke";
          words[0].style.color = "whitesmoke";
          words[3].style.color = "whitesmoke";
          z.style.display = "none"
          zz.style.display = "none";
          zzz.style.display = "inline-block"
          q.style.display = "none"
        }
        else if (objImage.style.top == "55%"){
          words[3].style.color = "teal";
          words[2].style.color = "whitesmoke";
          words[1].style.color = "whitesmoke";
          words[0].style.color = "whitesmoke";
          z.style.display = "none"
          zz.style.display = "none";
          zzz.style.display = "none";
          q.style.display = "inline-block";
        }

      }
    }
  })
}

export function MoveCursorMouse1(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var z = document.getElementById("k")
  var zz = document.getElementById("j")
  var zzz = document.getElementById("q")
  var q = document.getElementById("lz")
  objImage.style.top = "25%";
  words[0].style.color = "teal";
  words[0].style.cursor = "pointer";
  words[1].style.color = "white";
  words[2].style.color = "white";
  words[3].style.color = "white"
  z.style.display = "none";
  zz.style.display = "inline-block";
  zzz.style.display = "none";
  q.style.display = "none";
}
export function MoveCursorMouse2(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var z = document.getElementById("k")
  var zz = document.getElementById("j")
  var zzz = document.getElementById("q")
  var q = document.getElementById("lz")

  objImage.style.top = "35%";
  words[1].style.color = "teal";
  words[1].style.cursor = "pointer";
  words[0].style.color = "white";
  words[2].style.color = "white";
  words[3].style.color = "white";
  z.style.display = "inline-block";
  zz.style.display = "none";
  zzz.style.display = "none";
  q.style.display = "none";
}

export function MoveCursorMouse3(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var z = document.getElementById("k")
  var zz = document.getElementById("j")
  var zzz = document.getElementById("q")
  var q = document.getElementById("lz")

  objImage.style.top = "45%";
  words[2].style.color = "teal";
  words[2].style.cursor = "pointer";
  words[3].style.color = "white";
  words[1].style.color = "white";
  words[0].style.color = "white";
  z.style.display = "none";
  zz.style.display = "none";
  zzz.style.display = "inline-block";
  q.style.display = "none";
}
export function MoveCursorMouse4(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var z = document.getElementById("k")
  var zz = document.getElementById("j")
  var zzz = document.getElementById("q")
  var q = document.getElementById("lz")

  objImage.style.top = "55%";
  words[3].style.color = "teal";
  words[3].style.cursor = "pointer";
  words[2].style.color = "white";
  words[1].style.color = "white";
  words[0].style.color = "white";
  z.style.display = "none";
  zz.style.display = "none";
  zzz.style.display = "none";
  q.style.display = "inline-block";
}
export function stopTicker(){
  var x = document.getElementById("p")
  x.style.animationPlayState = "paused"
}
export function goTicker(){
  var x = document.getElementById("p")
  x.style.animationPlayState = "running"
}