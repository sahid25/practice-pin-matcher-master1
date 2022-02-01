console.log('welcome to ');

function getPin() {
    let randomNumber = Math.random() * 10000;
    let pinNumber = (randomNumber + '').split('.')[0];
    // console.log(pinNumber);
    if (pinNumber.length === 4) {

        let typePin = document.getElementById('pinOutput');
        typePin.value = pinNumber;
    }
    else {
        getPin(); 
    }
}

// matcher 
function getChild(event) {
    let number = event.target.innerText;
    let typeCalcu = document.getElementById('calculatorInput');
    if (isNaN(number)) {
        /// handle clear
        if (number === 'C') {
            typeCalcu.value = '';

        }
    }
    else {
        let previousNumber = typeCalcu.value;
        let newNumber = previousNumber + number;
        typeCalcu.value = newNumber;
    }
};

const submitButton = document.getElementById('pinSubmit').addEventListener('click',function(){
    let pin = document.getElementById('pinOutput').value;
    let matchPin = document.getElementById('calculatorInput').value;
    if(pin === matchPin){
        matchDisplay('block', 'none');
    }
    else {
        matchDisplay('none','block');
reloadAgain();
    }
})

    // Show display correct or incorrect
function matchDisplay(correctStatus,incorrectStatus) {
    const  correct = document.getElementById('correct').style.display = correctStatus;
    const  incorrect = document.getElementById('incorrect').style.display = incorrectStatus;
}
// Reload page
function reloadAgain() {
    window.location.reload();
}