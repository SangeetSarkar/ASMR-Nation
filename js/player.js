let totalDuration;
let progress=document.getElementById("songProgress");
let parent=document.getElementById("trackBackground");

//Play Audio Start            
const audioContext = new AudioContext();

const audioElement=document.querySelector('audio');

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
        setInterval(change,1000);
        totalDuration = audioElement.duration;
    }else if(playButton.dataset.playing==='true'){
        audioElement.pause();
        playButton.dataset.playing='false';
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