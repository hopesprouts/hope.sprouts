document.addEventListener('DOMContentLoaded', function () {
    const linhas = document.querySelectorAll('.textins > div'); // Linhas 1, 2, 3
    const novasLinhas = document.querySelectorAll('.depois > div'); // Linhas 4, 5, 6
    const elementos = document.querySelector('.elementos');
    const imgMundo = document.querySelector('.img_mundo'); // Seleciona a imagem
    let index = 0;
    let todasAsLinhasMostradas = false; // Flag para saber se todas as linhas já foram mostradas

    // Mostra a primeira linha inicialmente e aplica o deslocamento para a esquerda
    linhas[index].classList.add('show');
    elementos.classList.add('move-left'); // Desloca para a esquerda

    // Botão "próximo"
    document.getElementById('proximo').addEventListener('click', function () {
        if (!todasAsLinhasMostradas) { // Executa normalmente até todas as linhas serem mostradas
            if (index < linhas.length - 1) {
                // Remove a classe de movimento para a esquerda ao mostrar a segunda linha
                if (index === 0) {
                    elementos.classList.remove('move-left'); // Cancela o deslocamento para a esquerda
                }

                // Avança para a próxima linha (1, 2 ou 3)
                index++;
                linhas[index].classList.add('show');
            } else if (index === linhas.length - 1) {
                // Quando chega na linha 3, oculta as linhas 1, 2, 3 e a imagem
                imgMundo.style.display = 'none'; // Oculta a imagem
                linhas.forEach(line => line.classList.remove('show')); // Oculta as linhas 1, 2 e 3
                elementos.classList.add('move-left2'); // Aplica o deslocamento "move-left2" após a linha 3 sumir
                index++; // Avança para a próxima seção
            } else if (index >= linhas.length && index - linhas.length < novasLinhas.length) {
                // Mostra as novas linhas (4, 5 e 6) uma a uma
                novasLinhas[index - linhas.length].style.display = 'block'; // Mostra a linha 4, 5 ou 6
                index++; // Avança para a próxima linha
            }

            // Verifica se todas as linhas (1 a 6) foram mostradas
            if (index === linhas.length + novasLinhas.length) {
                todasAsLinhasMostradas = true; // Marca que todas as linhas foram exibidas
            }
        } else {
            // Se todas as linhas já foram mostradas, redireciona o usuário
            window.location.href = "/views/exp2_planetaperigo.html";
        }
    });
});
