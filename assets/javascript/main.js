
window.addEventListener("load",initEvent);

var audio;
var flag = false;
var id;
var flag1= false;

function initEvent(){
    // loadAjax();
    loadsongs();
    if(localStorage.playList){
    loadPlayList();
    }
    // playplaylist();
    audio = document.querySelector("#audio");
    playbtn = document.querySelector('#play');
    playbtn.addEventListener("click",toggleplay);
    next = document.querySelector("#next");
    prev = document.querySelector("#prev");
    next.addEventListener("click",nextsong);
    prev.addEventListener("click",prevsong);
    current=document.querySelector("#current");
    song_total_time.querySelector("#song_total_time");
    song_current_time.querySelector("#song_current_time")
    slider = document.querySelector("#slider");
    slider.addEventListener("change" ,seekSong);
    search1 =document.querySelector("#search");
    search1.addEventListener("keyup",display);
    
    // submit =document.querySelector("#submit");
    // submit.addEventListener("click",search1);


}
function display(){
   
    
    ul.innerHTML=""; 
    var search =search1.value;
    var search2=search.toLowerCase();
    
    // for( var j=0;j<search.length;j++){
    console.log(search2);
    for(var i=0; i< songs.length; i++){
      var name1=  songs[i].s_name.toLowerCase();
         if(name1.includes(search2)){
             

           
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = songs[i].s_name;
    var img = document .createElement("img");
    var btn =document.createElement("button");
    btn.innerHTML='Add to playlist';
    btn.className = "btn btn-danger d-block w-100";
    img.setAttribute('src' , songs[i].s_thumb);
    img.setAttribute('title' , songs[i].s_id);
    
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(btn);
    
    ul.appendChild(li);
   
    
    img.addEventListener("click",playsong);
    btn.addEventListener("click",addSong);


}}
}


// function loadAjax() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         // console.log(this.readyState, this.status);
//         var data = this.responseText;
//         console.log(data);
//         // data = JSON.parse(data);
        
        
//     }
//     xhttp.open('get','https://SpotifyPublicAPIdimasV1.p.rapidapi.com/getAlbum&api_key=b647e4f6b6msh76b856d9d401254p1899d0jsne100f65e290f&limit=5');
//     xhttp.send();
// }
function loadsongs() {
        ul = document.querySelector("#songsList");

        songs.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.s_name;
        var img = document .createElement("img");
        var btn =document.createElement("button");
        btn.innerHTML='Add to playlist';
        btn.className = "btn btn-danger d-block w-100";
        img.setAttribute('src' , obj.s_thumb);
        img.setAttribute('title' , obj.s_id);
        
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        
        img.addEventListener("click",playsong);
        btn.addEventListener("click",addSong);


    })

}
function addSong() {
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].s_id == s_id) {
            var songObj = songs[i];
           
            obj.addSong(songObj.s_id, songObj.s_name, songObj.s_url, songObj.s_thumb);
           
            break;
        }
      
    }
   printsongs();

}

function playsong(){
   var song_id=event.srcElement.parentElement.children[0].title;
      
      
     for(var i = 0; i < songs.length; i++){
         if(songs[i].s_id==song_id){

            var songurl=songs[i].s_url;
            var name =songs[i].s_name;
            id = songs[i].s_id;
            break;
         }
        }
         audio.src = songurl;
         current.innerHTML= name;
       
         audio.play();
         setInterval(function(){
             slider.value=audio.currentTime;
             var duration=audio.duration;
             var curr=audio.currentTime;
             var min1 = parseInt(curr / 60);
             var sec1 = parseInt(curr % 60);
             song_current_time.innerHTML="0" + min1 + ":" + sec1;
             
             var min = parseInt(duration / 60);
             var sec = parseInt(duration % 60);
             var min1 = parseInt(curr / 60);
             var sec1 = parseInt(curr % 60);
             var min2= min-min1;
             
             var sec2= sec - sec1;
             song_total_time.innerHTML="0" + min2 + ":" + sec2 ;
             
         },1000);
         setTimeout(function(){
             var duration=audio.duration;
           
             slider.max=duration;
            
         },500);
         flag = true;
         toggleplay();


}
// function playplaylist(){
//     if (window.localStorage) {
//         var arr = localStorage.getItem("playList");
//         obj.playList = JSON.parse(arr);
        
   
//     for(var i=0; i<arr.length; i++){
//         audio.src = obj[i].url;
//         current.innerHTML= name;
      
