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

  } catch (erro) {
    document.getElementById("resultado").innerHTML = "Erro ao carregar os dados.";
    console.error("Erro ao buscar dados:", erro);
  }
}

exibirValores();
