function creaTimer(tempo){
    return function(){
        setTimeout(() =>{
            console.log("tempo scaduto!")
        }, tempo)
    }
}


const timer1 = creaTimer(1000)
const timer2 = creaTimer(4000)


timer1()
timer2()



