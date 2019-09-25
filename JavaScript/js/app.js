var nextbtn=document.getElementById("nextBtn");
var prevbtn=document.getElementById("prevBtn");
var pos=0;
var slider=document.querySelector(".allBox");
var boxItem=   slider.querySelectorAll(".box").length-1;
nextbtn.onclick=function(){
    pos++;
 slider.style.left=-(slider.clientWidth*pos)+"px";

if(pos==boxItem){
    pos=-1;
}


}
prevbtn.onclick=function(){
    pos--;
    
    if(pos==-1){
        pos=boxItem;
    }
    slider.style.left=-(slider.clientWidth*pos)+"px";
}