/**
 * Class representing a complex number.
 * @author William Jing
 */

/**
 * @constructor
 * @param {number} real - The real number.
 * @param {number} imaginary - The imaginary number.
 */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary))
        throw new TypeError();
    this.r = real;
    this.i = imaginary;
}

/**
 * Returns the sum of this and that.
 * @param {Complex} that 
 * @returns {Complex} 
 */
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
}
/**
 * Returns the product of this and that.
 * @param {Complex} that 
 * @returns {Complex}
 */
Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.r + this.i * that.i);
}

/**
 * Returns the modulus of this complex number.
 * @returns {Complex}
 */
Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

/**
 * Returns the negative complex of this complex number.
 * @returns {Complex}
 */
Complex.prototype.neg = function () {
    return new Complex(-this.r, -this.i);
}

/**
 * Returns the string of this complex number.
 * @returns {string}
 */
Complex.prototype.toString = function () {
    return '{' + this.r + ',' + this.i + '}';
}

/**
 * Returns if that equals this complex number.
 * @param {Complex} that 
 * @returns {string}
 */
Complex.prototype.equals = function (that) {
    return that != null && that.constructor === Complex && this.r === that.r && this.i === that.i;
}

/**
 * Try to Parse a string into a complex number.
 * @param {string} s 
 * @returns {Complex}
 * @throws {TypeError}
 */
Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch (x) {
        throw new TypeError("Can not parse" + s + "as a complex number.");
    }
}

/**
 * @static
 */
Complex.ZERO = new Complex(0, 0);

/**
 * @static
 */
Complex.ONE = new Complex(1, 0);

/**
 * @static
 */
Complex.I = new Complex(0, 1);

/**
 * @static
 */
Complex._format = /^\{([^,]+),([^}]+)\}$/;