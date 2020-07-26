//naming convention -> the first of the everyword should in caps
//class is a keyword
class Box {
    /*inside the classes it is not required
     to use the word function
    in order to create one*/

    /*Properties and the function
    Step1: properties:
    we're going to add the properties inside constructor
    constructor ->
     it is a function- inbuilt function(write the properties)
    */
    //which accepts 4 values
    //converting the constructor to 4 arguments constructor
    constructor(x, y, w, h) {
            //this is a keyword which helps to point to current object
            var options = {
                restitution: 1.0,
                friction: 0.3,
                density: 1.2
            }
            this.body = Bodies.rectangle(x, y, w, h, options);
            this.width = w;
            this.height = h;
            World.add(world, this.body);
        }
        //function
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }







}