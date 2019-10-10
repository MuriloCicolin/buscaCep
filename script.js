const btnCep = document.getElementById('btnCep');
const inputCep = document.getElementById('cep');
const cepCidade = document.getElementById('cidade');
const cepEstado = document.getElementById('estado');
const cepAvenida = document.getElementById('avenida');
const cepBairro = document.getElementById('bairro');


btnCep.addEventListener('click',handleClick);
btnCep.addEventListener('keyup',handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}


function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(resposta => resposta.json())
  .then(body => {
    setTimeout(() => {
    cepCidade.value = body.localidade;
    cepEstado.value = body.uf;
    cepAvenida.value = body.logradouro;
    cepBairro.value = body.bairro;
  }, 1000)
  })
  .catch(erro => {
    alert("Cep Inválido!");
    limparCampos();
  })
}

function limparCampos() {
  cepCidade.value = ("");
  cepEstado.value = ("");
  cepAvenida.value = ("");
  cepBairro.value = ("");
}

