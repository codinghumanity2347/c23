const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var boxOne;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    //console.log(engine);
    world = engine.world;
    var groundOptions = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height - 10, 400, 20, groundOptions);
    World.add(world, ground);

    /*how do we create an object: "new" keyword it indicates there is
    an object which needs to be created.
    */
    //(): it initalizes the constructor;
    boxOne = new Box(20, 20, 50, 50);
}

function draw() {
    background(0);
    Engine.update(engine);
    var pos = ground.position;
    rectMode(CENTER);
    fill("white")
    rect(pos.x, pos.y, 400, 20);
    boxOne.display();

}