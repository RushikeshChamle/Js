let options = ["Beta", "Alpha", "Gamme", "Geeta", "Theata"];

//let random = Math.floor(Math.random() * options.length);
console.log(options);

//document.getElementById("demo").innerHTML = options[random];
options[3] = "Upsilon";
console.log(options[2]);

options.push("Tesla");

document.getElementById("demo").innerHTML = options;
