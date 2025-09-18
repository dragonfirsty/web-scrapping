// Objetivo pegar todos os jogos de console do gamepass e ordenar em ordem alphabetica
// depois fazer isso com os de pc


// site console https://www.xbox.com/pt-br/xbox-game-pass/games



//primeiro pego todos as ancoras que contem na parte do gamepass do site do xbox
let arr = document.querySelectorAll(".gameDivLink")
//com isso tenho todos os nodes de ancora

//Crio o arr de objetos contendo a img e o nome do jogo
let objArr = []
//Crio um loop para percorrer cada um dos elementos do arr inicial
//Instancio um obj dentro do loop pego as variaves src do img e o innerhtml do h3
//atribuo elas a suas respectivas chaves
//Tive que fazer um ternario porque por algum motivo alguns cards tem um strong como child
for(let i = 0; i < arr.length;i++){
    let obj = {}
    obj.img = arr[i].childNodes[0].childNodes[0].src
    
    obj.name = arr[i].childNodes[1].childNodes[0].innerHTML === undefined?  arr[i].childNodes[2].childNodes[0].innerHTML : arr[i].childNodes[1].childNodes[0].innerHTML
    obj.name.toUpperCase()
    objArr.push(obj)
}
//Agora uso o metodo sort com uma callback para poder comparar os nomes dos objetos do array para poder deixar em ordem alphabetica
objArr.sort( (a,b) =>{
    const nameA = a.name
    const nameB = b.name
    if(nameA < nameB){
        return -1
    }
    if(nameA > nameB){
        return 1
    }
    return 0
})
//Finalizando ao chamar o array de obj e possivel ver que ele esta em ordem alphabetica

//Segundo desafio usar esses dados para criar uma lista no html dos jogos do gamepass em ordem alphabetica
let body = document.querySelector("body")

for(let i = 0;i<objArr.length;i++){
    let card = document.createElement("div")
    card.className = "Card-Game"
    let img = document.createElement("img")
    img.setAttribute("href",objArr.src)
    img.setAttribute("alt",)
}
