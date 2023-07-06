curtirPortifolio();

function curtirPortifolio() {
  // Seletor para os botões de curtir
  const curtidaBotao = document.querySelectorAll(".btn-like");

  // Verificar o estado de curtida armazenado no localStorage e atualizar o contador de curtidas
  // o forEach é um método que percorre cada elemento do array
  curtidaBotao.forEach((button) => {
    const projectId = button.id;
    const ehFavoritado = localStorage.getItem(projectId);

    if (ehFavoritado === "true") {
      button.classList.add("liked");
      const likeCount = button.querySelector(".like-count");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });

  // Manipulador de eventos para cada botão de curtir
  curtidaBotao.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.id;
      const ehFavoritado = button.classList.contains("liked");

      // Atualizar o contador de curtidas
      const likeCount = button.querySelector(".like-count");
      let count = parseInt(likeCount.textContent);

      if (ehFavoritado) {
        count--;
        button.classList.remove("liked");
        localStorage.setItem(projectId, "false");
      } else {
        count++;
        button.classList.add("liked");
        localStorage.setItem(projectId, "true");
      }

      likeCount.textContent = count;
    });
  });
}

