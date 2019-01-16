// general formula

const rentPriceCalculator_calculate = (city, PricePerSquareMeter) => {
    let rent = parseInt(document.getElementById("rpc-square-meters-input").value) * PricePerSquareMeter
    rent = rent.toFixed(2).replace('.', ',')
    let squareMeter = parseInt(document.getElementById("rpc-square-meters-input").value)
    document.getElementById("rpc-city").innerHTML = `The rent for a ${squareMeter} square meter apartment in ${city} costs about ${rent} euros.`
}


// cities 

const rentPriceCalculator_berlin = () => {
    rentPriceCalculator_calculate("Berlin", 12.32)
}
const rentPriceCalculator_munich = () => {
    rentPriceCalculator_calculate("Munich", 17.71)
}
const rentPriceCalculator_hamburg = () => {
    rentPriceCalculator_calculate("Hamburg", 11.93)
}
const rentPriceCalculator_frankfurt = () => {
    rentPriceCalculator_calculate("Frankfurt", 14.00)
}
const rentPriceCalculator_stuttgart = () => {
    rentPriceCalculator_calculate("Stuttgart", 13.70)
}
const rentPriceCalculator_freiburg = () => {
    rentPriceCalculator_calculate("Berlin", 12.32)
}
const rentPriceCalculator_mainz = () => {
    rentPriceCalculator_calculate("Mainz", 12.10)
}
const rentPriceCalculator_ingolstadt = () => {
    rentPriceCalculator_calculate("Ingolstadt", 12.02)
}
const rentPriceCalculator_darmstadt = () => {
    rentPriceCalculator_calculate("Darmstadt", 11.97)
}
const rentPriceCalculator_wiesbaden = () => {
    rentPriceCalculator_calculate("Wiesbaden", 11.97)
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
