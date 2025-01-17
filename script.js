// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


var lampadina = document.getElementById("imgLamp")

var bottone = document.getElementById("buttonOn")
let onOff = false
bottone.addEventListener("click",()=>{
    if (onOff== false) {
        lampadina.src = "./img-5/yellow_lamp.png";
        onOff=true
        bottone.innerHTML = "Spegni la lampadina" 
    } else {
        lampadina.src = "./img-5/white_lamp.png";
        onOff = false
        bottone.innerHTML = "Accendi la lampadina" 
    }
   
})