
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica")
const setas_mudar_cor = document.querySelectorAll("[data-botao-mudar-robo]")
const robo = document.querySelector("#robotron")
const cores = ["amarelo", "branco", "azul", "preto", "rosa", "vermelho"]
let cores_index = 0

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

atualizarImgRobo(cores[cores_index])

controle.forEach((elemento)=> {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
    })
})

setas_mudar_cor.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        mudarCorDoRobo(evento.target)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else
    {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(operacao, peca) {
    estatisticas.forEach((elemento) => {
        if(operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

function mudarCorDoRobo(botao) {
    if(botao.dataset.botaoMudarRobo === "esquerda"){
        cores_index = cores_index - 1
        if(cores_index === -1){
            cores_index = cores.length - 1
        }
    }else{
        cores_index = cores_index + 1
        if(cores_index >= cores.length){
            cores_index = 0
        }
    }

    atualizarImgRobo(cores[cores_index])
}

function atualizarImgRobo(cor){
    robo.src = "img/" + cor + ".png"
}