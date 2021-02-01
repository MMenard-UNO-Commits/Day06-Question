import GameObject from "../engine/game-object.js"
class RedRectangle extends GameObject{
    //Constructors are just called 'constructor' instead of the name of the class.
    constructor() {
        super();
    }
    //javascript does not have return types, so none is needed for member functions
    update() {//How does the gameObject instance change with every update call?
        this.x++; //Notice that I have to prefix member variables with 'this'
        this.y++;
    }
    draw(ctx) {//How does the game object draw itself?
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 100, 200);//fillRect expects the upper left-hand coordinates and then the width and height of the rectangle

    }
}

export default RedRectangle;