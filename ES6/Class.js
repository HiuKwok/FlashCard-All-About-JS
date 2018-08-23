{
    /*
    * It work for the js but seem kind of weird for Non-js background.
    * How can a function call have properties like .toString()?
    * */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    let p = new Point(1, 2);
}

/*
* So the keyword is kind of make the script itself make sense.
* */
{
    //Setup a class with method .toString();
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }


    let p = new Point(10,15);
    //Class === function
    console.log("Type of class:", typeof Point);
    console.log(p.toString())
//    Check properties
    p.hasOwnProperty('x') // true
    p.hasOwnProperty('y') // true
}


{

    class Point {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }


    //Keyword [extends]
    class ColorPoint extends Point {

        constructor(x, y, color){
            super(x, y);
            this.color = color;
        }

        //Override toString as well
        toString () {
            return this.color + ' ' + super.toString();
        }

    }

}

