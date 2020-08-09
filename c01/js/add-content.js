var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
    greeting = 'Bonne Nuit !';
} else if (hourNow > 12) {
    greetinng = 'Bonne Soir !';
} else if (hourNow > 0) {
    greeting = 'Bonjour !';
} else {
    greeting = 'Bievenue !';
}

document.write('<h3> + greeting + </h3>');