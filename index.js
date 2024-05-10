function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    // let hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
        msg.innerHTML = `Bom Dia! Agora são ${hora}:00 horas.`
        img.src ='bomdia.png'
        document.body.style.background ='#f7eda7'
    } else if( hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora}:00 horas.`
        img.src= 'tarde.png'
        document.body.style.background ='#c86b00'
    } else{
        msg.innerHTML = `Boa noite! Agora são ${hora}:00 horas.`
        img.src = 'boanoite.png'
        document.body.style.background ='#025392'
    }
}
