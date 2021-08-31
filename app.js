let randomNumber = Math.floor(Math.random() * 6) + 1, randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg1 = "images/dice" + randomNumber + ".png",  randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

let img1 = document.querySelector(".img1"), img2 = document.querySelector(".img2");

const btn = document.querySelector(".btn"), container = document.querySelector(".disclaimer");

img1.setAttribute("src", randomDiceImg1);
img2.setAttribute("src", randomDiceImg2);

let h1 = document.querySelector("h1");

if(randomNumber>randomNumber2){
   h1.innerHTML = "Player 1 wins";
}

else if(randomNumber<randomNumber2){
    h1.innerHTML = "Player 2 wins";
}

else { 
    h1.innerHTML = "Draw";
};

