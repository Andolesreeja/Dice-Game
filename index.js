var randnum1= Math.floor(Math.random()*6)+1;

var sourceimage1="images/dice"+ randnum1 +".png";

document.querySelectorAll("img")[0].setAttribute("src",sourceimage1);

var randnum2=Math.floor(Math.random()*6)+1;
 
var sourceimage2 = "images/dice"+ randnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",sourceimage2);

if (randnum1 > randnum2){
    document.querySelector("h1").innerHTML=" Player1 wins!";

} 
else if (randnum2 > randnum1){
    document.querySelector("h1").innerHTML=" Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}