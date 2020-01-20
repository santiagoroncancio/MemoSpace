if(navigator.onLine) {
    var array_memoria=[
    'https://cdn.eso.org/images/thumb700x/eso1238a.jpg','https://cdn.eso.org/images/thumb700x/eso1238a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1503a.jpg','https://cdn.eso.org/images/thumb700x/eso1503a.jpg',
    'https://cdn.eso.org/images/thumb700x/potw1822a.jpg','https://cdn.eso.org/images/thumb700x/potw1822a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1237a.jpg','https://cdn.eso.org/images/thumb700x/eso1237a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1802a.jpg','https://cdn.eso.org/images/thumb700x/eso1802a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1733a.jpg','https://cdn.eso.org/images/thumb700x/eso1733a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso0942a.jpg','https://cdn.eso.org/images/thumb700x/eso0942a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso0915a.jpg','https://cdn.eso.org/images/thumb700x/eso0915a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1310a.jpg','https://cdn.eso.org/images/thumb700x/eso1310a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1230a.jpg','https://cdn.eso.org/images/thumb700x/eso1230a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso0644a.jpg','https://cdn.eso.org/images/thumb700x/eso0644a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso0611a.jpg','https://cdn.eso.org/images/thumb700x/eso0611a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1919a.jpg','https://cdn.eso.org/images/thumb700x/eso1919a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1434a.jpg','https://cdn.eso.org/images/thumb700x/eso1434a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1245a.jpg','https://cdn.eso.org/images/thumb700x/eso1245a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso0908a.jpg','https://cdn.eso.org/images/thumb700x/eso0908a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1229a.jpg','https://cdn.eso.org/images/thumb700x/eso1229a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1907g.jpg','https://cdn.eso.org/images/thumb700x/eso1907g.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1028a.jpg','https://cdn.eso.org/images/thumb700x/eso1028a.jpg',
    'https://cdn.eso.org/images/thumb700x/eso1907c.jpg','https://cdn.eso.org/images/thumb700x/eso1907c.jpg'];
} else {
    var array_memoria=['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10','11','11','12','12','13','13','14','14','15','15','16','16','17','17','18','18','19','19','20','20',];
}

    var valor_memoria=[];
    var memoria_carta_ids=[];
    var girada_carta=0;
    Array.prototype.memoria_carta_barajar=function(){
        var i=this.length,j,temp;
        while (--i > 0) {
            j= Math.floor(Math.random() * (i+1));
            temp=this[j];
            this[j]=this[i];
            this[i]=temp;
        }
    }

    function nuevaTabla(){
        movimientos=0;
        girada_carta = 0;
        var output = '';
        array_memoria.memoria_carta_barajar();
        for (var i = 0; i < array_memoria.length; i++) {
           output += '<div id="carta_'+i+'" onclick="girarCartaMemoria(this,\''+array_memoria[i]+'\')"></div>';       
        }
        document.getElementById('table_memoria').innerHTML=output;
        init();
    }

    var movimientos=0;

    function girarCartaMemoria(carta,valor){
        
        if (carta.innerHTML == "" && valor_memoria.length < 2) {
            if(navigator.onLine) {
                carta.innerHTML = " ";
                carta.style.background = 'url("'+valor+'")'; // FONDO DE LA IMAGEN BOCA ARRIBA CON INTERNET
                carta.style.backgroundSize='cover';
            }else{
                carta.innerHTML = valor;
                carta.style.background = '#FFF'; // FONDO DE LA IMAGEN BOCA ARRIBA SIN INTERNET
                carta.style.backgroundSize='cover';
            }
            
            document.getElementById("movimientos").innerHTML =movimientos; 
            if(valor_memoria.length == 0){
                movimientos=movimientos+1;
                if(movimientos==1){ //INICIAR CRONOMETRO
                    cronometrar();
                }
                valor_memoria.push(valor);
                memoria_carta_ids.push(carta.id);
            } else if(valor_memoria.length == 1){
                valor_memoria.push(valor);
                memoria_carta_ids.push(carta.id);
                if(valor_memoria[0] == valor_memoria[1]){
                    girada_carta += 2;
                    // despejando los dos arrays
                    valor_memoria = [];
                    memoria_carta_ids = [];
                    // checkea si la mesa entera esta despejada
                    if(girada_carta == array_memoria.length){
                        parar();
                        var opcion = confirm("Juego terminado en "+document.getElementById("hms").innerHTML+" con "+movimientos+" movimientos.  ¿Desea volver a jugar?");
                            if (opcion == true) {
                                document.getElementById('table_memoria').innerHTML = "";
                                nuevaTabla();
                            } else {
                                location.href="index.html";
                            }
                        
                    }
                    
                }else{
                    function girarAtras(){
                        //las dos cartas se van a girar
                        var carta_1 = document.getElementById(memoria_carta_ids[0]); 
                        var carta_2 = document.getElementById(memoria_carta_ids[1]);
                        carta_1.style.background = 'url(img/logo.png) no-repeat'; //FONDO DE LA IMAGEN BOCA ABAJO
                        carta_1.style.backgroundSize='cover';
                        carta_1.innerHTML = "";
                        carta_2.style.background = 'url(img/logo.png) no-repeat';
                        carta_2.style.backgroundSize='cover';
                        carta_2.innerHTML = "";
                        //despejando los dos arrays
                        valor_memoria = [];
                        memoria_carta_ids = [];
                    }
                    setTimeout(girarAtras,700);
                }
            }
        }
    }






   
function init(){
    document.getElementById("movimientos").innerHTML =movimientos; 
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
}