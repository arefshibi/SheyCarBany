const dateCountainer = document.getElementById('dateContainer');
const divider = document.getElementById('divider');
const services = document.querySelectorAll('.service');

function generatedates(count =14){
    dateCountainer.innerHTML = "";
    for(let i=0 ; i< count ; i++){
        const today = new Date();
        today.setDate(today.getDate()+i);
        
        const box = document.createElement('div');
        box.className = 'time1';
        box.textContent = today.toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'short'
        });
        dateCountainer.appendChild(box);
    }
}

services.forEach(btn => {
    btn.addEventListener('click', ()=>{

        
        generatedates(14);
        
        divider.style.transition = "0.4s ease";

        dateContainer.classList.toggle('shown');

        

        if(dateCountainer.classList.contains('shown')){
             divider.style.opacity = "0";
             divider.style.transition = "0.4s ease-in";
        }else{
             divider.style.opacity = "1";
             divider.style.transition = "0.4s ease-in";
        }
    })
});

