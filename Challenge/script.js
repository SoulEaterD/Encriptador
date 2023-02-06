const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//es la funcion que permite codificar el texto
function codificar(stringEncriptada){
    
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){

        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return stringEncriptada;
}

//es la funcion que permite decodificar el texto
function decodificar(stringEncriptada){
    
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){

        if(stringEncriptada.includes(matriz[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return stringEncriptada;
}

function btnEncriptar(){

    const textoEncriptado = codificar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function btnDesencriptar(){

    const textoDesencriptado = decodificar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function btnCopiar(){

    const textoCopiado = document.querySelector(".mensaje");
    textoCopiado.select();
    document.execCommand("copy");

}
