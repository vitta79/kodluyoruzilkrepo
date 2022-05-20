// String ile islem
var data1="Ilk Degisken";
let data2
data2="Ikinci Degisken";
const pass="1234";
console.log(data1+data2+pass)

// Numver ile islem
let price=45
let total=4*price
console.log(
    "Price: "+price,
    "Total: "+total,
)
price+=10
console.log("IncPrice: ",price)

let x=2
console.log("x: ",x, "x^6: ",x**6)

console.log("Yukari Yuvarla: "+Math.ceil(1.8))
console.log("Asagi Yuvarla: ",Math.floor(1.8))

console.log("12")
console.log(Number("12"))

let data3="Data exist"
console.log("Is Emty: "+!Boolean(data3))
data3=""
console.log("Is Emty: "+!Boolean(data3))
var z={2:'js'};
console.log(" ",Boolean(z))
var a=true
console.log(Boolean(a))

var num="11px"
var num1=parseInt(num)
console.log("String: "+num,typeof(num)+" \nParseInt: ",num1,typeof(num1)+" \nNumber: ",Number(num),typeof(num))


let username="bahar"
const DOMAIN="ktun.edu.tr"
let email=username+"@"+DOMAIN
console.log("Your email is: "+email)
console.log("3.id: "+`${username[3]}`)
let init=`Hello ${username} is your email ${email}?
Your email length is: ${email.length}
Price is ${(15+7)*3} USD
Time: ${new Date().getHours()}`
console.log(""+init)


let firstName="bahar"
let lastName="NURULLAH"
let fullname=`${firstName[0].toLocaleUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toLocaleUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
console.log(""+firstName+" "+lastName)
console.log(fullname)

///  DOM ile calisma
document.body.style.backgroundColor="white";
let title=document.getElementById("title")
console.log(title.innerHTML)
title.innerHTML="Merhaba Dunya"
console.log(title.innerHTML)

// Prompt kullanımı

