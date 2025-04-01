function escolherJogo(jogo) {
    jogoSelecionado = jogo;
    document.getElementById("tela-escolha").style.display = "none";
    document.getElementById("tela-conversao").style.display = "flex";
    
    // Limpar valores anteriores
    document.getElementById("quantidade").value = ""; // Limpa o campo de entrada
    document.getElementById("resultado").innerText = "";

    // Adicionando o nome da moeda selecionada ao texto
    let nomeMoeda = jogoSelecionado === "Fortnite" ? "V-Bucks" :
                    jogoSelecionado === "Minecraft" ? "Minecoins" :
                    jogoSelecionado === "Roblox" ? "Robux" : "";

    document.getElementById("moeda-selecionada").innerText = "Converta " + nomeMoeda + " para Real";

    // Colocando o foco automaticamente no campo de entrada para que o usuário possa digitar diretamente
    document.getElementById("quantidade").focus();
}
