const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box, ground;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);
    ground = new Ground(10, 390, 800, 20);
    box1 = new Box(200, 300, 50, 50);
    box = new Box(170, 100, 50, 100);
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box.display();
}

class Class_Name 
{
    constructor(x, y, width, height) 
    {
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }

    display() 
    {

    }
};