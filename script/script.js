"use strict";

function removeAtivo() {
  botaoBalanca.classList.remove("ativo");
  botaoBritagem.classList.remove("ativo");
}

function marcarBotaoAtual() {
  let currentPage = window.location.pathname;
  currentPage = currentPage.replace(".html", "").substring(1);

  let botaoBalanca = document.getElementById("botao-balanca");
  let botaoBritagem = document.getElementById("botao-britagem");

  if (currentPage === "index") {
    botaoBalanca.classList.add("ativo");
  } else if (currentPage === "britagem") {
    botaoBritagem.classList.add("ativo");
  }
}

document.addEventListener("DOMContentLoaded", marcarBotaoAtual);
