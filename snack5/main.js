function stampaOgniSecondo (mess){
    setInterval = (() => {
        console.log(mess)
    } , 1000)
}

const messaggio = "ciao a tutti"

stampaOgniSecondo(messaggio)