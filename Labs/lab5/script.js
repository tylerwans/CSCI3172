document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.getElementById('calculateNums').value; 
    const numbers = input.split(',').map(Number); 

    let primeFor = 0;
    let compFor = 0;
    let neitherFor = 0;

    function checkPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true;
    }

    // Using for loop
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number === 1) {
            neitherFor++;
        } else if (checkPrime(number)) {
            primeFor++;
        } else {
            compFor++;
        }
    }

    // Display results 
    document.getElementById('primeFor').textContent = primeFor;
    document.getElementById('compFor').textContent = compFor;
    document.getElementById('neitherFor').textContent = neitherFor;

    
    let primeForE = 0;
    let compForE = 0;
    let neitherForE = 0;

    
    numbers.forEach(number => {
        if (number === 1) {
            neitherForE++;
        } else if (checkPrime(number)) {
            primeForE++;
        } else {
            compForE++;
        }
    });

    // Display results 
    document.getElementById('primeForE').textContent = primeForE;
    document.getElementById('compForE').textContent = compForE;
    document.getElementById('neitherForE').textContent = neitherForE;

    
    let primeMap = 0;
    let compMap = 0;
    let neitherMap = 0;

    // Using map 
    numbers.map(number => {
        if (number === 1) {
            neitherMap++;
        } else if (checkPrime(number)) {
            primeMap++;
        } else {
            compMap++;
        }
    });

    // Display results 
    document.getElementById('primeMap').textContent = primeMap;
    document.getElementById('compMap').textContent = compMap;
    document.getElementById('neitherMap').textContent = neitherMap;
});