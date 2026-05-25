class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("assets/estilingue-frente.png");
        this.sling2 = loadImage("assets/estilingue-tras.png");
        this.sling3 = loadImage("assets/estilingue.png");
        this.pointB = pointB;

        World.add(world, this.SlingShot);
    }
}