var num = 11;
var num1 = 12;
var num2 = 13;
var numdefault=10;
//level-8
if (num2<numdefault) {
    console.log(`${num2} is smaller than determined value : ${numdefault}`)
}

else if (num2==numdefault) {
    console.log(`${num2} is equal with determined value : ${numdefault}`)
}

else {
    console.log(`${num2} is bigger than determined value : ${numdefault}`)
}

//level-9
if (num>num1) {
    console.log(`${num} is bigger than ${num1}`);
}
else if (num<num1) {
    console.log(`${num} is smaller than ${num1}`);
}
else {
    console.log(`${num} is equal with ${num1}`);
}

//level-10
var conditionnum = `The number ${num} is ` + (num<num1 ? 'smaller' : 'bigger') + ` than ${num1}`;
console.log(conditionnum)

//level-11
var comparisonnum = 3
var conditionnum1 = 10>=comparisonnum && comparisonnum>=5
var conditionnum2 = comparisonnum>2
console.log(conditionnum1)
console.log(conditionnum2)

//level-12

function process (par1, par2) {
    var con = par1>=par2
    if (con === true) {
        console.log(`${par1} is bigger than ${par2} `)
    }
    else {
        console.log(`${par1} is smaller/equal than ${par2} `)
    }
}

process(1,2)

//level-13

function randomnum (min,max) {
    var resultnum =Math.floor(Math.random() * (max-min)) + min
    console.log(resultnum)
}
randomnum(0,10)

