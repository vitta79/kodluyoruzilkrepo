let myname = prompt("Adiniz nedir?")
let gelen = document.getElementById("myName")
gelen.innerText = myname
showTime()

function showTime() {
    let saat = document.querySelector("div.clock")
    let data = new Date()
    let hour = data.getHours()
    let minut = data.getMinutes()
    let sec = data.getSeconds()
    let day = data.getDay()
    switch (day) {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Sali"
            break;
        case 3:
            day = "Carsamba"
            break;
        case 4:
            day = "Persembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        case 7:
            day = "Pazar"
            break;
    }

    saat.innerHTML = `${hour}:${minut}:${sec} ${day} `
    setTimeout(showTime, 1000); 
}