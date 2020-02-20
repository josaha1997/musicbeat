window.addEventListener('load',()=>{
const sounds=document.querySelectorAll(".sound");
const pads=document.querySelectorAll(".pads div");
const visual=document.querySelector(".visual");
const colors=[
    '#60d394',
    '#606bd3',
    '#bad360',
    '#d36060',
    '#c560d3',
    '#d36073'
]
pads.forEach((pad,index)=>{
    pad.addEventListener('mouseenter',function(){
        sounds[index].currentTime=0;
        sounds[index].play();
        createBubbles(index);
    });

});
const createBubbles=(index)=>{
    const bubble=document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation='jump 1s ease';
    bubble.addEventListener('animationend',function(){
        visual.removeChild(this);
    });
}
});