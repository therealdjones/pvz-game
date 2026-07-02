const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

let zombies=[{x:800,y:200,hp:100}];
let plants=[{x:200,y:200}];

function update(){
zombies.forEach(z=>{
z.x-=0.3;
});
}

function render(){
ctx.clearRect(0,0,900,500);

// plants
ctx.fillStyle="green";
plants.forEach(p=>{
ctx.fillRect(p.x,p.y,40,40);
});

// zombies
ctx.fillStyle="black";
zombies.forEach(z=>{
ctx.fillRect(z.x,z.y,40,60);
});
}

function loop(){
update();
render();
requestAnimationFrame(loop);
}

loop();
