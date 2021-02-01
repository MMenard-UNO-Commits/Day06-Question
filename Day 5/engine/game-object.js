class GameObject {
    //Constructors are just called 'constructor' instead of the name of the class.
    constructor() {
        this.x = 0; //All references to member variables must be prefixed with 'this'. Anything without 'this' will be treated as a local variable.
        this.y = 0;
    }
    //javascript does not have return types, so none is needed for member functions
    update() {//How does the gameObject instance change with every update call?
        
    }
    draw(ctx) {//How does the game object draw itself?

    }
}

export default GameObject;