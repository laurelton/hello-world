// 'use strict';

class Hello {
    constructor() {
        this.arr = ['0n3', 'tw0', 'thr33'];
    }

    hello() {
        let str = ''; 
        for (let elem of this.arr) {
            // console.log(elem);
            str += `${elem}\n`;
        }
        return str;
    }
}

let hi = new Hello();
console.log(hi.hello());
// console.log("Hello");