//         audio.play();
//         setInterval(function(){
//             slider.value=audio.currentTime;
//             var duration=audio.duration;
//             var curr=audio.currentTime;
//             var min1 = parseInt(curr / 60);
//             var sec1 = parseInt(curr % 60);
//             song_current_time.innerHTML="0" + min1 + ":" + sec1;
            
//             var min = parseInt(duration / 60);
//             var sec = parseInt(duration % 60);
//             var min1 = parseInt(curr / 60);
//             var sec1 = parseInt(curr % 60);
//             var min2= min-min1;
            
//             var sec2= sec - sec1;
//             song_total_time.innerHTML="0" + min2 + ":" + sec2 ;
            
//         },1000);
//         setTimeout(function(){
//             var duration=audio.duration;
          
//             slider.max=duration;
           
//         },500);
//         flag = true;
//         toggleplay();

//     }
// }
// }

function toggleplay(){
    if(!flag) {
        playbtn.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();

    }
    else{
        playbtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }
    flag = !flag;
}




function seekSong() {
    audio.currentTime = slider.value;
}

function nextsong(){
    for(var i = 0; i < songs.length; i++){
        if(songs[i].s_id == id){

          var urll= songs[i+1].s_url;
          id = songs[i+1].s_id;
          var name =songs[i+1].s_name;6
          
   
           break;
        }
       }
    audio.src=urll;
    current.innerHTML= name;
    audio.play();
    flag=true;
    toggleplay();

}
function prevsong(){
    for(var i = 0; i < songs.length; i++){
        if(songs[i].s_id == id){

          var urll= songs[i-1].s_url;
          id = songs[i-1].s_id;
          var name =songs[i-1].s_name;
   
           break;
        }
       }
    audio.src=urll;
    current.innerHTML= name;
    audio.play();
    flag=true;
    toggleplay();
}
function toggleplay(){
    if(!flag) {
        playbtn.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();

    }
    else{
        playbtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }
    flag = !flag;
}
function addSong() {
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].s_id == s_id) {
            var songObj = songs[i];
           
            obj.addSong(songObj.s_id, songObj.s_name, songObj.s_url, songObj.s_thumb);
           
            break;
        }
      
    }
   printsongs();
   savePlayList();

}
function savePlayList() {
    if (window.localStorage) {
        var json = JSON.stringify(obj.playList);
        localStorage.setItem("playList", json);
    }
}

function loadPlayList() {
    if (window.localStorage) {
        var arr = localStorage.getItem("playList");
        obj.playList = JSON.parse(arr);
        
    }
    printsongs();
    
}
function deletesong(){
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].s_id == s_id) {
            var songObj = songs[i];
           
            obj.deletesong(songObj.s_id);
           
            break;
        }
       

    }
    printsongs();
    savePlayList();
   
}
function printsongs(){
     var ul = document.querySelector("#playList");
     ul.innerHTML="";
    obj.playList.forEach(function(obj) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = obj.name;
    var img = document .createElement("img");
    var btn =document.createElement("button");
    btn.innerHTML='<i class="fa fa-trash"></i>';
    btn.className = "btn btn-danger";
    img.setAttribute('src' , obj.image);
    img.setAttribute('title' ,obj.id);
    
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    
    img.addEventListener("click",playsong);
    span.addEventListener("click",playsong);
    btn.addEventListener("click",deletesong);
    // btn.i.addEventListener("click",deletesong);
})
}
