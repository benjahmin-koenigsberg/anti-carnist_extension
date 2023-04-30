/** @format */


// const altAtt = document.querySelectorAll("*[alt]");
// const altText = Array.from(altAtt, (al, i) => al.getAttribute("alt"));

// let chicken = "images/chicken.jpeg";
// let pig = "images/pig.jpeg";
// let fish = "images/fish.jpeg";
// let milk = "images/milk.jpeg";
// let eggs = "images/eggs.jpeg";

// let chickenImage = chrome.runtime.getURL(chicken);
// let pigImage = chrome.runtime.getURL(pig);
// let fishImage = chrome.runtime.getURL(fish);
// let milkImage = chrome.runtime.getURL(milk);
// let eggsImage = chrome.runtime.getURL(eggs);

let filesNames = [
  "eating-animals-is-wrong.jpeg",
  "carnism-is-eating-dead.jpeg",
  "how-do-we-get-to-your-side.jpeg",
  "mlk-quote.jpeg"
];

let imgs = document.getElementsByTagName("img");

console.log(imgs)

for (imgElt of imgs){
    let index = Math.floor(Math.random() * filesNames.length);
    let file = "images/" + filesNames[index];
    let url = chrome.runtime.getURL(file);
    imgElt.src = url;
}
