let lastChild=document.querySelector("ul#list>li:last-child")
console.log(lastChild)
lastChild.innerHTML="last child is changed"

let fisrtChild=document.querySelector("ul#list>li:first-child")
console.log(fisrtChild)
fisrtChild.innerHTML="first child is changed"

let ulDOM=document.querySelector("ul#list")
console.log(ulDOM)
let liDOM=document.createElement("li")
liDOM.innerHTML="New Child"
ulDOM.append(liDOM)
ulDOM.prepend(liDOM)