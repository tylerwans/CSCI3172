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