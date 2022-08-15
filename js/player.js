//Declarations
let totalDuration;
let progress=document.getElementById("songProgress");
let parent=document.getElementById("trackBackground");
let pausePlay=document.getElementById("playPause");

//Play Audio Start            
const audioContext = new AudioContext();

const audioElement=document.querySelector('audio');//Selecting the audio element

const track=audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

const playButton=document.getElementById("play");

playButton.addEventListener('click',()=>{
    if(audioContext.state=="suspended"){
        audioContext.resume();
    }
    if(playButton.dataset.playing==='false'){
        audioElement.play();
        playButton.dataset.playing='true';
        totalDuration = audioElement.duration;
        setInterval(change,1000);
        pausePlay.className="fa-solid fa-pause";
    }
    else if(playButton.dataset.playing==='true'){
        audioElement.pause();
        playButton.dataset.playing='false';
        pausePlay.className="fa-solid fa-play";
    }
},false);

audioElement.addEventListener('ended',()=>{
    playButton.dataset.play='false';
},false);
//Play Audio End

function change(){
    let currentTime=audioElement.currentTime;
    progress.style.width=`${(currentTime/totalDuration)*100}%`;
}