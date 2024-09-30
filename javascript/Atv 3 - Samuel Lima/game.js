const rodadaDiv = document.querySelector(".divQuadroMaior");
const resetButton = document.querySelector(".reset");
const divQuadros = document.querySelectorAll(".divQuadro");

let playerX = localStorage.getItem("playerX") || "X";
let playerO = localStorage.getItem("playerO") || "O";
let playerAtual = playerX;
let rodadas = 0;

let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function rodada() {
    rodadaDiv.innerHTML = `Rodada do ${playerAtual}`;
}

function inputPlayer(event) {
    if (rodadas < 9) {
        const target = event.target;
        if (!target.innerHTML) {
            target.innerHTML = (playerAtual === playerX) ? 'X' : 'O';
            rodadas++;
            if (checkWinner()) {
                rodadaDiv.innerHTML = `Jogador ${playerAtual} venceu! Clique em reiniciar para um novo jogo!`;
                desativarCliques();
            } else if (rodadas === 9) {
                rodadaDiv.innerHTML = 'Empate! Clique em reiniciar para um novo jogo!';
            } else {
                playerAtual = (playerAtual === playerX) ? playerO : playerX;
                rodada();
            }
        }
    }
}


function checkWinner() {
    return conditions.some(condition => {
        const [a, b, c] = condition;
        return (
            divQuadros[a].innerHTML &&
            divQuadros[a].innerHTML === divQuadros[b].innerHTML &&
            divQuadros[a].innerHTML === divQuadros[c].innerHTML
        );
    });
}

function desativarCliques() {
    divQuadros.forEach((item) => {
        item.removeEventListener("click", inputPlayer);
    });
}

function resetGame() {
    divQuadros.forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", inputPlayer);
    });
    rodadas = 0;
    playerAtual = playerX;
    rodada();
}

divQuadros.forEach((item) => {
    item.addEventListener("click", inputPlayer);
});

resetButton.addEventListener("click", resetGame);

rodada();
