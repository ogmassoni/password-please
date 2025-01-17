function gerarSenha(tamanho, usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos) {
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

  let caracteres = "";
  if (usarMaiusculas) caracteres += maiusculas;
  if (usarMinusculas) caracteres += minusculas;
  if (usarNumeros) caracteres += numeros;
  if (usarSimbolos) caracteres += simbolos;

  const selecionadas = [usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos].filter(Boolean).length;
  if (selecionadas < 3) return "Selecione pelo menos 3 opções!";

  const array = new Uint32Array(tamanho);
  window.crypto.getRandomValues(array);
  return Array.from(array, (num) => caracteres[num % caracteres.length]).join("");
}

function gerarNovaSenha() {
  const tamanho = parseInt(document.getElementById("tamanho-senha").value, 10);
  const usarMaiusculas = document.getElementById("usar-maiusculas").checked;
  const usarMinusculas = document.getElementById("usar-minusculas").checked;
  const usarNumeros = document.getElementById("usar-numeros").checked;
  const usarSimbolos = document.getElementById("usar-simbolos").checked;

  const senha = gerarSenha(tamanho, usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos);
  document.getElementById("senha-gerada").textContent = senha;
}

function copiarSenha() {
  const senhaGerada = document.getElementById("senha-gerada").textContent;
  navigator.clipboard.writeText(senhaGerada).then(() => alert("Senha copiada!"));
}

function atualizarTamanhoSenha() {
  const tamanho = document.getElementById("tamanho-senha").value;
  document.getElementById("valor-tamanho").textContent = tamanho;
}
