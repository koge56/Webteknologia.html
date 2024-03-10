let address;
let city;
let place;


window.onload = function(){
let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
address = "Yliopistonkatu 36";
city = "Lappeenranta";
city = document.getElementById("cityfield").value = city;
address = document.getElementById("addressfield").value = address;
Init();
dosomethingelse();


}

function myFunction() {
    let address = document.getElementById('addressfield').value;
    let city = document.getElementById("cityfield").value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
     iframeElement.src = place;
}
