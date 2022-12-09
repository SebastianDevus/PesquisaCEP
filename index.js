let botaoPesquisa = null;
let inputCEP = null;
let camposDeExibicao = {
    exibeTudo: null,
    exibeCidadeUF: null,
    exibeLogradouro: null,
    exibeBairro: null,
    exibeComplemento: null
};

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    camposDeExibicao.exibeTudo = document.getElementById("exibeTudo");
    camposDeExibicao.exibeCidadeUF = document.getElementById("exibeCidadeUF");
    camposDeExibicao.exibeLogradouro = document.getElementById("exibeLogradouro");
    camposDeExibicao.exibeBairro = document.getElementById("exibeBairro");
    camposDeExibicao.exibeComplemento = document.getElementById("exibeComplemento");
    botaoPesquisa = document.getElementById("botaoPesquisa");
    inputCEP = document.getElementById("inputCEP");

    inputCEP.addEventListener("keydown", (key) => {
        if (key.keyCode == 13) {
            event.preventDefault();
        }
    });

    botaoPesquisa.addEventListener("click", () => {
        let CEP = inputCEP.value;
        if (CEP.length == 8)
        {
            fazFetch(camposDeExibicao, CEP);
        }
    });
}

async function fazFetch(camposDeExibicao, CEP) {
    let url = `https://api.postmon.com.br/v1/cep/${CEP}`
    let response = await fetch(url);
    let result = await response.json();

    // console.log(result);
    let cidade = result.cidade;
    let estado = result.estado;
    let bairro = result.bairro;
    let logradouro = result.logradouro;
    let complemento = result.complemento;

    if (bairro == "") {
        bairro = "Bairro não incluído"
    }

    if (logradouro == "") {
        logradouro = "Logradouro não incluído"
    }

    if (complemento == "" || complemento == undefined) {
        complemento = "Complemento não incluído"
    }

    camposDeExibicao.exibeCidadeUF.innerText = `${cidade}/${estado}`;
    camposDeExibicao.exibeBairro.innerText = `${bairro}`;
    camposDeExibicao.exibeLogradouro.innerText = `${logradouro}`;
    camposDeExibicao.exibeComplemento.innerText = `${complemento}`;
    camposDeExibicao.exibeTudo.removeAttribute("hidden");
}