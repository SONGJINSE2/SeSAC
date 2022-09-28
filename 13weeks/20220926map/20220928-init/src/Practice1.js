import React, { Component } from "react";

class Student extends Component{
    constructor(a,b,c,d){
        super()
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    
    getInfo(){
        return this.a + "/" + this.b + "/" + this.c +'/' + this.d;
    }

    render(){
        return (
            <div className="Student">
            </div>
        );
    }
}

class Kim extends Student{

}

class Lee extends Student{

}

let student1 = new Kim("이순신", "거북선", 50 , 760841);
console.log( student1.getInfo());

let student2 = new Lee("세종대왕", "집현전", 50, 1112);
console.log( student2.getInfo());


export default Student;
