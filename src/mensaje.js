
// mensaje de whatssapp
const enviarMensaje =() => {
    var win=window.open(`https://wa.me/2212808270?text=Hola%20ya%20realice%20mi%20pedido`, 'blank');
}
const pedidoListo = document.getElementById('send');
pedidoListo.addEventListener('click', enviarMensaje);
pedidoListo.addEventListener('click', () => {
    //creacion de la captura de pantalla.
    html2canvas(productos).then(function(canvas) {
        let enlace = document.createElement('a');
        enlace.download = "Captura de pagina web.png";
        enlace.href = canvas.toDataURL('/imagenPrueba.png');
        // enlace.click();
        // contenedorCanvas.appendChild(canvas);
    });
});
