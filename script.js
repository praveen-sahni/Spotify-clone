console.log("Welcome to Spotify");
// using this for easy solve the problems
 //Initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


 let songs= [
    {songName: "Salam-e-Ishq", filePath: "song/1.mpeg", coverPath:"cover2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/2.mpeg", coverPath:"cover3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/3.mpeg", coverPath:"cover4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/4.mpeg", coverPath:"cover5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/5.mpeg", coverPath:"cover6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/6.mpeg", coverPath:"cover7.jpg"},
 ]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click' , () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{

    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
