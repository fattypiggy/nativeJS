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
