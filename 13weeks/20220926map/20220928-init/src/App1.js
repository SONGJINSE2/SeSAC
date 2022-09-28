
function App(){
    return (
        <div className = "App">

        </div>
    );
}

export default App;

class Shape {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return this.w * this.h;
    }
}

class Square extends Shape {

}

class Triangle extends Shape{
    constructor(x,y,name){
        super(x,y);
        this.name = name;
    }
    getArea(){
        return this.w*this.h/2;
    }
}

let shape1 = new Shape(5,4);
console.log( shape1.getArea());

let shape2 = new Shape(2,3);
console.log( shape2.getArea());

let shape3 = new Square(4,8);
console.log( shape3.getArea());

let shape4 = new Triangle(5,6);
console.log( shape4.getArea());

// Square는 빈 객체이지만 extends로 Shape의 값을 가져왔기 때문에 실행이 가능하다.

// Triangle은 부모요소를 가져왔지만 자식은 부모를 덮어쓸 수 있기 때문에 Triangle값이 실행된다.

// constructor는 덮어 쓸 수 없다. 그래서 아래의 super로 부모요소를 가져온다.