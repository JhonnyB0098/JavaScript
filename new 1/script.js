console.log("Shuru Krte Hai")

//--> Object Create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function () {
        console.log('draw');
    }
}

//--> Factory Function
function createRectangle(length, breadth) {
    let rectangle = {
        length, //length: l
        breadth, //breadth: b

        draw: function () {
            console.log('Drawing');
        }
    };
    return rectangle;
}
 
//--> Constructor Function
function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log("Drawing");
    }
}

let rectangleObject = new Rectangle();

let rectangle1= createRectangle(5,4);
let rectangle2= createRectangle(4,9);

rectangleObject.color="yellow";

console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);