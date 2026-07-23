const contador = document.getElementById("contador");

let numero = 0;

function voltear(card) {
    numero++;
    contador.textContent = numero;

    // Voltear la tarjeta
    card.classList.toggle("volteada");
}