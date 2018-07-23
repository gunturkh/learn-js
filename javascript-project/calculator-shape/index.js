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


function calculateSquareArea (side) {
    var result = Math.pow(side,2)
    return result
}

function calculateSquarePerimeter (side) {
    var result = side*4
    return result
}

function calculateCircleArea (r,operator) {
    if (operator == "r") {
        var result = Math.PI*Math.pow(r,2)
        return result
        }
    else if (operator == "d") {
        var result = Math.PI*Math.pow(r/2,2)
        return result
        }
}

function calculateCircleCircumference (d,operator) {
    if (operator == "d") {
        var result = Math.PI * d
        return result
        }

    else if (operator == "r") {
        var result = Math.PI * 2*d
        return result
        }
    

}

var areaSquare = calculateSquareArea(3)
console.log(areaSquare);

var perimeterSquare = calculateSquarePerimeter(3)
console.log(perimeterSquare);

var circleArea = calculateCircleArea(5,"r")
console.log(circleArea);

var circleCircumference = calculateCircleCircumference(10,"d")
console.log(circleCircumference);


