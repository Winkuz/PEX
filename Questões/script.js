document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    const scoreElement = document.getElementById("score");
    const respostas = document.querySelectorAll(".Pergunta, .Resposta");
    const respostasMarcadas = new Set(); // Conjunto para armazenar respostas já clicadas

    respostas.forEach(opcao => {
        opcao.addEventListener("click", function () {
            if (respostasMarcadas.has(this)) {
                alert("Você já respondeu esta pergunta. Não é possível contabilizar duas vezes!");
                return;
            }

            respostasMarcadas.add(this); // Adiciona a resposta ao conjunto de respostas já marcadas
            
            if (this.classList.contains("Resposta")) {
                this.style.color = "green";
                score += 10;
                scoreElement.textContent = score;
            } else {
                alert("Resposta errada, tente outra!");
            }
        });
    });
});
