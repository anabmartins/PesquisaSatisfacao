var pontos = 0 
let p1 = document.getElementsByName("p1")
let p2 = document.getElementsByName("p2")
let p3 = document.getElementsByName("p3")
let p4 = document.getElementsByName("p4")
let p5 = document.getElementsByName("p5")
let p6 = document.getElementsByName("p6")
let p7 = document.getElementsByName("p7")
let p8 = document.getElementsByName("p8")



let botao = document.querySelector('#pontuar')
botao.addEventListener('click', pontuar)

function pontuar() {
    if (("#1.10").checked) 
    {
        pontos++
    }
    if (("#2.2").checked)
    {
        pontos++
    }
    if (("#3.1").checked)
    {
        pontos++
    }
    if (("#4.1").checked)
    {
        pontos++
    }
    if (("#5.3").checked)
    {
        pontos++
    }
    if (("#6.1").checked)
    {
        pontos++
    }
    if (("#7.1").checked)
    {
        pontos++
    }
    if (("#8.1").checked)
    {
        pontos++
    }
    console.log(pontos);
}
