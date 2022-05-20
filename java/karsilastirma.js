function karsilastirma() {
    let price = "100"
    console.log("==:" , price == 1)
    console.log("==:" , price == 100)
    console.log("===:" , price === 1)
    console.log("===:" , price === 100)
}

function varsa(){
    let gelen=prompt("Lutfen adinizi giriniz: ")
    if(gelen){
        console.log(`Kullanici adi: ${gelen}`)
    }else{
        console.log("Bilgi girmediniz")
    }
}
function nothesap(){
    let vize=prompt("Vize notunuzu giriniz: ")
    let final=prompt("Final notunuzu giriniz: ")
    let ort=(0.3*vize)+(0.7*final)
    if(ort<=30){
        alert("Kaldiniz FF")
    }else if(ort>30 && ort<50){
        alert("Gectiniz DC")
    }else if(ort>=50 && ort<85){
        alert("Gectiniz CC")
    }else if(ort>84 && ort<=100){
        alert("Gectiniz AA")
    }
}

let ifelse=document.querySelector("#ifelse")
let bilgi=prompt("Kullanici adi: ")
////                  if(bilgi.length>0){ bilgi }else{ "Kullanici Bilginiz Bulunamadi" }
ifelse.innerHTML+=` ${bilgi.length>0 ? bilgi : "Kullanici Bilginiz Bulunamadi :("}`

function hesap(){
    const smile=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
  </svg>`
  const sad=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
    let sonuc=prompt("Sinav Notunuzu giriniz: ")
    let veri=document.querySelector("#hesap")
    let tect=smile
    veri.classList.add('text-primary')
    if(sonuc>0 && sonuc<=100){
        if(sonuc>=80){
            tect+="AA"
        }else if(sonuc>=60){
            tect+="BB"
        }else if(sonuc>=50){
            tect+="CC"
        }else if(sonuc>=40){
            tect+="DD"
        }else{
            tect=`${sad} FF`
            veri.classList.remove('text-primary')
            veri.classList.add('text-danger')
        }
    }else{
        tect="Dogru bilgi giriniz"
    }
    veri.innerHTML+=tect
}