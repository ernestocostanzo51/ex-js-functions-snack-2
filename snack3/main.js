function eseguiOperazione(x,y,operazione) {
    return operazione(x,y)
}


const somma = (x,y) => x + y
const moltiplicazione = (x,y) => x*y

console.log(eseguiOperazione(5,5,somma))
console.log(eseguiOperazione(10,10,moltiplicazione))
