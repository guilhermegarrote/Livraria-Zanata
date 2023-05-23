// Seleciona a div da área colapsável
var navbarCollapse = document.getElementById("navbarSupportedContent");

// Função para alternar a exibição da área colapsável
function toggleNavbar() {
  if (navbarCollapse.style.display === "none") {
    navbarCollapse.style.display = "block";
  } else {
    navbarCollapse.style.display = "none";
  }
}

// Exemplo de evento que dispara a função ao clicar em um botão
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleNavbar);