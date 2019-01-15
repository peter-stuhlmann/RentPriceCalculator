// cities 

function rentPriceCalculator_rent_berlin() {
    let berlin = parseInt(document.getElementById("rpc-square-meters-input").value) * 12.32
    let rent = berlin.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Berlin costs about ${rent} euros.`
}

function rentPriceCalculator_rent_munich() {
    let munich = parseInt(document.getElementById("rpc-square-meters-input").value) * 17.71
    let rent = munich.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Munich costs about ${rent} euros.`
}

function rentPriceCalculator_rent_hamburg() {
    let hamburg = parseInt(document.getElementById("rpc-square-meters-input").value) * 11.93
    let rent = hamburg.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Hamburg costs about ${rent} euros.`
}

function rentPriceCalculator_rent_frankfurt() {
    let frankfurt = parseInt(document.getElementById("rpc-square-meters-input").value) * 14.00
    let rent = frankfurt.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Frankfurt costs about ${rent} euros.`
}

function rentPriceCalculator_rent_stuttgart() {
    let stuttgart = parseInt(document.getElementById("rpc-square-meters-input").value) * 13.70
    let rent = stuttgart.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Stuttgart costs about ${rent} euros.`
}

function rentPriceCalculator_rent_freiburg() {
    let freiburg = parseInt(document.getElementById("rpc-square-meters-input").value) * 12.11
    let rent = freiburg.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in freiburg costs about ${rent} euros.`
}

function rentPriceCalculator_rent_mainz() {
    let mainz = parseInt(document.getElementById("rpc-square-meters-input").value) * 12.10
    let rent = mainz.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Mainz costs about ${rent} euros.`
}

function rentPriceCalculator_rent_ingolstadt() {
    let ingolstadt = parseInt(document.getElementById("rpc-square-meters-input").value) * 12.02
    let rent = ingolstadt.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Ingolstadt costs about ${rent} euros.`
}

function rentPriceCalculator_rent_darmstadt() {
    let darmstadt = parseInt(document.getElementById("rpc-square-meters-input").value) * 11.97
    let rent = darmstadt.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Darmstadt costs about ${rent} euros.`
}

function rentPriceCalculator_rent_wiesbaden() {
    let wiesbaden = parseInt(document.getElementById("rpc-square-meters-input").value) * 11.97
    let rent = wiesbaden.toFixed(2).replace('.', ',')
    document.getElementById("rpc-city").innerHTML = `The rent in Wiesbaden costs about ${rent} euros.`
}


// click ... 

document.querySelector('#rpc-berlin').addEventListener('click', rentPriceCalculator_rent_berlin);
document.querySelector('#rpc-munich').addEventListener('click', rentPriceCalculator_rent_munich);
document.querySelector('#rpc-hamburg').addEventListener('click', rentPriceCalculator_rent_hamburg);
document.querySelector('#rpc-frankfurt').addEventListener('click', rentPriceCalculator_rent_frankfurt);
document.querySelector('#rpc-stuttgart').addEventListener('click', rentPriceCalculator_rent_stuttgart);
document.querySelector('#rpc-freiburg').addEventListener('click', rentPriceCalculator_rent_freiburg);
document.querySelector('#rpc-mainz').addEventListener('click', rentPriceCalculator_rent_mainz);
document.querySelector('#rpc-ingolstadt').addEventListener('click', rentPriceCalculator_rent_ingolstadt);
document.querySelector('#rpc-darmstadt').addEventListener('click', rentPriceCalculator_rent_darmstadt);
document.querySelector('#rpc-wiesbaden').addEventListener('click', rentPriceCalculator_rent_wiesbaden);
