//Create a functionto return a random number in between 2 vaues
function returnRandom(){
    const max = 10;
    const min = 1;
    //get a random value in between 1 and 10, then round it so it is not a folating point value
    const random = Math.round(Math.random() * (max - min) + min);
    //print the outcome
    console.log("This is a random number between 1 and 10: " + random);
}

returnRandom()





//Create a function to calculate the area of a circle with a radius of 6
function calculateCircleArea() {
    const r = 6;
    //area is PI * r squared
    const area = Math.PI * (r * r);
    //print
    console.log("Area of the circle with a radius of 6: " + area);
    }
    
    calculateCircleArea();