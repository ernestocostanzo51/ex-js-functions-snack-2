function contoAllaRovescia(n) {
    const timer = setInterval(() => {
        console.log(n);
        n--
        if (n < 0) {
            console.log("Tempo scaduto!");
            clearInterval(timer); 
        }
    }, 1000);
}
contoAllaRovescia(5)