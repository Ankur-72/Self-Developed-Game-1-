class Form{

    constructor(){}

    
        display(){
            if(frameCount > 105 && gameState <2){
                var button = createButton('Play!');
                button.position(620,420);
                button.size(130,50);
                button.style('color: orange');
        
                var button1 = createButton('Instructions');
                button1.position(620,500);
                button1.size(130,50);
                button1.style('color: purple');

               var button2 = createButton('Home Screen');
                button2.position(620,580);
                button2.size(130,50);
                button2.style('color: black');        
                
            button1.mousePressed(function(){
                gameState = 2;
            });   

            button2.mousePressed(function(){
                gameState = 1;
            });

            button.mousePressed(function(){
                gameState = 3;
            });

            }

            


           
    }
    
    
}