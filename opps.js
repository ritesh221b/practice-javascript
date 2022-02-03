// Classes in JS

class Rectangle{

    constructor(_width, _height, _color){
        console.log("Constructor is called");
        this.width = _width;
        this.color = _color;
    }

    getArea(){
        return this.width*this.width;
    }

    get width(){
        return this.width;
    }

    set width(width){
        this.width = width;
        return width;
    }

}

let myReactangle = new Rectangle(3,"red");

// https://www.youtube.com/watch?v=2ZphE5HcQPQ