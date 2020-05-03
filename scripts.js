const calcBtn = document.querySelector('.calc-btn');
const inputField = document.querySelector('.binary-input');

function convertToDecimal(){
    let binaryValue = document.getElementsByClassName('binary-input');
    binaryValue = binaryValue[0].value;
    
    let decimalValue = Number.parseInt(binaryValue, 2);

    let outputDec = document.getElementsByClassName('decimal-output');
    outputDec[0].value = decimalValue;
}

function checkIfBinary(keyPressed){
    if(keyPressed.key != '0' && keyPressed.key != '1'){
        alert("You can only enter a 0 or 1 in this field");
    }
}

inputField.addEventListener('keyup', checkIfBinary);
calcBtn.addEventListener('click', convertToDecimal);