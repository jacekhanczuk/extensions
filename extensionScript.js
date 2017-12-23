// ------------------------------------------------------------------------ //
if(window.location.host == "putlockers.fm"){

window.open = function() {
  console.log("attempt to open new window!");
}

Element.prototype.appendChild = function(element) {
  if(element.href){
    console.log("z³apany!" + element.href);
  }
};

Element.prototype.insertBefore
= function(element) {
   if(element.href){
    console.log("z³apany!" + element.href);
  }
};

addEventListener("click", function(event){
    var node;
    node=event.srcElement;
    
    if(node.href) {
     window.location.href = node.href;
    } else if(node.parentNode.href) {
     window.location.href = node.parentNode.href;
    } else {
      // node.click();
    }
   
    event.preventDefault();
});

var pattern = "http://putlockers.fm/watch/";

var controls = 
"Sterowanie:"
+"\n\n-- ENTER -- będąc na stronie filmu kliknij enter by przejść do jego prawdziwej strony"
+"\n-- SHIFT -- bezpieczne wyszukiwanie "
;

addEventListener("keydown", function(event){
  if(event.altKey && event.keyCode == 72){
alert(controls);
  }
  event.preventDefault();
});

addEventListener("keydown", function(event){
  event.preventDefault();
  if(event.keyCode == 16){
    window.location.href  = "http://putlockers.fm/search-movies/" + prompt("enter movie name ...") +".html";  
  }
});

if((window.location.href).includes(pattern)){
addEventListener("keydown", function(event){
  event.preventDefault();
  if(event.keyCode == 13){
       if(document.getElementsByTagName("iframe")[0].src !== null){
  window.location.href = document.getElementsByTagName("iframe")[0].src
       }
  }
});
}

}

// ---------------------------------------------------------------------------------------- //

if(window.location.host == "entervideo.net"){
 
  var vidControls = 
"Bezpieczne sterowanie:"
+"\n\n-- ENTER -- pełny ekran"
+"\n-- SPACJA/CLICK -- start, stop"
+"\n--  ESC   -- wyjście z pełnego ekranu "
+"\n-- GÓRA,DÓŁ -- głośność"
;

addEventListener("keydown", function(event){
  if(event.altKey && event.keyCode == 72){
alert(vidControls);
  }
  event.preventDefault();
});

window.atob = function(){
  console.log("trying to atob");
}

window.open = function() {
  console.log("attempted to open new window!");
}

var videoObject = document.getElementById("player_html5_api");

addEventListener("keydown", function(event){
  if(event.keyCode == 32){
       if(videoObject.paused){
      videoObject.play();
  } else {
      videoObject.pause()
     }
  }
  event.preventDefault();
});

addEventListener("keydown", function(event){
  if(event.keyCode == 13){
      videoObject.webkitEnterFullscreen();
  }
  event.preventDefault();
});

addEventListener("keydown", function(event){
  if(event.keyCode == 38){
      if(videoObject.volume < 1.1)
       videoObject.volume = videoObject.volume + 0.1;
  }
  event.preventDefault();
});

addEventListener("keydown", function(event){
  if(event.keyCode == 40){
      if(videoObject.volume > 0)
       videoObject.volume = videoObject.volume - 0.1;
  }
  event.preventDefault();
});
  
}

