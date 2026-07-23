const contador = document.getElementById("contador");

let numero = 0;

function voltear(card) {
    // Si la tarjeta NO ha sido volteada todavía
    if (!card.classList.contains("volteada")) {
        card.classList.add("volteada");
        numero++;
        contador.textContent = numero;
    } 
    
}