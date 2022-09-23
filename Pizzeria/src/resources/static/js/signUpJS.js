var i = 1;
function sendData(pws) {
    var val1 = document.getElementById("P1").value;
    var val2 = document.getElementById("P2").value;
    var val3 = document.getElementById("P3").value;
    var val4 = document.getElementById("P4").value;
    
    // alert(val1);
    // document.write("Usted pidio: Pan " + val1 + " con una porcion de " + val2 + ", con " + val3 + " y con " + val4);

    addElemento("Pedido #"+i+": usted pidio " + val1 + " con " + val2 + ", " + val3 + " y " + val4)
    i = i + 1;
}

function addElemento(texto) {
    var capa = document.getElementById("capa");
    var h1 = document.createElement("h2");
    h1.innerHTML = texto;
    capa.appendChild(h1);
}
