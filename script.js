console.log("Welcome to Spotify")
// Initializing Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs =[
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
]

// audioElement.play();

//Handle Play Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // updating seekbar
    progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
})

//changing song part
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})