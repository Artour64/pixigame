//Create a Pixi Application
let app = new PIXI.Application({ 
    width: 512,         // default: 800
    height: 512,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    forceCanvas: true, //"fixes" cross origin issues.
    resolution: 1       // default: 1
  }
);

app.renderer.backgroundColor = 0xffffff;
//app.renderer.autoResize = true;
//app.renderer.resize(512, 512);
//app.renderer.view.style.position = "absolute";
//app.renderer.view.style.display = "block";
//app.renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader
  .add([{
  	name: "boy",
    url: "img/boy.png",
    crossOrigins: true,
    onComplete: function () {}
  }])
  .load(setup);

let boy

function setup() {
	  //Create the cat sprite
	  boy = new PIXI.Sprite(PIXI.loader.resources["boy"].texture);
	  boy.x=100
	  boy.y=100
	  //Add the cat to the stage
	  app.stage.addChild(boy);
	  
	  app.ticker.add(delta => gameLoop(delta));
}


//key press events
var keyEnum = { W_Key:0, A_Key:1, S_Key:2, D_Key:3 };
var keyArray = new Array(4);

kd.UP.down(function () {
        keyArray[keyEnum.W_Key] = true;
})
kd.UP.up(function () {
        keyArray[keyEnum.W_Key] = false;
})
kd.DOWN.down(function () {
        keyArray[keyEnum.S_Key] = true;
})
kd.DOWN.up(function () {
        keyArray[keyEnum.S_Key] = false;
})
kd.LEFT.down(function () {
        keyArray[keyEnum.A_Key] = true;
})
kd.LEFT.up(function () {
        keyArray[keyEnum.A_Key] = false;
})
kd.RIGHT.down(function () {
        keyArray[keyEnum.D_Key] = true;
})
kd.RIGHT.up(function () {
        keyArray[keyEnum.D_Key] = false;
})


function isKeyDown(key)
{
    return keyArray[key];
}

function cordfence(s){
	let maxx=512-64
	let maxy=512-64
	
	if(s.x>maxx){
		s.x=maxx
	}else if(s.x<0){
		s.x=0
	}
	
	if(s.y>maxy){
		s.y=maxy
	}else if(s.y<0){
		s.y=0
	}
}

function gameLoop(delta){
	kd.tick();
	let speed=5;
	if(keyArray[keyEnum.W_Key]){
		boy.y-=speed
	}
	if(keyArray[keyEnum.A_Key]){
		boy.x-=speed
	}
	if(keyArray[keyEnum.S_Key]){
		boy.y+=speed
	}
	if(keyArray[keyEnum.D_Key]){
		boy.x+=speed
	}
	cordfence(boy)
}




