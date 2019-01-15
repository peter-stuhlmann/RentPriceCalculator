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


// click ... 

document.querySelector('#rpc-berlin').addEventListener('click', rentPriceCalculator_rent_berlin);
document.querySelector('#rpc-munich').addEventListener('click', rentPriceCalculator_rent_munich);
document.querySelector('#rpc-hamburg').addEventListener('click', rentPriceCalculator_rent_hamburg);
document.querySelector('#rpc-frankfurt').addEventListener('click', rentPriceCalculator_rent_frankfurt);