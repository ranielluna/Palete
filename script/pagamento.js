// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o botão que abre o modal
var btnFinalizarPagamento = document.querySelector(".ir");

// Obtém o elemento de conteúdo do modal
var modalContent = document.querySelector(".modal-content");

// Obtém a imagem dentro do modal
var modalImage = document.querySelector(".modal-content img");

// Função para abrir o modal
function openModal() {
  // Define as dimensões desejadas e a posição
  var modalWidth = 500; // Novo valor de largura
  var modalHeight = 500; // Novo valor de altura
  var leftPosition = 50; // Nova posição à esquerda em percentual
  var topPosition = 60; // Nova posição superior em percentual
  var paddingSize = 30; // Novo valor para o padding
  var imageSize = 200; // Novo tamanho da imagem

  modal.style.width = modalWidth + "px";
  modal.style.height = modalHeight + "px";
  modal.style.top = topPosition + "%";
  modal.style.left = leftPosition + "%";
  modal.style.marginTop = -modalHeight / 2 + "px";
  modal.style.marginLeft = -modalWidth / 2 + "px";

  modalContent.style.padding = paddingSize + "px";

  modalImage.style.width = imageSize + "px";
  modalImage.style.height = imageSize + "px";
  modalImage.style.display = "block"; // Garante que a imagem seja exibida
  modalImage.style.margin = "auto"; // Centraliza a imagem

  modal.style.display = "block";

  // Ajusta o font-size e o alinhamento do texto dinamicamente
  var fontSize = 18; // Novo valor para o font-size
  modalContent.style.fontSize = fontSize + "px";
  modalContent.style.textAlign = "center";
}

// Quando o usuário clica no botão, chama a função e abre o modal
btnFinalizarPagamento.onclick = function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  openModal();
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
