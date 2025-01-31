

let NumeroSecreto = 0;

let Intentos =0;
let NumerosSorteados =[];
let NumeroMaximo=10;


function AsiganrTexto(elemento,texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
    

}


function VerificarIntento(){
   let NumeroDelUsuario = parseInt(document.getElementById(`ValorUsuario`).value);
  
   
  if (NumeroDelUsuario === NumeroSecreto){
     AsiganrTexto('p',`Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
     
   }

   else{
    // EL USUARIO NO ACERTO
   if (NumeroDelUsuario > NumeroSecreto) {
    AsiganrTexto (`p`,`!!El Numero Secreto es  Menor¡¡`);
    
   }

   else{
    AsiganrTexto (`p`,`!!El Numero Secreto es  Mayor¡¡`);
   }
   Intentos++;
   LimpiarCaja();
   }


    return;
}

function LimpiarCaja(params) {
document.querySelector('#ValorUsuario').value='';
  
    
}

function CondicionesInicial() {
    AsiganrTexto(`h1`,`Juego del numero secreto`);
    AsiganrTexto(`p`,`Escoge un Numero del 1 al ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos=1;

// function condicionesIniciales() {
    // asignarTextoElemento('h1','Juego del número secreto!');
    // asignarTextoElemento('p',`Indica un número del 1 al 10`);
    // numeroSecreto = generarNumeroSecreto();
    // intentos = 1;
    // 
    
}

function GenerarNumeroSecreto() {

    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    // si el numero generado esta incluido en la lista se hace una operacion y si no se hace una operacion diferente
    console.log(NumeroGenerado);
    console.log(NumerosSorteados);

    if (NumerosSorteados.length == NumeroMaximo) {

        AsiganrTexto('p', 'Ya se sortearon todos los números');
        return null
        
    } else {
        if (NumerosSorteados.includes(NumeroGenerado)) {

            return GenerarNumeroSecreto();
            
        } else {
            NumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
            
        }
      
    
        
    }
    
    
}

function ReiniciarJuego() {
    // Limpiar la caja
    LimpiarCaja();

    // indicar mensaje de inicio
    // generar numero aleatorio
    // Intentos
    CondicionesInicial();

    
   

    // Desabilitar el boton de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}
CondicionesInicial();
