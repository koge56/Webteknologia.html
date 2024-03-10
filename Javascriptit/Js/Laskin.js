
let numero1 = 10;
let numero3 = 5;

function laske(){

    let numero1 = document.getElementById('numero1').value;
    let numero3 = document.getElementById('numero3').value;
    let operator = document.getElementById('operator').value;
if(operator === '+')
                {
                    document.getElementById('result').value = parseInt(numero1)+parseInt(numero3);
                    console.log("Hello world!");

                }
                
                if(operator === '-')
                {
                    document.getElementById('result').value = numero1-numero3;
                    console.log("Hello world!");

                }
                
                if(operator === '/')
                {
                    document.getElementById('result').value = numero1/numero3;
                    console.log("Hello world!");

                }
                
                if(operator === '*')
                {
                    document.getElementById('result').value = numero1*numero3;
                    console.log("Hello world!");

                }
            }