var c=document.getElementById("canvas");

c.width=window.innerWidth;
c.height=450;
var ctx=c.getContext('2d');
var te=0;
var dy,dx;
var itm;
var score=0;
var p=0;var g=0;
var ang;var idi=0;
var wx,wy;var af;var yes=0;
var k=0;
var height;var i;
var raf;var hy;
var block=[];
var running=false;
var time;
var ftime=new Date();
var Starttime;var tarttime;
var tankx,tanky;var w=0;var f;var s=0;
var utime;var temp=0;
var snd = new Audio("hit.mp3");
var sond = new Audio("Gun.mp3");
var sound = new Audio("close.wav");
var msound = new Audio("dust.mp3");
var ex=c.width;
var ey;


function mount(){

ctx.fillStyle='brown';
ctx.beginPath();
ctx.arc(ex, ey, 20, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
}

var ball = {
  x: tankx,
  y: tanky,
  radius:15,
  vx:-20,
  vy:0.02,
  draw: function() {
    
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, ball.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'brown';
    ctx.stroke(); 
    
  }
};

//close
function tank()
{

var mtime= (new Date());
time=(mtime-tarttime)/1000;



ball.x += ball.vx*time;
ball.y -= (time*ball.vy-0.5*10*time*time);

if(Math.sqrt((ball.x-man.x)*(ball.x-man.x)+(ball.y-man.y)*(ball.y-man.y)) < 24)
{snd.play();
window.cancelAnimationFrame(f);
window.cancelAnimationFrame(af);

p++; w=0;s=0;
alert("Game Over.Score= "+Math.floor(score));
ball.x=0;ball.y=0;}



if(ball.x==tankx)
{window.cancelAnimationFrame(f);

}

if(ball.y>450) 
{window.cancelAnimationFrame(f);
}

hy=window.requestAnimationFrame(tank);
}

//close
var man={
x:50,
y:225,
v:0.005,
radius:10,
colour:'red',

draw: function() {

    
    ctx.beginPath();
    ctx.arc(this.x, this.y, man.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke(); 
  }
};


//close

function draw()
{clear();

if(!yes)
 man.draw();

var ntime=new Date();
utime=(ntime-Starttime)/1000;


if(utime>20000)
{man.v=0.0025;}


if(te!=0)
{man.x -=2;
}
for(i=0;i<block.length;i++)
{ctx.fillStyle='black';
ctx.fillRect(0,0,c.width,10);
ctx.fillRect(0,0,10,c.height);
ctx.fillRect(c.width-10,0,10,c.height);
ctx.fillRect(0,440,c.width,10);
ctx.fillRect(block[i].x,block[i].y,10,block[i].ht);

block[i].x-=2;


if(block[i].x==c.width-100 && i%2==0)
{block.push(
 {
x:c.width,
ht:Math.floor(Math.random()*350)+20,
y:450-block[i].ht
});
}

else if (block[i].x==c.width-100 )
{block.push(
{ x:c.width,
 ht:Math.floor(Math.random()*350)+20,
 y:0
});

}

}

if(w!=0)
{tankx-=2;
}



if((ntime-ftime)%7000<1000)
if(!s)
s++;

if(s)
{
ctx.fillStyle='green';
ctx.fillRect(tankx,tanky,50,20);

if((man.x+10>tankx && man.y<tanky+20 && man.x-10<tankx+50 && man.y>tanky) ||(man.x+10>tankx && man.y<tanky+20 && man.x-10<tankx+50 && man.y>tanky) 
|| (man.x>tankx && man.y+10>tanky && man.x<tankx+50 && man.y<tanky+20) || (man.x+10>tankx && man.y-10<tanky+20 && man.x<tankx+50 && man.y+10>tanky))
{window.cancelAnimationFrame(f);
window.cancelAnimationFrame(af);sond.play();
p++; temp++;
alert("Game Over. Score= "+Math.floor(score));
man.x=-20;man.y=-10;}

if(!temp){
ball.draw();

if((!w))
{
tankx=c.width;
tanky=Math.floor(Math.random()*400)+20;
w++;
}
if(tankx<600 && (!g))
{g++;
ball.x=tankx;ball.y=tanky;
tarttime=new Date();
f=requestAnimationFrame(tank);
}

}}

if(tankx<0)
{w=0;s=0;g=0;}

if(!idi)
 {
 if(utime>5)
{
  if((utime%5)<1)
 {
  idi++; 
  ey=Math.floor(Math.random()*400)+20;
 }}
}

if(ex<0)
{idi=0;
ex=c.width;}

if(idi)
{mount();
ex-=2;
if(Math.sqrt((ex-man.x)*(ex-man.x)+(ey-man.y)*(ey-man.y)) < 21)
{msound.play();
window.cancelAnimationFrame(f);
window.cancelAnimationFrame(af);
p++; temp++;
alert("Game Over. Score= "+Math.floor(score));
man.x=-20;man.y=-10;
}

}

document.getElementById("p1").innerHTML=Math.floor(score);
if(p!=0){
window.cancelAnimationFrame(raf);
}

else if(!temp)
raf=requestAnimationFrame(draw);

}


//close
block[0]={
x:c.width,
ht:200,
y:0

};

//close


function clear() {
 ctx.fillStyle='yellow';
  ctx.fillRect(0,0,c.width,c.height);
  
}

c.addEventListener('mousemove', function(e) {
  if (!running) {
    yes++;
    wx = e.clientX;
    wy = e.clientY;
    run();
    
  }
});

//close
c.addEventListener('click', function(f) {
    if(tankx<f.clientX && tankx+50>f.clientX && tanky<f.clientY && tanky+20>f.clientY)
       {w=0;s=0;g=0;}
    else if(Math.sqrt((ex-f.clientX)*(ex-f.clientX)+(ey-f.clientY)*(ey-f.clientY))<20)
       {idi=0;}
  }
);

//close


function run()
{


if(man.x<0 && (!p))
{window.cancelAnimationFrame(af);
p++; sound.play();
alert("Game Over. Score= "+Math.floor(score));
man.x=1;}


man.draw();


for(j=0;j<block.length;j++)
if(man.x+10>=block[j].x+10 && man.x-10<block[j].x+10 )
 {if((j%2==0 && man.y-10<=block[j].y+block[j].ht ) || (j%2==1 && man.y+10>=block[j].y && man.y-10<=block[j].y+block[j].ht))
  {k++;break;}
 }


if(!k){
dy=(wy-man.y);
dx=(wx-man.x);

ang=Number(dy/dx);


if(te==0)
for(j=0;j<block.length;j++)
{
if(man.x+10>=block[j].x && man.x-10<block[j].x+10)
 {if((j%2==0 && man.y-10<=block[j].y+block[j].ht ) || (j%2==1 && man.y+10>=block[j].y && man.y-10<=block[j].y+block[j].ht))
   {te++;itm=j;break;
    }
 }
}

if(te!=0)
{if(man.x+10>=block[itm].x && man.x-10<block[itm].x+10)
 {if((itm%2==0 && man.y-10<=block[itm].y+block[itm].ht ) || (itm%2==1 && man.y+10>=block[itm].y && man.y-10<=block[itm].y+block[itm].ht))
   { if ((ang>0 && dx<0) || (ang<0 && dx<0))
  {te=0;} }
   
  else
 {te=0;}
}}


if(te!=0)
{if(ang>=0)
{if(dy>0)
  {man.y +=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
 else
  {
  man.y -=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
}

else
{if(dy>0)
  {
  man.y +=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
 else
  {
  man.y -=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
}
}
else if(dx==0 && dy==0)
{score+=2;}
else if(dx==0)
{man.y+=(man.v);}
else{

if(ang>=0)
{if(dy>0)
  {
  man.x +=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  score+=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  man.y +=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
 else
  {
  man.x -=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  man.y -=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
}

else

{if(dy>0)
  {
  man.x -=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  man.y +=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
 else
  {
  man.x +=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  score+=(((man.v)/(Math.sqrt(1+(ang*ang)))));
  man.y -=man.v*Math.abs(ang)/Math.sqrt(1+(ang*ang));
  }
}
}



if(!p)
{
af=requestAnimationFrame(run);
}
}
if(k!=0)
{k=0;af=requestAnimationFrame(run);}

}

Starttime=new Date();
draw();


