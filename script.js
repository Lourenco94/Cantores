let json1 = `{
    "id": 1,
    "nome": "Bruno",
    "sobrenome": "Mars",
    "cidade": "Honolulu",
    "pais": "Estados Unidos",
    "imagem": "<img src='img/Bruno Márcio.jpg' width='200px'>",
    "link": "https://pt.wikipedia.org/wiki/Bruno_Mars",
    "id2": 2,
    "nome2": "Juice",
    "sobrenome2": "WRLD",
    "cidade2": "Chicago",
    "pais2": "Estados Unidos",
    "imagem2": "<img src='img/Suco Mundial.webp' width='200px'>",
    "link2": "https://pt.wikipedia.org/wiki/Juice_WRLD",
    "id3": 3,
    "nome3": "Lil",
    "sobrenome3": "Tecca",
    "cidade3": "Nova York",
    "pais3": "Estados Unidos",
    "imagem3": "<img src='img/Lil Tecca.webp' width='200px'>",
    "link3": "https://pt.wikipedia.org/wiki/Lil_Tecca",
    "id4": 4,
    "nome4": "Billie",
    "sobrenome4": "Eilish",
    "cidade4": "Los Angeles",
    "pais4": "Estados Unidos",
    "imagem4": "<img src='img/Billie.jfif' width='200px'>",
    "link4": "https://pt.wikipedia.org/wiki/Billie_Eilish",
    "id5": 5,
    "nome5": "Travis",
    "sobrenome5": "Scott",
    "cidade5": "Houston",
    "pais5": "Estados Unidos",
    "imagem5": "<img src='img/Trevoso.jpg' width='200px'>",
    "link5": "https://pt.wikipedia.org/wiki/Travis_Scott"
}`;

let dados1 = JSON.parse(json1)

let link1 = `<a href="${dados1.link}">Saiba Mais Sobre Bruno Mars</a>`;
let link2 = `<a href="${dados1.link}">Saiba Mais Sobre Juice WRLD</a>`;
let link3 = `<a href="${dados1.link}">Saiba Mais Lil Tecca</a>`;
let link4 = `<a href="${dados1.link}">Saiba Mais Billie Eilish</a>`;
let link5 = `<a href="${dados1.link}">Saiba Mais Travis Scott</a>`;

function valor() {
    let identificador = document.getElementById('valorDigitado').value


if (identificador == dados1.id) {
    document.getElementById('imagem').innerHTML = dados1.imagem
    document.getElementById('nome').innerHTML = dados1.nome
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome
    document.getElementById('cidade').innerHTML = dados1.cidade
    document.getElementById('pais').innerHTML = dados1.pais
    document.getElementById('link').innerHTML = link1
    document.getElementById('erro').innerHTML = ""
} else if (identificador == dados1.id2) {
        document.getElementById('imagem').innerHTML = dados1.imagem2
        document.getElementById('nome').innerHTML = dados1.nome2
        document.getElementById('sobrenome').innerHTML = dados1.sobrenome2
        document.getElementById('cidade').innerHTML = dados1.cidade2
        document.getElementById('pais').innerHTML = dados1.pais2
        document.getElementById('link').innerHTML = link2
        document.getElementById('erro').innerHTML = ""
} else if (identificador == dados1.id3) {
    document.getElementById('imagem').innerHTML = dados1.imagem3
    document.getElementById('nome').innerHTML = dados1.nome3
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome3
    document.getElementById('cidade').innerHTML = dados1.cidade3
    document.getElementById('pais').innerHTML = dados1.pais3
    document.getElementById('link').innerHTML = link3
    document.getElementById('erro').innerHTML = ""
} else if (identificador == dados1.id4) {
    document.getElementById('imagem').innerHTML = dados1.imagem4
    document.getElementById('nome').innerHTML = dados1.nome4
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome4
    document.getElementById('cidade').innerHTML = dados1.cidade4
    document.getElementById('pais').innerHTML = dados1.pais4
    document.getElementById('link').innerHTML = link4
    document.getElementById('erro').innerHTML = ""
} else if (identificador == dados1.id5) {
        document.getElementById('imagem').innerHTML = dados1.imagem5
        document.getElementById('nome').innerHTML = dados1.nome5
        document.getElementById('sobrenome').innerHTML = dados1.sobrenome5
        document.getElementById('cidade').innerHTML = dados1.cidade5
        document.getElementById('pais').innerHTML = dados1.pais5
        document.getElementById('link').innerHTML = link5
        document.getElementById('erro').innerHTML = ""
} else {
    document.getElementById('erro').innerHTML = "Registro Inválido"
}
}




console.log(dados1)