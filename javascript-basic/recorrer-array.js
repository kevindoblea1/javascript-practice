var items = [
    {name: "Bike", cost: 3000},
    {name: "Tv", cost: 2500},
    {name: "book", cost: 320},
    {name: "cellphone", cost: 10000},
    {name: "laptop", cost: 20000},
    {name: "desktop", cost: 6000},
    {name: "keyboard", cost: 500},
    {name: "headphones", cost: 700},
    {name: "chair", cost: 5000},
    {name: "monitor", cost: 4500},
];

console.log("------------------------------------------------------------");
//filtrado usando filter
var itemsFilteredByCost = items.filter(function(item){
    return item.cost <= 500
});
console.log(itemsFilteredByCost);

console.log("------------------------------------------------------------");
//filtrado usando map
var nameItems = items.map(function (item) {
    return item.name
});
console.log(nameItems);

console.log("------------------------------------------------------------");
//filtrado mediante find.
var findItem = items.find(function(item){
    return item.name === "laptop"
});
console.log(findItem);

console.log("------------------------------------------------------------");
//recorrido foreach
items.forEach(function(item){
    console.log(item.name);
});

console.log("------------------------------------------------------------");
//mediante some, true or false.
var cheapItems = items.some(function(item){
    return item.cost <= 200;
});
console.log(cheapItems);