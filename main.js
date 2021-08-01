canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
background_image="mars2.jpg";
rover_image="rover.png";
roverx=10;
rovery=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image; 
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
  function uploadrover(){
      ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);
  }
  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
  }
  function up(){
      if(rovery>=0){
        rovery=rovery-10;
        console.log("when up pressed x="+roverx+" ,y="+rovery);
        uploadBackground();
        uploadrover()
      }
  }
  function down(){
      if(rovery<=500){
          rovery=rovery+10;
          console.log("when down pressed x="+roverx+" ,y="+rovery);
          uploadBackground();
          uploadrover();
      }
  }
  function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("when left pressed x="+roverx+" ,y="+rovery);
        uploadBackground();
        uploadrover();
      }  
  }

function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("when right pressed x="+roverx+" ,y="+rovery);
        uploadBackground();
        uploadrover(); 
    }
}