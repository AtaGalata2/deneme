var soundCount = 15;
var soundType;
var sounds = new Array();

for(var i = 1; i <= soundCount; i++)
{
sounds[i] = new Audio(`client/sound/${i}.mp3`);

console.log(`sound ${i} loaded.`)
}


function Sound(sfx,type){
    if(type == "music")
    {
        var audio = sounds[sfx];
        audio.volume = 0.1;
        //audio.play();
        const playPromise = audio.play();
    }else
    {
        var audio = sounds[sfx];
        audio.volume = 1;
        const playPromise = audio.play();
        if (playPromise !== null){
            playPromise.catch(() => { audio.play(); })
        }
    }
}