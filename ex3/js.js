let listaCores = {}

function adicionarCor() {
    let cor = document.getElementById("cor").value
    let cores = document.getElementById("cores")
    if (cor) {
        document.getElementById("cor").value = ""
        let aux = document.createElement("div")
        aux.style.backgroundColor = cor
        document.body.appendChild(aux)
        let rgb = window.getComputedStyle(aux).backgroundColor
        document.body.removeChild(aux)

        let rgbValues = rgb.match(/\d+/g).map(Number)
        let hexcode = "#" + rgbValues.slice(0, 3).map(x => x.toString(16).padStart(2, "0")).join("")

        if(cor != "black" && hexcode == "#000000") {
            hexcode = "Código de cor não encontrado!"
        }

        if(cor == "black") {
            corLetra = "white"
        }
        else{
            corLetra = "black"
        }

        cores.innerHTML += `<li style="background-color:${cor}; color: ${corLetra};font-family: Verdana; padding:1vw;font-weight:bold">Nome da cor: ${cor} | Código da Cor: ${hexcode}</li>\n\n`
        listaCores[cor] = hexcode
    } else {
        alert("Digite uma cor")
        console.log(listaCores)
    }
}

document.getElementById("cor").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarCor()
    }
})