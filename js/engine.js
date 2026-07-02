class Animation{
constructor(frames,speed=6){
this.frames=frames;
this.speed=speed;
this.i=0;
this.t=0;
}
update(){
this.t++;
if(this.t%this.speed===0){
this.i=(this.i+1)%this.frames.length;
}
}
frame(){
return this.frames[this.i];
}
}

function loadImg(src){
const img=new Image();
img.src=src;
return img;
}
