const prompt = require("prompt-sync")();
function auto (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
};
for(let i = 0 ; i < 5 ; i++){
  let brand = prompt("Type the car brand: ");
  let model = prompt("Type the car model: ");
  let year = prompt("Type the car year: ");
  auto[i] = new auto (brand, model, year);
  console.log("______________________________________________________________");
  console.log("The data was added!");
  console.log("______________________________________________________________");
  console.log("");
}
for (let i = 0; i < 5; i++){
console.log(auto[i].model, auto[i].year);
};
