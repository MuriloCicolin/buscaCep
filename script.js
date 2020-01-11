const btnCep = document.getElementById('btnCep');
const inputCep = document.getElementById('cep');
const cepCidade = document.getElementById('cidade');
const cepEstado = document.getElementById('estado');
const cepAvenida = document.getElementById('avenida');
const cepBairro = document.getElementById('bairro');
const body = document.querySelector('.container');


btnCep.addEventListener('click',handleClick);


function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  cepCidade.value = 'Buscando...';
  cepEstado.value = 'Buscando...';
  cepAvenida.value = 'Buscando...';
  cepBairro.value = 'Buscando..';
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
    inputCep.value = "";
    if(cepCidade.value === 'undefined') {
      cepCidade.value = 'Não encontrado';
      cepEstado.value = 'Não encontrado';
      cepAvenida.value = 'Não encontrado';
      cepBairro.value = 'Não encontrado';
    }
  }, 500)
  })
  .catch(erro => {
    alert("Cep Inválido!");
    inputCep.value = '';
    limparCampos();
  })
}

function limparCampos() {
  cepCidade.value = ("");
  cepEstado.value = ("");
  cepAvenida.value = ("");
  cepBairro.value = ("");
}


