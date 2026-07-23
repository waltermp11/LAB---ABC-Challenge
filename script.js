const contador = document.getElementById("contador");

let numero = 0;

function voltear(card) {
  
  if (!card.classList.contains("volteada")) {
    card.classList.add("volteada");
    numero++;
    contador.textContent = numero;
  }
}

function mostrarVocales() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const tipo = card.getAttribute("data-tipo");

    if (tipo === "vocal") {
      card.style.display = "flex"; 
    } else {
      card.style.display = "none"; 
    }
  });
}

function mostrarTodas() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.style.display = "flex"; 
  });
}

function reiniciar() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.classList.remove("volteada");
    card.style.display = "flex";
  });

  numero = 0;
  contador.textContent = numero;
}
