let resault = document.getElementById("inputtext")
let clear = document.getElementById("clear")
let Delete = document.getElementById("p")
let right = document.getElementById("equal")


let calculator = function (number){
    resault.value+=number
}

window.onload =function (){
    resault.focus()
}

clear.onclick= function (){
    resault.value = ''
}
p.onclick = function (){
    resault.value=resault.value.slice(0,-1)
}

right.onclick = function (){
    resault.value=eval(resault.value)
}