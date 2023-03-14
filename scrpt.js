const title=document.getElementById("title")
const desc=document.getElementById("desc")
const sumbit=document.getElementById("sumbit")
let card_tittle=document.getElementById("card_tittle")
let card_desc=document.getElementById("card_desc")
let card=document.getElementById("card")

addEventListener.addEventListener("click",function(e){
e.preventDefault()
console.log(title.value,desc.value);
card_tittle.innerHTML=title.value
card_desc.innerHTML=desc.value
title.value=""
desc.value=""
})