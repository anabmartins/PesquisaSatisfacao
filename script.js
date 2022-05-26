var pontos = 0 
var p1 = document.getElementsByName("p1")
var p2 = document.getElementsByName("p2")
var p3 = document.getElementsByName("p3")
var p4 = document.getElementsByName("p4")
var p5 = document.getElementsByName("p5")
var p6 = document.getElementsByName("p6")
var p7 = document.getElementsByName("p7")
var p8 = document.getElementsByName("p8")

function pontuar() {
if (p1[4].checked){
pontos++
} 
if(p2[0].checked || p2[2].checked || p2[3].checked){
pontos++
} 
if(p3[0].checked){
pontos++
}
if(p4[0].checked){
pontos++
}
if(p5.checked){
pontos++
}
if(p6[0].checked || p6[1].checked){
pontos++
}
if(p7[0].checked){
pontos++
}
if(p8[0].checked || p8[1].checked){
pontos++
}
resultado.innerHTML = String(pontos)
pontos = 0
}