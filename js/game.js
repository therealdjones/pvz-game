let canvas,ctx;
let entities=[];

function initGame(){
canvas=document.getElementById("game");
ctx=canvas.getContext("2d");

entities.push({
type:"zombie",
x:800,
y:200,
speed:0.3,
hp:100,
anim:new Animation([loadImg("../assets/zombies/z1.png")],10)
});

loop();
}

function update(){
entities.forEach(e=>{
if(e.anim) e.anim.update();
if(e.type==="zombie") e.x-=e.speed;
});
}

function render(){
ctx.clearRect(0,0,900,500);
entities.forEach(e=>{
ctx.fillStyle="black";
ctx.fillRect(e.x,e.y,40,60);
});
}

function loop(){
update();
render();
requestAnimationFrame(loop);
}
