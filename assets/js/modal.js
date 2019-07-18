function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
}

var obj = {
    "playList": [],
    addSong: function(id, name, url, image) {
        var s = new Song(id, name, url, image);
        this.playList.push(s);
     
    },
    deletesong: function(id1) {
       
        for (var i = 0; i < this.playList.length; i++) {
            
            if (this.playList[i].id == id1) {
                
                this.playList.splice(i, 1);
               
                break;
            }
        
    }
}
}