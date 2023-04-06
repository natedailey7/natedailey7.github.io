var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration", () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
 
// gravity function
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character)
        .getPropertyValue("top"));
    if (jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    // left pos of block
    var blockLeft = parseInt(window.getComputedStyle(block)
        .getPropertyValue("left"));

    // top ops of hole
    var holeTop = parseInt(window.getComputedStyle(hole)
        .getPropertyValue("top"));

    // doing some math because the top is zero (idk)
    var cTop = -(500-characterTop);

    if((characterTop>480)
        // if the block intersects horizontally
        ||((blockLeft<20)
        &&(blockLeft>-50)
        // if the hole does not intersect vertically
        &&((cTop<holeTop)
        ||(cTop>holeTop + 130)))){
        
        alert("Game Over")
        character.style.top = 100 + "px"
        counter =0;

    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    // this is an interval that runs every 10 seconds
    var jumpInterval = setInterval(function(){
        // get top of character
        var characterTop = parseInt(window.getComputedStyle(character)
            .getPropertyValue("top"));
        // if you're at the top, don't keep adding
        // and stop adding at 15 jumps, so that we have a pause
        // atthe top of the arc. 
        if((characterTop>6)&&(jumpCount<15)){
            // move character up 3
            character.style.top = (characterTop-5)+"px";
        }
        // exit the function:
        // if we have already ran our interval a bunch of times. 
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10)
}