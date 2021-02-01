class Scene{

    constructor() {
        this.children = [];
    }
    getChildren() {
        return this.children;
    }
    addChild() {
        this.child
    }
    draw(ctx) {
        for(let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            child.draw(ctx);
        }
    }
    update() {
        for(let child of this.children) {
            child.update();
        }
    }

}

export default Scene;