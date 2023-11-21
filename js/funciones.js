'use strict'

/*
var num1 = document.getElementById('txtVal1').value;
var num2 = document.getElementById('txtVal2').value;
var suma = 0;
function btnSumar(){
    
    suma = parseInt(num1) + parseInt(num2);   
    document.form1.txtRes.value = suma;
}
*/


let btnSum = document.querySelector("#btnSum");
//alert(typeof val1);

btnSum.addEventListener('click', ()=>{
    btnSumar();
});

function btnSumar(){
    var num1 = document.getElementById('txtVal1').value;
    var num2 = document.getElementById('txtVal2').value;
    var suma = 0;
    suma = parseInt(num1) + parseInt(num2);   
    document.form1.txtRes.value = suma;
}

