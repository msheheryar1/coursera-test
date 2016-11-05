var index=1;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var workindex=1;
showwork(workindex);
function load(){
  pluswork(1);
  plusSlides(0);
  plusblog(1);
}
var sher=0;
function bar(n){
}
function pluswork(n) {
showwork(workindex += n);
var sher;
for(var i=1; i<6;i++ ){
  var cls=document.getElementById("bar"+i);
  cls.style.borderBottomColor="pink";
}
idName="bar"+(workindex-1); 
document.getElementById(idName).style.borderBottomColor="tomato";

}
function showwork(n) {
var i;
  var slides = document.getElementsByClassName("thiswork");
  if (n > slides.length) {workindex = 1} 
  if (n < 1) {workindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
if(workindex==2){
var pre=document.getElementsByClassName("pre");
pre[0].disabled=true;
pre[0].style.backgroundColor="gray";
pre[0].style.borderColor="gray";
  slides[workindex+1].style.display = "inline-block";
  slides[workindex].style.display = "inline-block";
  slides[workindex-1].style.display = "inline-block";
  slides[workindex-2].style.display = "inline-block"; 
}

else if( workindex>0){var pre=document.getElementsByClassName("pre");
pre[0].disabled=false;
pre[0].style.backgroundColor="tomato";
pre[0].style.borderColor="red";
slides[workindex+1].style.display = "inline-block";
  slides[workindex].style.display = "inline-block";
  slides[workindex-1].style.display = "inline-block";
  slides[workindex-2].style.display = "inline-block"; 
}

if(workindex<6){
  var nex=document.getElementsByClassName("nex");
nex[0].disabled=false;
nex[0].style.backgroundColor="tomato";
nex[0].style.borderColor="red";
  slides[workindex+1].style.display = "inline-block";
  slides[workindex].style.display = "inline-block";
  slides[workindex-1].style.display = "inline-block";
  slides[workindex-2].style.display = "inline-block"; 
  
}
else if(workindex==6)
  {
    var nex=document.getElementsByClassName("nex");
nex[0].disabled=true;
nex[0].style.backgroundColor="gray";
nex[0].style.borderColor="gray";
slides[workindex+1].style.display = "inline-block";
  slides[workindex].style.display = "inline-block";
  slides[workindex-1].style.display = "inline-block";
  slides[workindex-2].style.display = "inline-block"; 
  }
}/*
var blogindex=1;
showwork(blogindex);
var sher=0;
function bar(n){
}
function plusblog(n) {
showblog(blogindex += n);
var sher;
for(var i=1; i<6;i++ ){
  var cls=document.getElementById("nbar"+i);
  cls.style.borderBottomColor="pink";
}
idName="nbar"+(blogindex-1); 
document.getElementById(idName).style.borderBottomColor="tomato";

}
function showblog(n) {
var i;
  var slides = document.getElementsByClassName("blog");
  if (n > slides.length) {blogindex = 1} 
  if (n < 1) {blogindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
if(blogindex==2){
var npre=document.getElementsByClassName("npre");
npre[0].disabled=true;
npre[0].style.backgroundColor="gray";
npre[0].style.borderColor="gray";
  slides[blogindex+1].style.display = "inline-block";
  slides[blogindex].style.display = "inline-block";
  slides[blogindex-1].style.display = "inline-block";
  slides[blogindex-2].style.display = "inline-block"; 
}

else if( blogindex>0){var npre=document.getElementsByClassName("npre");
npre[0].disabled=false;
npre[0].style.backgroundColor="tomato";
npre[0].style.borderColor="red";
slides[blogindex+1].style.display = "inline-block";
  slides[blogindex].style.display = "inline-block";
  slides[blogindex-1].style.display = "inline-block";
  slides[blogindex-2].style.display = "inline-block"; 
}

if(blogindex<6){
  var nnex=document.getElementsByClassName("nnex");
nnex[0].disabled=false;
nnex[0].style.backgroundColor="tomato";
nnex[0].style.borderColor="red";
  slides[blogindex+1].style.display = "inline-block";
  slides[blogindex].style.display = "inline-block";
  slides[blogindex-1].style.display = "inline-block";
  slides[blogindex-2].style.display = "inline-block"; 
  
}
else if(blogindex==6)
  {
    var nnex=document.getElementsByClassName("nnex");
nnex[0].disabled=true;
nnex[0].style.backgroundColor="gray";
nnex[0].style.borderColor="gray";
slides[blogindex+1].style.display = "inline-block";
  slides[blogindex].style.display = "inline-block";
  slides[blogindex-1].style.display = "inline-block";
  slides[blogindex-2].style.display = "inline-block"; 
  }
}*/
showblog(index);
function plusblog(n) {
showblog(index += n);
for(var i=1; i<6;i++ ){
  var cls=document.getElementById("nbar"+i);
  cls.style.borderBottomColor="pink";
}
idName="nbar"+(index-1); 
document.getElementById(idName).style.borderBottomColor="tomato";

}
function showblog(n) {
var i;
  var slides = document.getElementsByClassName("blog");
  if (n > slides.length) {index = 1} 
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
if(index==2){
var npre=document.getElementsByClassName("npre");
npre[0].disabled=true;
npre[0].style.backgroundColor="gray";
npre[0].style.borderColor="gray";
  slides[index+1].style.display = "inline-block";
  slides[index].style.display = "inline-block";
  slides[index-1].style.display = "inline-block";
  slides[index-2].style.display = "inline-block"; 
}

else if(index>0){var npre=document.getElementsByClassName("npre");
npre[0].disabled=false;
npre[0].style.backgroundColor="tomato";
npre[0].style.borderColor="red";
slides[index+1].style.display = "inline-block";
  slides[index].style.display = "inline-block";
  slides[index-1].style.display = "inline-block";
  slides[index-2].style.display = "inline-block"; 
}

if(index<6){
  var nnex=document.getElementsByClassName("nnex");
nnex[0].disabled=false;
nnex[0].style.backgroundColor="tomato";
nnex[0].style.borderColor="red";
  slides[index+1].style.display = "inline-block";
  slides[index].style.display = "inline-block";
  slides[index-1].style.display = "inline-block";
  slides[index-2].style.display = "inline-block"; 
  
}
else if(index==6)
  {
    var nnex=document.getElementsByClassName("nnex");
nnex[0].disabled=true;
nnex[0].style.backgroundColor="gray";
nnex[0].style.borderColor="gray";
slides[index+1].style.display = "inline-block";
  slides[index].style.display = "inline-block";
  slides[index-1].style.display = "inline-block";
  slides[index-2].style.display = "inline-block"; 
  }
}