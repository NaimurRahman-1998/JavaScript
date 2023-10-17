const cars = ['BMW', "VOLVO" , "VOLKS"];

// document.getElementById("demo").innerHTML = cars

let text = "<ul>";

for (i = 0; i < cars.length ; i++){
    text += `<li> ${cars[i]} </li>`
}

text += "</ul>"

document.getElementById("demo").innerHTML = text