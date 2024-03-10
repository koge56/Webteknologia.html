let pelit_array = [{"name":"Shakki", "src":"images/checkmate-1511866_1280.jpg"}, {"name":"Noppa", "src":"images/dice-1963036_1280.jpg"}, 
{"name":"Ruletti", "src":"images/gambling-2001033_1280.jpg"}];
let index = 0;
window.onload = function(){
document.getElementById("cardimage").src = pelit_array[index].src;
document.getElementById("cardname").innerHTML = pelit_array[index].name;
}
function shownext(){
    index ++;
    document.getElementById("cardimage").src = pelit_array[index].src;
    document.getElementById("cardname").innerHTML = pelit_array[index].name;
    }
function showprev(){
    index --;
    document.getElementById("cardimage").src = pelit_array[index].src;
    document.getElementById("cardname").innerHTML = pelit_array[index].name;
}
function play(){

}