var bg,bgImg;
var spaceShip,spaceShipImg,spaceShipImg2,spaceShipImg3,spaceShipImg4;
var astroids,astroidsImg;
var star,starImg;
var missle,missleImg;

function preload(){
    bgImg=loadImage("assets/bg.jpg");
    spaceShipImg=loadImage("assets/spacecraft1.png");
    spaceShipImg2=loadImage("assets/spacecraft2.png");
    spaceShipImg3=loadImage("assets/spacecraft3.png");
    spaceShipImg4=loadImage("assets/spacecraft4.png");
    astroidsImg=loadImage("assets/astroids.png");
    starImg=loadImage("assets/star.png");
    missleImg=loadImage("assets/missle/missle.png");
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    spaceShip=createSprite(600,400,100,100);
   

    
    bg=createSprite(displayHeight/2+100,displayWidth/2-200,50,50);
    bg.addImage(bgImg);
    bg.scale=3;
    bg.depth=spaceShip.depth;
    spaceShip.depth+1;



}

function draw(){
    background(2);

    
    
    drawSprites();
}