function creaContatoreAutomatico(tempo){
  let contatore = 0
  return function(){
    return setInterval(() =>{
        contatore++
        console.log(`${contatore}`)
    } , tempo)
  }
}

const mioContatore = creaContatoreAutomatico(1000)

const idTimer = mioContatore(); 


setTimeout(() => {
    clearInterval(idTimer);
    console.log("Contatore stoppato!");
}, 5500);