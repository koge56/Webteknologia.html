let hinta = 0;
let summa = 0;
let extrat = 0;
let ale = 0;
let Tropicana = 10;
let Perfetta = 12;
let Pepperoni = 13;

function laske() {
    //extrat
    extrat = 0;
    if (document.getElementById('extra1').checked){
        extrat += 1;
    }
    if (document.getElementById('extra2').checked){
        extrat += 1;
    }
    if (document.getElementById('extra3').checked){
        extrat += 1;
    }
    document.getElementById('result').value = summa + extrat - ale;
//asiakkuus
    if (document.getElementById('asiakkuus').checked){
        ale = summa * 0.1;
    } else {
        ale = 0;
    }

    //pizzahinnat
    document.getElementById('result').value = summa + extrat - ale;
    let pizzatyyppi = document.getElementById('pizzatyyppi').value;

    if (pizzatyyppi === 'pizza1') {
        summa = Tropicana;
        document.getElementById('result').value = summa + extrat - ale;
        console.log("tropicana");
    }
    if (pizzatyyppi === 'pizza2') {
        summa = Perfetta;
        document.getElementById('result').value = summa + extrat - ale;
        console.log("perfetta");
    }
    if (pizzatyyppi === 'pizza3') {
        summa = Pepperoni;
        document.getElementById('result').value = summa + extrat - ale;
        console.log("pepperoni");
    }

        //koodi päivittyy tilaa nappulaa painettaessa

};









