//Create a functionto return a random number in between 2 vaues
function returnRandom(){
    const max = 10;
    const min = 1;
    const random = Math.round(Math.random() * (max - min) + min);



    console.log("This is a random number between 1 and 10: " + random);
}

returnRandom()





//Create a function to calculate the area of a circle with a radius of 6
function calculateCircleArea() {
    const r = 6;
    const area = Math.PI * (r * r);
    console.log("Area of the circle with a radius of 6: " + area);
    }
    
    calculateCircleArea();