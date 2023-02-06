const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pId");
const input = document.querySelector("input");
const img = document.createElement("img");
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
h1.innerHTML = "Patito <br> Feo";
p.innerText = "parrafo modificado por DOM";
input.value = "456";
document.createElement("img");
img.setAttribute("src", "https://occ-0-2794-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f");
pid.append(img);