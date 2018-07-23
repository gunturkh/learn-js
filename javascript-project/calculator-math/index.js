
//level-14 & 15
function add(num1,num2) {
    var result = num1 + num2
    return result
}

function substract(num1,num2) {
    var result = num1 - num2
    return result
}

function multiply(num1,num2) {
    var result = num1 * num2
    return result
}

function divide(num1,num2) {
    var result = num1 / num2
    return result
}

function modulo(num1,num2) {
    var result = num1 % num2
    return result
}
var addResult = add(3,2)
var subsResult = substract(3,2)
var multiplyResult = multiply(3,2)
var divideResult = divide(3,2)
var moduloResult = modulo(3,2)
console.log(addResult);
console.log(subsResult);
console.log(multiplyResult);
console.log(divideResult);
console.log(moduloResult);

//level-16

function calculator (num1,num2,operator) {
    if (operator == "+") {
        var result = add(num1,num2)
        return result
    }
    if (operator == "-") {
        var result = substract(num1,num2)
        return result
    }
    if (operator == "*") {
        var result = multiply(num1,num2)
        return result
    }
    if (operator == "/") {
        var result = divide(num1,num2)
        return result
    }
    if (operator == "%") {
        var result = modulo(num1,num2)
        return result
    }
}
var calcresult = calculator(3,2,"%")
console.log(calcresult)



