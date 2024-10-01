//Part A 

function switchColor() {
    const selected = document.getElementById("days");
    const selectedDay = selected.value;
    const container = document.getElementById("partA");

    switch (selectedDay) {
        case 'monday' :
            //AntiqueWhite
            container.style.backgroundColor = '#FAEBD7'
            break;
        case 'tuesday' :
            //Aqua
            container.style.backgroundColor = '#00FFFF'
            break;
        case 'wednesday' :
            //Aquamarine
            container.style.backgroundColor = '#7FFFD4'
            break;
        case 'thursday' :
            //Blue violet
             container.style.backgroundColor = '#8A2BE2'
            break;

        case 'friday' :
            //Blue 
            container.style.backgroundColor = '#0000FF'
            break;
        case 'saturday' :
            //Coral
            container.style.backgroundColor = '#FF7F50'
            break;

        case 'sunday' :
            //Chartreuse
            container.style.backgroundColor = '#7FFF00'
            break;

        
    }   
}

function checkNumber(){
    

    const number = Number(document.getElementById("form-num").value);
    let result1;
    let result2 = "Unknown";
    let result3;

    //check even or odd
    if (number%2 === 0) {
        result1 = "The number entered is an even ";
    }
    else {
        result1 = "The number entered is an odd ";
    }

    if (number < 2){
        result2 = "Number is not prime or composite";
    }
    else {
        let isPrime = true; // Assume it is prime
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break; // break out if number is compliment
            }
        }
        if (isPrime) {
            result2 = "prime and ";
        } else {
            result2 = "composite and ";
        }
    }


    //if statements to check range
    if (number <= 50){
        result3 = "less than 50";
    }
    else if (number > 50 && number <= 75){
        result3 = "greater than 50 and less than or equal to 75";
    }
    else if (number > 75 && number <= 100) {
        result3 = "greater than 75 and less than or equal to 100";
    }
    else {
        result3 = "greater than 100";
    }

    //print results using an alert box
    alert(result1 + result2 + result3);
}