// cities 

function rentPriceCalculator_rent_berlin() {
    let berlin = parseInt(document.getElementById("rpc-square-meters-input").value) * 12.32
    document.getElementById("rpc-city").innerHTML = `The rent in Berlin costs ${berlin} euros.`
}

function rentPriceCalculator_rent_munich() {
    let munich = parseInt(document.getElementById("rpc-square-meters-input").value) * 17.71
    document.getElementById("rpc-city").innerHTML = `The rent in Munich costs ${munich} euros.`
}

function rentPriceCalculator_rent_hamburg() {
    let hamburg = parseInt(document.getElementById("rpc-square-meters-input").value) * 11.93
    document.getElementById("rpc-city").innerHTML = `The rent in Hamburg costs ${hamburg} euros.`
}

function rentPriceCalculator_rent_frankfurt() {
    let frankfurt = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Frankfurt costs ${frankfurt} euros.`
}

function rentPriceCalculator_rent_stuttgart() {
    let stuttgart = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Stuttgart costs ${stuttgart} euros.`
}

function rentPriceCalculator_rent_freiburg() {
    let freiburg = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in freiburg costs ${freiburg} euros.`
}

function rentPriceCalculator_rent_mainz() {
    let mainz = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Mainz costs ${mainz} euros.`
}

function rentPriceCalculator_rent_ingolstadt() {
    let ingolstadt = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Ingolstadt costs ${ingolstadt} euros.`
}

function rentPriceCalculator_rent_darmstadt() {
    let frankfurt = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Darmstadt costs ${darmstadt} euros.`
}

function rentPriceCalculator_rent_wiesbaden() {
    let wiesbaden = parseInt(document.getElementById("rpc-square-meters-input").value) * 14
    document.getElementById("rpc-city").innerHTML = `The rent in Wiesbaden costs ${wiesbaden} euros.`
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