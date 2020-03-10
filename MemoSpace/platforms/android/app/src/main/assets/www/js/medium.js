var cards_num = ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
                '41','42','43','44','45','46','47','48','49','50','51'];

cards_num = cards_num.sort(function () { return Math.random() - 0.5 });

var array_memoria = [];
rev();
function rev() {
    for (var i = 0; i < 30; i = i + 2) {
        array_memoria[i] = 'img/cards/' + cards_num[i] + '.jpg';
        array_memoria[i + 1] = 'img/cards/' + cards_num[i] + '.jpg';
    }
    //alert(array_memoria);
}
var valor_memoria = [];
var memoria_carta_ids = [];
var girada_carta = 0;
Array.prototype.memoria_carta_barajar = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function nuevaTabla() {

    movimientos = 0;
    girada_carta = 0;
    var output = '';
    array_memoria.memoria_carta_barajar();
    for (var i = 0; i < array_memoria.length; i++) {
        output += '<div class="carta" id="carta_' + i + '" onclick="girarCartaMemoria(this,\'' + array_memoria[i] + '\')"></div>';
    }
    document.getElementById('table_memoria').innerHTML = output;
    init();
    //
    //document.getElementById("winban").style.display = "block";
    //mensaje();
    //
}

var movimientos = 0;

function girarCartaMemoria(carta, valor) {

    if (carta.innerHTML == "" && valor_memoria.length < 2) {


        carta.innerHTML = " ";
        carta.style.background = 'url("' + valor + '")'; // FONDO DE LA IMAGEN BOCA ARRIBA CON INTERNET
        carta.style.backgroundSize = '100% 100%';



        document.getElementById("movimientos").innerHTML = movimientos;
        if (valor_memoria.length == 0) {
            movimientos = movimientos + 1;
            if (movimientos == 1) { //INICIAR CRONOMETRO
                cronometrar();
            }
            valor_memoria.push(valor);
            memoria_carta_ids.push(carta.id);
        } else if (valor_memoria.length == 1) {
            valor_memoria.push(valor);
            memoria_carta_ids.push(carta.id);
            if (valor_memoria[0] == valor_memoria[1]) {
                girada_carta += 2;
                // despejando los dos arrays
                valor_memoria = [];
                memoria_carta_ids = [];
                // checkea si la mesa entera esta despejada
                if (girada_carta == array_memoria.length) {
                    parar();
                    document.getElementById("winban").style.display = "block";
                    setTimeout(mensaje, 500);
                }

            } else {
                function girarAtras() {
                    //las dos cartas se van a girar
                    var carta_1 = document.getElementById(memoria_carta_ids[0]);
                    var carta_2 = document.getElementById(memoria_carta_ids[1]);
                    carta_1.style.background = 'url(img/logo.png) no-repeat'; //FONDO DE LA IMAGEN BOCA ABAJO
                    carta_1.style.backgroundSize = '100%';
                    carta_1.innerHTML = "";
                    carta_2.style.background = 'url(img/logo.png) no-repeat';
                    carta_2.style.backgroundSize = '100%';
                    carta_2.innerHTML = "";
                    //despejando los dos arrays
                    valor_memoria = [];
                    memoria_carta_ids = [];
                }
                setTimeout(girarAtras, 700);
            }
        }
    }
}




function mensaje() {
    document.getElementById("winbantexto").style.visibility = "visible";
    document.getElementById("home").style.visibility = "visible";
    document.getElementById("again").style.visibility = "visible";
    document.getElementById("cards").style.visibility = "visible";
    document.getElementById('winbantexto').innerHTML = "Juego terminado en " + document.getElementById("hms").innerHTML + " con " + movimientos + " movimientos.  ¿Desea volver a jugar?";
}



function init() {
    //SELECCIONAR ANIMACION GANADORA
    var count = Object.keys(json.tipos).length;
    var ran = Math.floor(Math.random() * count);
    var seleccion = json.tipos[ran].ban;

    document.getElementById("EdgeID").data = seleccion;
    document.getElementById("winban").style.display = "none";
    document.getElementById("home").style.visibility = "hidden";
    document.getElementById("again").style.visibility = "hidden";
    document.getElementById("cards").style.visibility = "hidden";
    document.getElementById("winbantexto").style.visibility = "hidden";
    document.getElementById("movimientos").innerHTML = movimientos;
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML = "00:00:00";
}
function cronometrar() {
    escribir();
    id = setInterval(escribir, 1000);

}
function escribir() {
    var hAux, mAux, sAux;
    s++;
    if (s > 59) { m++; s = 0; }
    if (m > 59) { h++; m = 0; }
    if (h > 24) { h = 0; }

    if (s < 10) { sAux = "0" + s; } else { sAux = s; }
    if (m < 10) { mAux = "0" + m; } else { mAux = m; }
    if (h < 10) { hAux = "0" + h; } else { hAux = h; }

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux;
}
function parar() {
    clearInterval(id);

}
function reiniciar() {
    clearInterval(id);
    document.getElementById("hms").innerHTML = "00:00:00";
    h = 0; m = 0; s = 0;
}
// REDIRECCIONAR A LA GALERIA DE CARTAS
function cards()
{
    
    localStorage.setItem("tam", 30);
    localStorage.setItem("cards",cards_num);
    location.href = "Cards.html";
}