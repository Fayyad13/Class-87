//Associating Canvas with fabric.js
var canvas = new fabric.Canvas('myCanvas');
//the height and width variables for the blocks
block_image_width = 30;
block_image_height = 30;
//the x and y of the player
player_x = 10;
player_y = 10;
//it sets up some properties for objects the player makes
var player_object="";
//it sets up some properties for the object's images
var block_image_objects="";
//this is a function that update's what the player looks like, everytime it moves
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;
        //sets up the height and width of the player
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        //sets up where the player is placed
        player_object.set
        ({
            top:player_y, 
            left:player_x
        });
        //adds player to canvas
        canvas.add(player_object);
    })
}
//gets the image of the block
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;

        //sets up the height and width of the block
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        //sets up where the block is going to be from the position of the player
        block_image_object.set
        ({
            top:player_y,
            left:player_x
        });
        //adds block to canvas
        canvas.add(block_image_object);
    });
}
//adds and eventlistener for the entire window, the eventlistener listens for the keydown event
window.addEventListener("keydown", my_keydown);
//everything inside this function is what could be or is happening while a key is down
function my_keydown(e)
{
    //this sets up the ASCII for the code
    keyPressed = e.keyCode;
    //this is an event that when the p and shift buttons are pressed together, they increase the height and width of the blocks
    if (e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift keys were pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    //this is an event that when the m and shift buttons are pressed together, they decrease the height and width of the blocks
    if (e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift keys were pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    //what would happen if that button was pressed
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    //what would happen if that button was pressed
    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }
    //what would happen if that button was pressed
    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    //what would happen if that button was pressed
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
    //what would happen if that button was pressed
    if (keyPressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    //what would happen if that button was pressed
    if (keyPressed == '68')
    {
        new_image('dark_green.png');
        console.log("d");
    }
    //what would happen if that button was pressed
    if (keyPressed == '76')
    {
        new_image('light_green.png');
        console.log("l");
    }
    //what would happen if that button was pressed
    if (keyPressed == '71')
    {
        new_image('ground.png');
        console.log("g");
    }
    //what would happen if that button was pressed
    if (keyPressed == '87')
    {
        new_image('wall.jpg');
        console.log("w");
    }
    //what would happen if that button was pressed
    if (keyPressed == '89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    //what would happen if that button was pressed
    if (keyPressed == '82')
    {
        new_image('roof.jpg');
        console.log("r");
    }
    //what would happen if that button was pressed
    if (keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
    //what would happen if that button was pressed
    if (keyPressed == '85')
    {
        new_image('unique.png');
        console.log("u");
    }
}
//sets up how the player goes up
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up Arrow Key Is Pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
//sets up how the player goes down
function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = "+ block_image_height);
        console.log("When Down Arrow Key Is Pressed, X = "+ player_x + ", Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
//sets up how the player goes left
function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left Arrow Key Is Pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
//sets up how the player goes right
function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right Arrow Key Is Pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
