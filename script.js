// Seleciona todos os botões de curtir e amei
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function() {
        console.log("Interação com o post detectada");
        
        let contador = botao.querySelector("span");
        
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#ff0000"; // Muda para vermelho ao clicar
        } else {
            contador.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#8932a1"; // Volta para a cor original
        }
    });
});
