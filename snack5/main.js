function stampaOgniSecondo(messaggio) {
    
    const idIntervallo = setInterval(() => {
        console.log(messaggio);
    }, 1000);

    return idIntervallo;
}

const notifica = stampaOgniSecondo("ciao")

setTimeout(() =>{
    clearInterval(notifica)
    console.log("FINITO")
} , 5000)