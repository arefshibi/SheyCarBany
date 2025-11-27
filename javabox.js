const boxs = document.querySelectorAll('.box');




function showbox(){
const triggerBottom = window.innerHeight / 1.2;


boxs.forEach(box => {
    const boxtop = box.getBoundingClientRect().top
;

if(boxtop < triggerBottom){
    box.classList.add('show');

}else{
    box.classList.remove('show');
}
});


}

showbox();
window.addEventListener('scroll', showbox);