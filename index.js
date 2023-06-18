var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber + ".png";

var randomimageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomimageSource > randomImageSource2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomImageSource2 > randomimageSource)
{
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}



