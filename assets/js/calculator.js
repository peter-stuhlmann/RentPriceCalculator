// general formula

function rentPriceCalculator_calculate(city, PricePerSquareMeter) {
    let GeneralRent = parseInt(document.getElementById("rpc-square-meters-input").value) * PricePerSquareMeter
    GeneralRent = GeneralRent.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in ${city} costs about ${GeneralRent} euros.`
}


// cities 

function rentPriceCalculator_berlin() {
    let rent = rentPriceCalculator_calculate("Berlin", 12.32)
}

function rentPriceCalculator_munich() {
    let rent = rentPriceCalculator_calculate("Munich", 17.71)
}

function rentPriceCalculator_hamburg() {
    let rent = rentPriceCalculator_calculate("Hamburg", 11.93)
}

function rentPriceCalculator_frankfurt() {
    let rent = rentPriceCalculator_calculate("Frankfurt", 14.00)
}

function rentPriceCalculator_stuttgart() {
    let rent = rentPriceCalculator_calculate("Stuttgart", 13.70)
}

function rentPriceCalculator_freiburg() {
    let rent = rentPriceCalculator_calculate("Berlin", 12.32)
}

function rentPriceCalculator_mainz() {
    let rent = rentPriceCalculator_calculate("Mainz", 12.10)
}

function rentPriceCalculator_ingolstadt() {
    let rent = rentPriceCalculator_calculate("Ingolstadt", 12.02)
}

function rentPriceCalculator_darmstadt() {
    let rent = rentPriceCalculator_calculate("Darmstadt", 11.97)
}

function rentPriceCalculator_wiesbaden() {
    let rent = rentPriceCalculator_calculate("Wiesbaden", 11.97)
}

// click ... 

document.querySelector('#rpc-berlin').addEventListener('click', rentPriceCalculator_berlin);
document.querySelector('#rpc-munich').addEventListener('click', rentPriceCalculator_munich);
document.querySelector('#rpc-hamburg').addEventListener('click', rentPriceCalculator_hamburg);
document.querySelector('#rpc-frankfurt').addEventListener('click', rentPriceCalculator_frankfurt);
document.querySelector('#rpc-stuttgart').addEventListener('click', rentPriceCalculator_stuttgart);
document.querySelector('#rpc-freiburg').addEventListener('click', rentPriceCalculator_freiburg);
document.querySelector('#rpc-mainz').addEventListener('click', rentPriceCalculator_mainz);
document.querySelector('#rpc-ingolstadt').addEventListener('click', rentPriceCalculator_ingolstadt);
document.querySelector('#rpc-darmstadt').addEventListener('click', rentPriceCalculator_darmstadt);
document.querySelector('#rpc-wiesbaden').addEventListener('click', rentPriceCalculator_wiesbaden);
