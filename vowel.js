
const IsVowel = (string) =>{
    const vowels = ["a","e","i","o","u"];
    let count = 0;
    const stringArray = string.toLowerCase().split("");

    stringArray.forEach(value=>{
        if(vowels.includes(value)){
            count ++
        }
    })
    return count
}

console.log(IsVowel("iii"))