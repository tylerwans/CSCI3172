// Get the current time and hour
let date = new Date();
let hours = date.getHours();
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions





// Create a variable to store your greeting message 
let welcomeMess;





// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM
if (hours < 12 ){
    welcomeMess = "Good Morning!";
}


// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'
else if (hours < 15){
    welcomeMess = "Hey! I think we are in class!";
}



// For any other time (i.e., later than 3PM, we just want to say 'Welcome'
else  {
    welcomeMess = "Welcome!";
}



// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF



// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>

document.getElementById("greeting").innerHTML = welcomeMess;




// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values




// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above

    let a, b;
    

    function getNumbers(){
        a = Number(document.getElementById("num1").value);

        b = Number(document.getElementById("num2").value);

    }
    
 
 



	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	
	// We perform our addition on the two values

    function add(){

        getNumbers();
        let result = a + b;

        alert('The sum of ' + a + ' and ' + b + ' equals to '+ result);
    }

    function subtract(){
        getNumbers();
        let result = a - b;

        alert('The subtraction of ' + a + ' minus ' + b + ' equals to '+ result);
    }

    function multiply(){
        getNumbers();
        let result = a * b;

        alert('The multiplication of ' + a + ' times ' + b + ' equals to '+ result);
    }
	function divide(){
        getNumbers();
        let result = a / b;

        alert('The division of ' + a + ' by ' + b + ' equals to '+ result);
    }

	// Display the result of the calculation
	





