
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Besabriyaan-by-Armaan malik" , filePath: "songs/1.mp3" , coverPath: "covers/1.jfif"  },
    {songName: "Jab-Tak" , filePath: "songs/2.mp3" , coverPath: "covers/2.jfif"  },
    {songName: "Kaun-Tujhe" , filePath: "songs/3.mp3" , coverPath: "covers/3.jfif"  },
    {songName: "Parwah-Nahi" , filePath: "songs/4.mp3" , coverPath: "covers/4.jfif"  },
    {songName: "Padhoge-Likhoge" , filePath: "songs/5.mp3" , coverPath: "covers/5.jfif"  },
    {songName: "Kabira" , filePath: "songs/6.mp3" , coverPath: "covers/6.jfif"  },
    {songName: "Kesariyaa" , filePath: "songs/7.mp3" , coverPath: "covers/7.jfif"  },
    {songName: "Khamoshiyaan" , filePath: "songs/8.mp3" , coverPath: "covers/8.jfif"  },
    {songName: "Oboseshe" , filePath: "songs/9.mp3" , coverPath: "covers/9.jfif"  },
    {songName: "Shayad" , filePath: "songs/10.mp3" , coverPath: "covers/10.jfif"  },
    
]
songItem.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});
 
//handle play/pause button
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});

//Listen to Event
audioElement.addEventListener('timeupdate' , ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
//cahnge to any postion of a song
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});
const makeAllPlays = ()=>{
    Array.from (document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex +1 }.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });

});

document.getElementById("next").addEventListener('click', ()=>{
if(songIndex >= 9){
    songIndex = 0;
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex +1 }.mp3`;
audioElement.currentTime = 0;
masterSongName.innerText = songs[songIndex].songName;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
});

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex +1 }.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    });
    