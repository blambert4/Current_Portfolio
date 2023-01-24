
export function MoveCursorMouse1(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var about_me = document.getElementById("About_Me")
  var my_stack = document.getElementById("My_Stack")
  var my_projects = document.getElementById("My_Projects")
  var qq = document.getElementById("pt")

  objImage.style.top = "23%";
  words[0].style.color = "teal";
  words[0].style.cursor = "pointer";
  words[1].style.color = "white";
  words[2].style.color = "white";
  words[3].style.color = "white"
  about_me.style.display = "inline-block";
  my_stack.style.display = "none";
  my_projects.style.display = "none";
  qq.style.display = "none"
}
export function MoveCursorMouse2(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var about_me = document.getElementById("About_Me")
  var my_stack = document.getElementById("My_Stack")
  var my_projects = document.getElementById("My_Projects")
  var qq = document.getElementById("pt")

  objImage.style.top = "33%";
  words[1].style.color = "teal";
  words[1].style.cursor = "pointer";
  words[0].style.color = "white";
  words[2].style.color = "white";
  words[3].style.color = "white";
  about_me.style.display = "none";
  my_stack.style.display = "inline-block";
  my_projects.style.display = "none";
  qq.style.display = "none"
}

export function MoveCursorMouse3(){
  var objImage = document.getElementById("c");
  var words = document.getElementsByTagName("p");
  var about_me = document.getElementById("About_Me")
  var my_stack = document.getElementById("My_Stack")
  var my_projects = document.getElementById("My_Projects")
  var qq = document.getElementById("pt")

  objImage.style.top = "43%";
  words[2].style.color = "teal";
  words[2].style.cursor = "pointer";
  words[3].style.color = "white";
  words[1].style.color = "white";
  words[0].style.color = "white";
  about_me.style.display = "none";
  my_stack.style.display = "none";
  my_projects.style.display = "inline-block";
  qq.style.display = "none"
}

export function stopTicker(){
  var x = document.getElementById("p")
  x.style.animationPlayState = "paused"
}
export function goTicker(){
  var x = document.getElementById("p")
  x.style.animationPlayState = "running"
}
