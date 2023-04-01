// player
var music = document.querySelector('.music-element')
var playBtn = document.querySelector('.play')
var seekbar = document.querySelector('.seekbar')
var currentTime = document.querySelector('.current-time')
var duration = document.querySelector('.duration')

function handlePlay() {
    if (music.paused) {
        
        music.play();
        
        var video = document.getElementById("button-play")
  var playLogo = document.getElementById("play-pause")
  video.removeChild(playLogo)


  const para = document.createElement("i");
  para.setAttribute("class","fa-solid fa-pause play-pause");
  para.setAttribute("id","play-pause")
  const element = document.getElementById("button-play");
  element.appendChild(para);
    } else {
        music.pause();
        var video = document.getElementById("button-play")
        var playLogo = document.getElementById("play-pause")
        video.removeChild(playLogo)
        
      
      
        const para = document.createElement("i");
        para.setAttribute("class","fa-solid fa-play play-pause");
        para.setAttribute("id","play-pause")
        const element = document.getElementById("button-play");
        element.appendChild(para);
    }
    music.addEventListener('ended', function () {
        var video = document.getElementById("button-play")
    var playLogo = document.getElementById("play-pause")
    video.removeChild(playLogo)
    
  
  
    const para = document.createElement("i");
    para.setAttribute("class","fa-solid fa-play play-pause");
    para.setAttribute("id","play-pause")
    const element = document.getElementById("button-play");
    element.appendChild(para);
        music.currentTime = 0
    });
}































