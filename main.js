function changesize(){
    document.querySelector("div").classList.toggle("incresssize");
}
function changesize2(){
    document.querySelector("div").classList.add("decreaseloss");
}
document.querySelector(".incressBtn").onclick=changesize;
document.querySelector(".decreaseBtn").onclick=changesize2;