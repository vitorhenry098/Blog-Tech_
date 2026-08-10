// Seleciona todos os elementos <button> da página e os guarda na constante 'botoes' como uma lista const botoes document.querySelectorAll("button");
// Passa por cada botão da lista (um por um) para aplicar as regras abaixo botoes.forEach(function (botao) {
// Cria uma variável interna para controlar se O BOTÃO ATUAL foi clicado ou não (começa como falso) let curtiu false;
// Adiciona um "escutador" que aguarda o clique especificamente neste botão botao.addEventListener("click", botaoClicado);
// Define a função que roda toda vez que este botão específico recebe um clique function botaoClicado() {
}
// Exibe uma mensagem no console do navegador apenas para testar se o clique funcionou console.log("fui clicado");
// Procura e seleciona a tag <span> (o número do contador) que está dentro deste botão let texto botao.querySelector("span");
// Se o usuário ainda não tiver clicado neste botão (curtiu é igual a false)
if (curtiu === false) {
texto.textContent++; // Soma +1 ao número atual do contador
curtiu = true;
// Muda o status para true (indicando que agora está "curtido")
// Caso o usuário clique novamente (ou seja, curtiu já era true)
} else {
texto.textContent--;
// Subtrai 1 do número do contador (desfaz a curtida)
curtiu = false;
// Volta o status para false (permitindo curtir de novo depois)
}
});