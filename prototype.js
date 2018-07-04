/**\
 * @description ES6 class and prototype
 * @author William Jing
 */

/**
 * @description ES6 version
 */
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`;
    }
}

/**
 * @description ES5 version
 * @param {*} x x coordinate
 * @param {*} y y coordinate
 */
let Point = function(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return `(${this.x},${this.y})`;
}

// examples and explanation

let point1 = new Point(1, 2);
let point2 = new Point(2, 4);

// 类的所有实例共享同一个原型对象
console.log(point1.__proto__ === point2.__proto__); // true

// 类的原型的构造函数指向类本身
console.log(Point.prototype.constructor === Point); // true

// 类的实例的proto的构造函数指向类
console.log(point1.__proto__.constructor === Point); // true

// 类的实例的proto和类的原型相同
console.log(point1.__proto__ === Point.prototype); // true

// Point同时存在prototype和__proto__
// log in Chrome
console.log(Point.prototype);
// {constructor: ƒ, toString: ƒ}
//     constructor:class Point
//     toString:ƒ toString()
//     __proto__:Object

// log in Chrome
console.log(Point.__proto__);
// ƒ () { [native code] }

class ColorPoint extends Point {
    constructor(x, y, color) {
        // this.color = color; // ReferenceError
        super(x, y); // 必须调用super，而且要先调用，否则子类得不到this对象
        this.color = color;
    }
    toString() {
        return `(${this.x}, ${this.y}, ${this.color})`;
    }
}

let cp = new ColorPoint(2, 3, 'red');

// ES6 class继承存在两条继承链

// __proto__ 表示构造函数的继承，指向父类
console.log(ColorPoint.__proto__ === Point); // true

// prototype表示方法的继承，指向父类的prototype
console.log(ColorPoint.prototype.__proto__ === Point.prototype); // true
