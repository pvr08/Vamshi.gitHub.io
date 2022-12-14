var i = 0;
var timer;
var path = new Array();


path[0] = "vamshi_imgs/CN_Tower.jpg";
path[1] = "vamshi_imgs/CN_Tower2.jpg";
path[2] = "vamshi_imgs/CN_Tower3.jpg";


function swapImage()
{
   document.getElementById("mySlides").src=path[i];
   if(i < path.length - 1) i++; else i = 0;
   timer = setTimeout("swapImage()",1500);
}

function stopShow()
{
  swapImage();  
}

function runShow()
{
  clearTimeout(timer);
 
}





var j = 0;
var timer1;
var path1 = new Array();


path1[0] = "vamshi_imgs/Toronto_islands.jpg";
path1[1] = "vamshi_imgs/Torontoislands2.jpeg";
path1[2] = "vamshi_imgs/Torontoislands3.jpeg";


function swapImage1()
{
   document.getElementById("mySlides1").src=path1[j];
   if(j < path1.length - 1) j++; else j = 0;
   timer1 = setTimeout("swapImage1()",2000);
}

function stopShow1()
{
  swapImage1();  
}

function runShow1()
{
  clearTimeout(timer1);
 
}


function submit(){
  window.location = "vamshi_Project_Task2.html";
}