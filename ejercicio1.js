window.onload = function(){
    const boton = document.getElementById("boton");
    boton.addEventListener("click", abrirVentana);
}

function abrirVentana(){
    let mensaje = document.getElementById("mensaje").value;
    let ventanaNueva = window.open("", "Nueva Ventana", "width=400 , height=200");
    
    // Mostramos el mensaje enviado
    texto = ventanaNueva.document.createElement("p");
    texto.textContent = "El mensaje enviado es: " + mensaje;
    ventanaNueva.document.body.appendChild(texto);

    // Mostramos las medidas de la ventana
    setTimeout(function(){
    texto = ventanaNueva.document.createElement("p");
    texto.textContent = "El tamaño de la ventana es: " + ventanaNueva.innerWidth + "x" + ventanaNueva.innerHeight;
    ventanaNueva.document.body.appendChild(texto);}, 100);

    // Enviamos el aviso de que la ventana se ha cerrado
    ventanaNueva.addEventListener("unload", function(){
        document.getElementById("cierreVentana").innerHTML = "Se ha cerrado la ventana";
    });
}