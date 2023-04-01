
// player
var music2 = document.querySelector('.music-element2')
var playBtn2 = document.querySelector('.play2')
var seekbar2 = document.querySelector('.seekbar2')
var currentTime2 = document.querySelector('.current-time2')
var duration2 = document.querySelector('.duration2')

function handlePlay2() {
    if (music2.paused) {
        
        music2.play();
        
        var voice = document.getElementById("button-play2")
        var playLogo = document.getElementById("play-pause2")
        voice.removeChild(playLogo)


  const para = document.createElement("i");
  para.setAttribute("class","fa-solid fa-pause play-pause");
  para.setAttribute("id","play-pause2")
  const element = document.getElementById("button-play2");
  element.appendChild(para);
    } else {
        music2.pause();
        var voice = document.getElementById("button-play2")
        var playLogo = document.getElementById("play-pause2")
        voice.removeChild(playLogo)
        
      
      
        const para = document.createElement("i");
        para.setAttribute("class","fa-solid fa-play play-pause");
        para.setAttribute("id","play-pause2")
        const element = document.getElementById("button-play2");
        element.appendChild(para);
    }
    music2.addEventListener('ended', function () {
        var voice = document.getElementById("button-play2")
    var playLogo = document.getElementById("play-pause2")
    voice.removeChild(playLogo)
    
  
  
    const para = document.createElement("i");
    para.setAttribute("class","fa-solid fa-play play-pause");
    para.setAttribute("id","play-pause2")
    const element = document.getElementById("button-play2");
    element.appendChild(para);
        music2.currentTime2 = 0
    });
}




