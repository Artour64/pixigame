/*
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)
//*/

//Create a Pixi Application
let app = new PIXI.Application({ 
    width: 512,         // default: 800
    height: 512,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    //forceCanvas: true,
    resolution: 1       // default: 1
  }
);

//app.renderer.backgroundColor = 0x061639;
//app.renderer.autoResize = true;
//app.renderer.resize(512, 512);
//app.renderer.view.style.position = "absolute";
//app.renderer.view.style.display = "block";
//app.renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
