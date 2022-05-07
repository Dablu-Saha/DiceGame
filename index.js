// alert("ok");
var randomNumber1=Math.floor(Math.random()*6)+1;
var diceName1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",diceName1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceName2="images/dice"+randomNumber2+".png";
image2.setAttribute("src",diceName2);
var tit=document.querySelectorAll("h1")[0];
if(randomNumber1>randomNumber2){
  tit.innerHTML="🚩Dablu Won😎";
}
else if(randomNumber2>randomNumber1){
    tit.innerHTML="😒Himanshu Won🚩";
}
else{
    tit.innerHTML="🚩Draw🚩";
}
