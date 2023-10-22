// How te generate random numbers b/w 1-6

const randomNumber = (a,b) =>{
    return Math.floor(Math.random() * (b - a + 1) ) + a
}

console.log(randomNumber(1,3));