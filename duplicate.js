const numbers = [1,2,3,45,8,44,12,,3,5,1,5];

// const isDuplicate = (array) =>{
//     const duplicate = [];

//     array.forEach((value,index)=>{
//         if(array.indexOf(value) !== index && array.lastIndexOf(value) === index){
//             duplicate.push(value);
//         }
//     })

//     return duplicate
// }

const isDuplicate =(array) =>{
    let seen  = [];
    let duplicate = []

    array.forEach((value)=>{
        if(!seen.includes(value)){
            seen.push(value)
        }
        else if(seen.includes(value)){
            duplicate.push(value)
        }
    })

    return duplicate
}

console.log(isDuplicate(numbers))