var bodyBackgroundGradientNames = ["jshine", "evening-sunshine", "dark-ocean", "witching-hour", "kye-meh", "kyoo-tah", "sea-sunshine", "expresso", "pun-yeta", "crimson-tide" ];

function centralizeContent(){
  var element = document.querySelector("body");
  var currentClassName = element.getAttribute("class");
  var contentElement = document.getElementById("content");
  var contentHeight = contentElement.offsetHeight;
  var windowHeight = window.innerHeight;
  if(contentHeight + 2 <= windowHeight)
  {
    if(element.getAttribute("class").indexOf("centered") < 0)
    {
      element.setAttribute("class", currentClassName + " centered");
    }
  }
  else {
    element.setAttribute("class", currentClassName.replace("centered", "").trim());
  }
}

function gradientHandler(){
  var element = document.querySelector("body");
  var currentClassName = element.getAttribute("class");
  var rand =  Math.floor( Math.random() * 10);
  element.setAttribute("class", currentClassName + " " + bodyBackgroundGradientNames[rand] + "-gradient");
}

window.onload = function() {
  centralizeContent();
  gradientHandler();
  window.addEventListener("resize", centralizeContent);
}