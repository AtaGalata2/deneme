
var imgCount = null;
imgs = new Array();
var playerImg = new Image();
var bg1 = new Image();
var playerInvis = new Image();



loadImg = function(imgCount,path){
    playerImg.src = path+`player.png`;
    playerInvis.src = path+`playerinvis.png`;
    bg1.src = path+`bg1.png`;

    for(var i = 1; i <= imgCount; i++)
    {
    imgs[i] = new Image();
    imgs[i].src = path+`${i}.png`;
    console.log(`image ${i} loaded.`)
    }
}
