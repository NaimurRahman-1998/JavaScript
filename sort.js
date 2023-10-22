const names = ["naim","sam","jones","Mic"]
const sortAlphabetically = (array) =>{
    const lowerArray = array.map(name=>name.toLowerCase())
    return lowerArray.sort()
}

console.log(sortAlphabetically(names))