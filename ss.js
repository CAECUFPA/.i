const API_URL = "https://script.google.com/macros/s/AKfycbzPzeqABuPHrsR6WvlUmZiwVKsrm5OoxgAt0iwDd2jgrv0YEjojo3FLEv80_jPYerg/exec";

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

    // Atualiza horário
    const agora = new Date();
    document.getElementById("ultima-atualizacao").textContent =
      "Última atualização: " + agora.toLocaleTimeString("pt-BR");

  } catch (erro) {
    document.getElementById("resultado").innerHTML = "Erro ao carregar os dados.";
    console.error("Erro ao buscar dados:", erro);
  }
}

exibirValores(); // primeira chamada
setInterval(exibirValores, 300000); // a cada 5 minutos (300.000 ms)
