function calculate() {

    //get element values, initialize other var
    var num1 = parseInt(document.getElementById("num1").value);

    var num2 = parseInt(document.getElementById("num2").value);

    var calc = document.getElementById("calc").value.toLowerCase();

    var result;

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
        result = "Invalid calculation method. Please enter Add, Subtract, Multiply, or Divide.";
    }

    //print result

    document.getElementById("result").innerText = "The result is: " + result;
}