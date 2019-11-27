var array_memoria=['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
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
        girada_carta = 0;
        var output = '';
        array_memoria.memoria_carta_barajar();
        for (var i = 0; i < array_memoria.length; i++) {
           output += '<div id="carta_'+i+'" onclick="girarCartaMemoria(this,\''+array_memoria[i]+'\')"></div>';
        }
        document.getElementById('table_memoria').innerHTML=output;
    }

    function girarCartaMemoria(carta,valor){
        if (carta.innerHTML == "" && valor_memoria.length < 2) {
            carta.style.background = '#FFF'; // FONDO DE LA IMAGEN BOCA ARRIBA
            carta.innerHTML = valor;
            if(valor_memoria.length == 0){
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
                        alert("Juego Terminado");
                        document.getElementById('table_memoria').innerHTML = "";
                        nuevaTabla;
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