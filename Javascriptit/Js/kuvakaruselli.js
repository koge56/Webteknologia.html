let pelit_array = [{"name":"Shakki", "src":"images/checkmate-1511866_1280.jpg"}, {"name":"Noppa", "src":"images/dice-1963036_1280.jpg"}, 
{"name":"Ruletti", "src":"images/gambling-2001033_1280.jpg"}];
let intervalId;
let index = 0;
window.onload = function(){
document.getElementById("cardimage").src = pelit_array[index].src;
document.getElementById("cardname").innerHTML = pelit_array[index].name;
}
function shownext() {
    index++;
    if (index === pelit_array.length) {
        index = 0;
    }
    document.getElementById("cardimage").src = pelit_array[index].src;
    document.getElementById("cardname").innerHTML = pelit_array[index].name;
}

function showprev() {
    index--;
    if (index < 0) {
        index = pelit_array.length - 1;
    }
    document.getElementById("cardimage").src = pelit_array[index].src;
    document.getElementById("cardname").innerHTML = pelit_array[index].name;
}

function play() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(shownext, 2000);
    }
}