/** @format */

const chickens = [
  "chicken.jpg",
  "chicken2.jpg",
  "chicken3.jpg",
  "chicken4.jpg",
  "chicken5.jpg",
  "chicken6.jpg",
  "chicken7.jpg",
  "chicken8.jpg",
];

const cows = [
  "cow.jpg",
  "cow2.jpg",
  "cow3.jpg",
  "cow4.jpg",
  "cow5.jpg",
  "cow6.jpg",
  "cow7.jpg",
  "cow8.jpg",
  "cow9.jpg",
  "cow10.jpg",
];

const fish = ["fish.jpg", "fish2.jpg", "fish3.jpg", "fish4.jpg", "fish5.jpg"];

const geese = ["goose.jpg", "goose2.jpg"];

const lamb = ["lamb.jpg", "lamb2.jpg"];

const pigs = [
  "pig.jpg",
  "pig2.jpg",
  "pig3.jpg",
  "pig4.jpg",
  "pig5.jpg",
  "pig6.jpg",
  "pig7.jpg",
  "pig8.jpg",
];

const turkeys = ["turkey.jpg", "turkey2.jpg", "turkey3.jpg", "turkey4.jpg"];

let randomChicken = Math.floor(Math.random() * chickens.length);
let randomCow = Math.floor(Math.random() * cows.length);
let randomFish = Math.floor(Math.random() * fish.length);
let randomGoose = Math.floor(Math.random() * geese.length);
let randomLamb = Math.floor(Math.random() * lamb.length);
let randomPig = Math.floor(Math.random() * pigs.length);
let randomTurkey = Math.floor(Math.random() * turkeys.length);

//let chickenFile = "images/chickens/" + chickens[randomChicken];
let cowFile = "images/cows/" + cows[randomCow];
let fishFile = "images/fish/" + fish[randomFish];
let gooseFile = "images/geese/" + geese[randomGoose];
let lambFile = "images/lamb/" + lamb[randomLamb];
let pigFile = "images/pigs/" + pigs[randomPig];
let turkeyFile = "images/turkeys/" + turkeys[randomTurkey];

let chickenImg = chrome.runtime.getURL("images/chickens/" + chickens[randomChicken]);
//let chickenImg = chrome.runtime.getURL(chickenFile);
let cowImg = chrome.runtime.getURL(cowFile);
let fishImg = chrome.runtime.getURL(fishFile);
let gooseImg = chrome.runtime.getURL(gooseFile);
let lambImg = chrome.runtime.getURL(lambFile);
let pigImg = chrome.runtime.getURL(pigFile);
let turkeyImg = chrome.runtime.getURL(turkeyFile);


function replaceImages(){




let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
  if (imgElt.alt.toLowerCase().includes("chicken")) {
    imgElt.src = chickenImg;
    imgElt.srcset = chickenImg;
  }
  if (imgElt.alt.toLowerCase().includes("eggs")) {
    imgElt.src = chickenImg;
    imgElt.srcset = chickenImg;
  }
  if (imgElt.alt.toLowerCase().includes("omelette")) {
    imgElt.src = chickenImg;
    imgElt.srcset = chickenImg;
  }
  if (imgElt.alt.toLowerCase().includes("quiche")) {
    imgElt.src = chickenImg;
    imgElt.srcset = chickenImg;
  }
  if (imgElt.alt.toLowerCase().includes("bacon")) {
    imgElt.src = pigImg;
    imgElt.srcset = pigImg;
  }
  if (imgElt.alt.toLowerCase().includes("ham")) {
    imgElt.src = pigImg;
    imgElt.srcset = pigImg;
  }
  if (imgElt.alt.toLowerCase().includes("sushi")) {
    imgElt.src = fishImg;
    imgElt.srcset = fishImg;
  }
  if (imgElt.alt.toLowerCase().includes("ceviche")) {
    imgElt.src = fishImg;
    imgElt.srcset = fishImg;
  }
  if (imgElt.alt.toLowerCase().includes("sashimi")) {
    imgElt.src = fishImg;
    imgElt.srcset = fishImg;
  }
  if (imgElt.alt.toLowerCase().includes("milk")) {
    imgElt.src = cowImg;
    imgElt.srcset = cowImg;
  }
  if (imgElt.alt.toLowerCase().includes("cheese")) {
    imgElt.src = cowImg;
    imgElt.srcset = cowImg;
  }
  if (imgElt.alt.toLowerCase().includes("veal")) {
    imgElt.src = cowImg;
    imgElt.srcset = cowImg;
  }
  if (imgElt.alt.toLowerCase().includes("steak")) {
    imgElt.src = cowImg;
    imgElt.srcset = cowImg;
  }
  if (imgElt.alt.toLowerCase().includes("hamburger")) {
    imgElt.src = cowImg;
    imgElt.srcset = cowImg;
  }
  if (imgElt.alt.toLowerCase().includes("foie gras")) {
    imgElt.src = gooseImg;
    imgElt.srcset = gooseImg;
  }
  if (imgElt.alt.toLowerCase().includes("turkey")) {
    imgElt.src = turkeyImg;
    imgElt.srcset = turkeyImg;
  }
  if (imgElt.alt.toLowerCase().includes("lamb")) {
    imgElt.src = lambImg;
    imgElt.srcset = lambImg;
  }
}

}

replaceImages()

window.addEventListener("scroll", function() {
  replaceImages();
});

//clearInterval(()=>{runAgain}, 5000)

//for (imgElt of imgs){
// let index = Math.floor(Math.random() * fileNames.length);
// let file = "images/" + filesNames[index];
// let url = chrome.runtime.getURL(file);
// imgElt.src = url;
// imgElt.srcset = url;

// console.log(imgElt.alt.toLowerCase())
//}
// for (imgElt of imgs) {
// let chicken = chrome.runtime.getURL("images/chicken.jpeg");
// let pig = chrome.runtime.getURL("images/pig.jpeg");
// let fish = chrome.runtime.getURL("images/fish.jpeg");
// let milk = chrome.runtime.getURL("images/milk.jpeg");
// let eggs = chrome.runtime.getURL("images/eggs.jpeg");
// let dairyCow = chrome.runtime.getURL('images/dairycow.jpeg')
