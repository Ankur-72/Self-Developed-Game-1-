var canvas
var bg1,bg2,bg3,bg4,bg5,number;
var gameState = 1;
var button, button1, button2;

function preload(){
    bg1 = loadImage("Wallpaper1.jpg");
    bg2 = loadImage("Wallpaper2.jpg");
    bg3 = loadImage("Wallpaper3.jpg");
    bg4 = loadImage("Wallpaper4.png");
    bg5 = loadImage("Wallpaper5.png");
    bg6 = loadImage("Wallpaper6.png");
    bg7 = loadImage("Wallpaper7.png");
    bg8 = loadImage("Wallpaper8.png");
    bg9 = loadImage("Wallpaper9.png");
    bg10 = loadImage("Wallpaper10.png");

}

function setup(){
    canvas = createCanvas(485,625);
   // background(bg10);
   num = round(random(6,8));
}

function draw(){

    

    if (gameState === 1){

        if(frameCount < 100){ 
            background("#9966FF");
            textSize(34);
            fill("purple");
            text("Vocabulary World", 110, 250);
            textSize(18);
            fill("orange");
            text(" - By Ankur Tadipatri", 250, 360);

        }

        if(frameCount > 105){
            background(bg4);
            textSize(42);
            fill("#3366CC");
            text("Vocabulary World", 90,50);
        
            textSize(18.5);
            fill('black');
            text("Words are extraordinary! There are always new words", 12, 130);
            text("to explore, because words are a universe in themselves.", 12, 155);   
            text("This is a wonderful game to explore that universe while", 12,180);
            text("improving your knowledge of words - Vocabulary. Brace", 12, 205); 
            text("yourselves for some interesting and rapid rounds of words.", 5, 230);
            text("Let's see if you can crack the game or it cracks your head!",5, 255);
        }
        
    }

    if (gameState === 2){
 background(bg10);
        //button.hide();
        //button1.hide();
        textSize(42);
        fill("#CC0099");
        text("Instructions", 130,50);
    
        textSize(18.5);
        fill('black');
        text("1. You will be given 10 vocabulary questions each round. ", 12, 130);
        text("2. A word will show up and you have to choose the most", 12, 155);   
        text("appropriate meaning from the four options on the screen. ", 12,180);
        text("3. Make sure you finish up before the timer runs out!", 12, 205); 
        text("4. Your score will show up after every round completes.", 12, 230);
        text("5. Have fun and keep learning new words! ",65, 255);
    }

    if (gameState === 3){
        //console.log(number);
        background(bg8);
    }

   

    form = new Form();
        form.display();
    
    drawSprites();
}
