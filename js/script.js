function simpleAlert (){
    alert("Alert");
}

function printName (){
    let printName = document.getElementById("inputText").value;
    if (!printName){
        alert("Please type your name")
        return;
    }
    document.getElementById("output").innerHTML = printName
}
let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Shekhupura','Kashmir']

function printAllCities (){
    document.getElementById('output').innerHTML = "";
    for (let index = 0; index < cities.length; index++){
        let city = cities[index]
        document.getElementById("output").innerHTML += index + 1 + ") " + city + "<br />"
    }
}
function addCity (){
    let city = document.getElementById("inputText").value;
    if (!city){
        alert("Please type your city name")
        return;
    }
    cities.push(city);
    document.getElementById('output').innerHTML = '<span style="color: green; font-size:20px;">"' + city + '"</span> has been successfully added on your list.'
}
function generateTable(){
    tableNumber = +prompt("please enter table number that use want to generate")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}
