const step = document.querySelectorAll('.step');
step.forEach(btn => {

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');

    })

});


const btn1 = document.querySelector('.btn');
const blur = document.querySelector('.blurOverlay');
const datebox = document.querySelector('.datebox');

btn1.addEventListener('click', () => {

    blur.classList.add('active');
    datebox.classList.add('active');
});





const btn = document.querySelector('.btn');
const dateCountainer = document.getElementById('datebox');
const btng = document.querySelector('.btn.ghost');
const delet = document.querySelector('.vv');

function generatedates(count = 14) {
    dateCountainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const today = new Date();
        today.setDate(today.getDate() + i);

        const box = document.createElement('div');
        box.className = 'time1';
        const weekday = today.toLocaleDateString("fa-IR", {
            weekday: 'long'
        })
        box.textContent = today.toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'short',
            weekday: "long"

        });
        if (weekday === "جمعه") {
            box.style.background = "red";
            box.addEventListener('mouseenter', () => {
                box.textContent = "تعطیلیم";
                box.style.color = "white";
                box.style.cursor = "not-allowed";
            })
            box.addEventListener('mouseleave', () => {
                box.textContent = today.toLocaleDateString('fa-IR', {
                    day: 'numeric',
                    month: 'short',
                    weekday: 'long'
                });
                box.style.background = "red";
                box.style.color = "white";
            })
            delet.addEventListener('click', ()=>{
                const del = "بدون تاریخ";
                btng.textContent = del;
                localStorage.setItem("none", del);
            })
            

        }

        dateCountainer.appendChild(box);
        
        if (weekday !== "جمعه"){
            box.addEventListener('click', () => {
                dateCountainer.classList.remove('shown');
                blur.classList.remove('active');
            })
        }
       box.dataset.info = today.toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'short',
            weekday: "long"

        });

        if(weekday !== "جمعه"){
box.addEventListener('click', ()=>{
                const info = box.dataset.info;
                
                btng.textContent = "";
                btng.textContent = [info];
                localStorage.setItem("selectedinfo", [info]);
            })
        }
            
    

    }
}
window.addEventListener('load', ()=>{
    const savedinfo = localStorage.getItem("selectedinfo");
    const savedinfo1 = localStorage.getItem("none");
    
    if(savedinfo)
        btng.textContent = savedinfo;
    
    if(savedinfo1)
         btng.textContent = savedinfo1;
    
});




btn.addEventListener('click', () => {


    generatedates(14);


    dateCountainer.classList.toggle('shown');





});

 




const submit = document.querySelector('.submit');
const loader = document.querySelector('.loader');
const ticket = document.querySelector('.allticket');


const servicetxt = document.querySelector('.servs');
const datetxt = document.querySelector('.dates');

const cartxt = document.querySelector('.cars');

const cartype = document.getElementById('car');

const stepp = document.querySelectorAll('.step');
const randcod = document.querySelector('.rand');


    
        submit.addEventListener('click', (e)=>{
            e.preventDefault();


                const selectedStep = [];
                stepp.forEach(step => {

                    if(step.classList.contains('active')){
                        const mtn = step.querySelector('.mtn');
                        selectedStep.push(mtn.textContent.trim());
                    }
                    
                });
                
                let randomcode = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');


                const value = cartype.value;


                const savedinfo2 = localStorage.getItem('selectedinfo');
                const arr = savedinfo2.split(' ');

                console.log(arr);
                 datetxt.textContent = `date : ${arr[0]},${arr[1]},${arr[2]}`;
                cartxt.textContent = `car : ${value}`;
                servicetxt.textContent = `services:
                ${selectedStep}`;

                randcod.textContent = `Code : ${randomcode}`;
                

                 blur.classList.add('active');

                loader.classList.add('active');

                 document.body.style.overflow ="hidden"

                

                setTimeout(() => {
                    loader.classList.remove('active');
                      
                        blur.classList.add('active');

                    ticket.classList.add('active');

                }, 1000);
             
                
            
       
        
        
         
    });
    
    
    


function tearTicket() {
    let container = document.querySelector(".ticket-container");
    let bottom = document.getElementById("bottomPart");
    const tic = document.querySelector('.ticket.top')

    container.classList.add("torn");

    // حذف کامل بعد از پایان انیمیشن
    setTimeout(() => {
        bottom.remove();
    }, 900);

    setTimeout(() => {
        tic.addEventListener('click', ()=>{
        ticket.classList.remove('active');
            blur.classList.remove('active');
              document.body.style.overflow ="auto";


    })
    }, 3000);
    
    
}



