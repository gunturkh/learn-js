//DOM FUNCTIONS



//level-17
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
var calcresult = calculator(3356,3,"%")
console.log(calcresult)

//level-18-19
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

function calculateCubeArea (side) {
    var result = 6*calculateSquareArea(side)
    return result
}

function calculateCubeVolume(side) {
    var result = Math.pow(side,3)
    return result
}

function calculateCylinderArea (r,h) {
    var result = 2*Math.PI*r*(h+r)
    return result
}

function calculateCylinderVolume (r,h) {
    var result = Math.PI*Math.pow(r,2)*h
    return result
}





var areaSquare = calculateSquareArea(3)
var perimeterSquare = calculateSquarePerimeter(3)
var circleArea = calculateCircleArea(5,"r")
var circleCircumference = calculateCircleCircumference(10,"d")
var cubeArea = calculateCubeArea(10)
var cubeVolume = calculateCubeVolume(10)
var cylinderArea = calculateCylinderArea(10,20)
var cylinderVolume = calculateCylinderVolume(10,20)

console.log(areaSquare)
console.log(perimeterSquare)
console.log(circleArea)
console.log(circleCircumference)
console.log(cubeArea)
console.log(cubeVolume)
console.log(cylinderArea)
console.log(cylinderVolume)



