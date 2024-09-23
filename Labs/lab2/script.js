//Create a function to calculate the area of a circle with a radius of 6
function calculateCircleArea() {
const r = 6;
const area = Math.PI * (r * r);
console.log("Area of the circle with a radius of 6: " + area);
}

calculateCircleArea();

//create a function to complete arithemtic functions

console.log("Please select calculate option for arithmetic operation followed by any one operation: add, subtract, multiply, divide. eg: calculate(num1, num2, 'operation');");



function calculate(num1, num2, calc) {

    let result = 0;

    //use if and else if statments to complete calculation for all outcomes
    if (calc === "add") {
        result = num1 + num2;
    } 
    else if (calc === "subtract") {
        result = num1 - num2;
    } 
    else if (calc === "multiply") {
        result = num1 * num2;
    } 
    //cannot divide by 0 
    else if (calc === "divide") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero.";
        }
    } 
    //input for calcultion is wrong
    else {
        result = "Invalid calculation method. Please enter add, subtract, multiply, or divide.";
    }

    //print result

    console.log("The result is: " + result);
}

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("enter second number: "));
const calc = prompt("Enter operation: ");

calculate(num1, num2, calc);


//create a function to calculate area of rectangle with length of 20 and width of 15

function areaOfRectangle() {
    const l = 20;
    const h = 15;
    const area = l * h;
    console.log("The area of the rectangle is " + area);

}

areaOfRectangle();



