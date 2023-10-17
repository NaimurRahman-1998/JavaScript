const numbers = [ 40 ,8,20,25,35,80];

let text = '';

numbers.forEach(value=> text+= `value is ${value} |`)
// console.log(numbers,text)

const newNumbers = numbers.map((value,index,array) => {
    return value * 2
})

// console.log(newNumbers)

const totalValue = numbers.reduce((value,total)=>{
    return value + total
})

console.log(totalValue)
