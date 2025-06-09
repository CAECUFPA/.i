const API_URL = "https://script.google.com/macros/s/AKfycbxxQZnI8h7dffH6683uk6Y2gGBg4rRIAOP1VcNXW_Pf1GUEvQTY0GduZ_fo-5DRj91V/exec";

async function exibirValores() {
  try {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();

    // Formatações
    const entradas = parseFloat(dados.entradas).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const saidas = parseFloat(dados.saidas).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const saldo = parseFloat(dados.saldo).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    // Atualiza HTML
    document.getElementById("entradas").textContent = entradas;
    document.getElementById("saidas").textContent = saidas;
    document.getElementById("saldo").textContent = saldo;

  } catch (erro) {
    document.getElementById("resultado").innerHTML = "Erro ao carregar os dados.";
    console.error("Erro ao buscar dados:", erro);
  }
}


exibirValores();
setInterval(buscarDados, 300000); // 5 minutos = 300000 ms
