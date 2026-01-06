function lockscroll(){
  document.documentElement.style.overflow = "hidden";
}
function unlockscroll(){
  document.documentElement.style.overflow ="";
}

const mpOverlay = document.getElementById("mpOverlay");
const mpModal = document.getElementById("mpModal");
const mpDragArea = document.getElementById("mpDragArea");

let mpStartY = 0;
let mpCurrentY = 0;
let mpDragging = false;


const mpServicesData = {

ppf: { title : "PPF Protection",
        text : "محافظ کامل بدنه با کاور شفاف ضد خش",
        features : ["self-healing film","anti scratch", "uv protection", "high gloss finish"]
},

ceramic : {
  title : "Ceramic Coating",
  text : "سرامیک نانو چندلایه",
   features : ["self-healing film","anti scratch", "uv protection", "high gloss finish"]

},
detailing : {
  title : "Detailing",
  text : "سرامیک نانو چندلایه",
   features : ["self-healing film","anti scratch", "uv protection", "high gloss finish"]

},
painting : {
  title : "Painting",
  text : "سرامیک نانو چندلایه",
   features : ["self-healing film","anti scratch", "uv protection", "high gloss finish"]

},
light : {
  title : "headlight services",
  text : "سرامیک نانو چندلایه",
   features : ["self-healing film","anti scratch", "uv protection", "high gloss finish"]

},


}


window.mpOpenModal = function (serviceKey){

  const dataa = mpServicesData[serviceKey];
  if(!dataa) return;

  document.getElementById("mptitle").innerText = dataa.title;
  document.getElementById("mptext").innerText = dataa.text;
  const featurebox = document.getElementById("mpfeatures");
  const navvi = document.querySelector('.nav');
  featurebox.innerText = "";
  dataa.features.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    featurebox.appendChild(li);
  });
  mpModal.style.transition = "none";
  mpModal.style.transform = "translateY(100%)";
  mpOverlay.style.display = "flex";
 lockScroll();


  setTimeout(() => {
    mpOverlay.classList.add("mp-active");
    mpModal.style.transition =
      "transform .4s cubic-bezier(.25,.46,.45,.94)";
    mpModal.style.transform = "translateY(0)";
  }, 50);


}


  



function mpCloseModal() {
  mpModal.style.transition =
    "transform .4s cubic-bezier(.25,.46,.45,.94)";
  mpModal.style.transform = "translateY(100%)";
  mpOverlay.classList.remove("mp-active");

  setTimeout(() => {
    mpOverlay.style.display = "none";
    unlockScroll();
  }, 400);
}

/* Drag Logic */
mpDragArea.addEventListener("touchstart", e => {
  mpStartY = e.touches[0].clientY;
  mpDragging = true;
  mpModal.style.transition = "none";
});

window.addEventListener(
  "touchmove",
  e => {
    if (!mpDragging) return;
    mpCurrentY = e.touches[0].clientY - mpStartY;
    if (mpCurrentY > 0) {
      mpModal.style.transform = `translateY(${mpCurrentY}px)`;
    }
  },
  { passive: false }
);

window.addEventListener("touchend", () => {
  if (!mpDragging) return;
  mpDragging = false;

  if (mpCurrentY > 150) {
    mpCloseModal();
  } else {
    mpModal.style.transition = "transform .3s ease-out";
    mpModal.style.transform = "translateY(0)";
  }
  mpCurrentY = 0;
});





gsap.registerPlugin(ScrollTrigger);

        // ۱. تکه‌تکه کردن متن به کلمات
        const textElement = document.getElementById('reveal-text');
        const wordz = textElement.innerText.split(" ");
        textElement.innerHTML = "";

        wordz.forEach(word => {
            const span = document.createElement("span");
            span.innerHTML = word + "&nbsp;";
            span.classList.add("word");
            textElement.appendChild(span);
        });

        // ۲. تنظیم انیمیشن برای پررنگ شدن در ۴۰٪ پایین صفحه
        gsap.to(".word", {
            scrollTrigger: {
                trigger: ".reveal-text",
                // شروع: وقتی بالای متن به ۶۰٪ ارتفاع مرورگر (یعنی ۴۰٪ مانده به پایین) رسید
                start: "top 70%", 
                // پایان: وقتی انتهای متن به ۲۰٪ بالای صفحه رسید
                end: "bottom 50%",
                scrub: true, 
                markers: false // اگر این را true کنید، خطوط راهنما را می‌بینید
            },
            color:"rgb(255, 98, 0)", // تبدیل به مشکی
            opacity: 1,
            stagger: 0.9,
            ease: "none"
        });
const redCar = "img/image04.webp";
    const whiteCar = "img/image01.webp";
    const blackCar = "img/image02.webp";
    const orangeCar = "img/image03.webp";

    function changeCar(imagePath) {
      document.getElementById('carImage').src = imagePath;
    }



const words = [
  { text: "Color", color: "#9EDC2C" },
  { text: "Anti UVI",        color: "#2F6BFF" },
  { text: "Cover",  color: "#FF6B2F" },
  { text: "Caliper",          color: "#9B2FFF" },
  { text: "Car",          color: "#ff2fafff" },
  { text: "Design",          color: "#2ffcffff" },
  { text: "HeadLight",          color: "#cbff2fff" },
  { text: "Vibe",          color: "#ff2f2fff" }
];

const highlight = document.getElementById("highlight");
const measure = document.getElementById("measure");

let index0 = 0;
let locked = false;

function measureWidth(text) {
  measure.textContent = text;
  return measure.offsetWidth;
}
function update() {
  if (locked) return;
  locked = true;

  index0 = (index0 + 1) % words.length;   // ✅ خود index0 آپدیت میشه
  const next = words[index0];             // ✅ کلمه درست

  const w = measureWidth(next.text);

  requestAnimationFrame(() => {
    highlight.style.width = w + "px";

    requestAnimationFrame(() => {
      highlight.textContent = next.text;
      highlight.style.backgroundColor = next.color;

      setTimeout(() => locked = false, 600);
    });
  });
}

// init
highlight.style.backgroundColor = words[0].color;
highlight.style.width = measureWidth(words[0].text) + "px";

setInterval(update, 1800);

window.addEventListener("resize", () => {
  highlight.style.width = measureWidth(words[index0].text) + "px";
});




const voids = document.querySelectorAll('.void-card');

let lastScrollY = window.scrollY;
let scrollSpeed = 0;
let isOnCard = false;

// محاسبه progress کارت (0 تا 1)
function getScrollProgress(obscura){
  const rect = obscura.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const cardHeight = rect.height;
  let veil = 1 - (rect.top - (windowHeight - cardHeight)) / cardHeight;
  return Math.min(Math.max(veil,0),1);
}

// متن و عدد proportional با تاخیر
function animateGlyphAndFlux(obscura){
  const glyphEl = obscura.querySelector('.glyph');
  const fluxEl = obscura.querySelector('.flux');

  if(!glyphEl.dataset.sigils){
    const sigils = glyphEl.innerText.split(' ');
    glyphEl.dataset.sigils = JSON.stringify(sigils);
    
  }
  const sigils = JSON.parse(glyphEl.dataset.sigils);

  let veil = getScrollProgress(obscura);

  // تاخیر شروع (مثلاً 30٪)
  const threshold = 0.3;
  let aether = (veil - threshold) / (1 - threshold);
  aether = Math.min(Math.max(aether,0),1);

  // نمایش کلمات
  const numRunesToShow = Math.floor(aether * sigils.length);
  const runes = glyphEl.querySelectorAll('span');
  runes.forEach((rune,i)=>{
    if(i<numRunesToShow){
      rune.style.opacity=1;
      rune.style.transform='translateY(0)';
    } else {
      rune.style.opacity=0;
      rune.style.transform='translateY(12px)';
    }
  });

  // عدد proportional به aether
  const two = document.querySelector('.two');
  const target = +fluxEl.dataset.target;
  const current = Math.floor(aether * target);
  
  fluxEl.textContent = current + "-Days";
}

// تشخیص اینکه کاربر روی کارت است
function checkOnCard(){
  isOnCard = false;
  voids.forEach(obscura => {
    const rect = obscura.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      isOnCard = true;
    }
  });
}

// MAIN LOOP
window.addEventListener('scroll', () => {
  voids.forEach(obscura => animateGlyphAndFlux(obscura));
});

// محاسبه سرعت اسکرول
window.addEventListener('scroll', () => {
  scrollSpeed = Math.abs(window.scrollY - lastScrollY);
  lastScrollY = window.scrollY;
});

// مقاومت اسکرول روی کارت‌ها
window.addEventListener('wheel', (e) => {
  checkOnCard();
  if(isOnCard){
    e.preventDefault();
    window.scrollBy({
      top: e.deltaY * 0.2, // عدد کمتر → اسکرول کندتر
      left: 0,
      behavior: 'auto'
    });
  }
}, { passive: false });







const txxc = document.querySelectorAll('.shey, .bany, .car, .boz, .intro-text');

const observerall = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

txxc.forEach(item => {
  observerall.observe(item);
});


const assets = {
    white: { b: "img/white.jpeg", a: "img/nowhite.jpeg" },
    red: { b: "img/red.jpeg", a: "img/nored.jpeg" },
    blue: { b: "img/blue.jpeg", a: "img/noblue.jpeg" },
    black: { b: "img/black.jpeg", a: "img/noblack.jpeg" }
};

let isDragging = false;
let autoMoveDirection = 1;
let currentPercent = 50;
const speed = 0.15;

const container = document.getElementById("compareBox");
const overlay = document.getElementById("afterImg");
const handle = document.getElementById("handle");
const productArea = document.getElementById("p-area");

function moveSlider(percent) {
    percent = Math.max(0, Math.min(percent, 100));
    overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = percent + "%";
    currentPercent = percent;
}

function animateSlider() {
    if (!isDragging) {
        currentPercent += autoMoveDirection * speed;
        if (currentPercent >= 85) autoMoveDirection = -1;
        if (currentPercent <= 15) autoMoveDirection = 1;
        moveSlider(currentPercent);
    }
    requestAnimationFrame(animateSlider);
}

function updateColor(color, el) {
    document.querySelectorAll(".color-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    beforeImg.src = assets[color].b;
    afterImgSrc.src = assets[color].a;
}

function togglePanel() {
    
        const panel = document.getElementById("config-panel");
        const frame = document.querySelector('.device-frame');
        panel.classList.toggle("collapsed");
        frame.classList.toggle('hight');
        
            
        
        productArea.classList.toggle("pushed-up");
    
}

handle.addEventListener("mousedown", () => isDragging = true);
window.addEventListener("mouseup", () => isDragging = false);
window.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    moveSlider(((e.clientX - rect.left) / rect.width) * 100);
});

animateSlider();


burger = document.querySelector(".bgmicon");
const sidebar = document.querySelector(".sidebar");
const bluur = document.querySelector(".overlaymain");

function clickburger() {
  burger.addEventListener("click", function () {
    bluur.classList.toggle("active");
    sidebar.classList.toggle("active");
  });
}

clickburger();

const items = document.querySelectorAll(".fadetxt");
const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

items.forEach((item) => {
  observer.observe(item);
});

// const instbox = document.querySelector(".instabox");
// const hoverlink = document.querySelector("#link44");

// function showinstabox() {
//   hoverlink.addEventListener("mouseenter", function () {
//     instbox.classList.add("show");
//   });
//   hoverlink.addEventListener("mouseleave", function () {
//     instbox.classList.remove("show");
//   });
// }

// showinstabox();
// function setupslider() {
//   const container = document.getElementById("compareBox");
//   const overlay = document.getElementById("afterImg");
//   const handle = document.getElementById("handle");

//   let isDragging = false;
//   let autoMoveDirection = 1; // 1 به راست، -1 به چپ
//   let currentPercent = 50;

//   // سرعت حرکت خودکار (هرچه کمتر باشد، کندتر است و حرکت گام‌ها کوچک‌تر)
//   const speed = 0.2;

//   // --- تابع حرکت دهنده اصلی ---
//   function moveSlider(pos) {
//     const rect = container.getBoundingClientRect();

//     // اطمینان از اینکه موقعیت در محدوده کانتینر باشد (0 تا عرض کانتینر)
//     if (pos < 0) pos = 0;
//     if (pos > rect.width) pos = rect.width;

//     const percent = (pos / rect.width) * 100;
//     overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
//     handle.style.left = `${percent}%`;

//     // به روز رسانی درصد فعلی
//     currentPercent = percent;
//   }

//   // --- تابع انیمیشن خودکار ---
//   function animateSlider() {
//     if (!isDragging) {
//       // فقط در صورتی حرکت کن که کاربر در حال کشیدن نباشد

//       // تعیین مقدار حرکت با توجه به سرعت
//       currentPercent += autoMoveDirection * speed;

//       // بررسی برخورد با مرزها (بین 10% و 90%)
//       if (currentPercent >= 70) {
//         autoMoveDirection = -1;
//       } else if (currentPercent <= 30) {
//         autoMoveDirection = 1;
//       }

//       // تبدیل درصد جدید به مختصات x (برای فراخوانی moveSlider)
//       const rect = container.getBoundingClientRect();
//       const newPos = (currentPercent / 100) * rect.width;

//       moveSlider(newPos);
//     }

//     // درخواست فریم بعدی برای حرکت روان
//     requestAnimationFrame(animateSlider);
//   }

//   // --- تنظیمات رویدادهای کاربری ---
//   const startDrag = () => {
//     isDragging = true;
//   };
//   const endDrag = () => {
//     isDragging = false;
//   };

//   // رویدادهای موس
//   handle.addEventListener("mousedown", startDrag);
//   window.addEventListener("mouseup", endDrag);
//   window.addEventListener("mousemove", (e) => {
//     if (isDragging) {
//       const rect = container.getBoundingClientRect();
//       moveSlider(e.clientX - rect.left); // ورودی باید موقعیت نسبی باشد
//     }
//   });

//   // رویدادهای لمس
//   handle.addEventListener("touchstart", startDrag);
//   window.addEventListener("touchend", endDrag);
//   container.addEventListener("touchmove", (e) => {
//     if (isDragging) {
//       const rect = container.getBoundingClientRect();
//       moveSlider(e.touches[0].clientX - rect.left); // ورودی باید موقعیت نسبی باشد
//     }
//   });

//   // --- شروع انیمیشن و موقعیت اولیه ---

//   // 1. تنظیم موقعیت شروع در وسط
//   const rect = container.getBoundingClientRect();
//   moveSlider(rect.width / 2);

//   // 2. شروع حلقه انیمیشن
//   requestAnimationFrame(animateSlider);
// }

// setupslider();

// const tap1 = document.getElementById("radio-1");
// const tap2 = document.getElementById("radio-2");
// const tap3 = document.getElementById("radio-3");
// const tap4 = document.getElementById("radio-4");
// const tap5 = document.getElementById("radio-5");
// const imge = document.querySelector(".comparison-container");

// function taptap() {
//   tap1.addEventListener("click", function () {
//     imge.innerHTML = "";
//     imge.innerHTML = `
//     <img src="" id="beforeImg" />
//   <img src="" id="afterImg" class="overlay" />
//   <div class="slider-handle" id="handle"><div class="ttxx">
    
//     </div>
//     </div>`;
//     setupslider();
//   });

//   tap2.addEventListener("click", function () {
//     imge.innerHTML = "";
//     imge.innerHTML = `
//     <img src="" id="beforeImg" />
//   <img src="" id="afterImg" class="overlay" />
//   <div class="slider-handle" id="handle">
//   <div class="ttxx">
//     </div>
//     </div>`;
//     setupslider();
//   });

//   function loadtap3() {
//     imge.innerHTML = "";
//     imge.innerHTML = `
//     <img  src="img/befor.jpg" id="beforeImg" />
//   <img src="img/after.jpg" id="afterImg" class="overlay" />
//   <div class="slider-handle" id="handle">
//   <div class="ttxx">
//     </div></div>`;
//     setupslider();
//   }
//   loadtap3();
//   tap3.addEventListener("click", loadtap3);

//   tap4.addEventListener("click", function () {
//     imge.innerHTML = "";
//     imge.innerHTML = `
//     <img src="img/Picsart_25-11-25_03-15-27-219_upscaled.jpg" id="beforeImg" />
//   <img src="img/Picsart_25-11-25_03-15-22-013_upscaled.jpg" id="afterImg" class="overlay" />
//   <div class="slider-handle" id="handle">
//   <div class="ttxx">
//     </div></div>`;
//     setupslider();
//   });

//   tap5.addEventListener("click", function () {
//     imge.innerHTML = "";
//     imge.innerHTML = `
//     <img src="" id="beforeImg" />
//   <img src="" id="afterImg" class="overlay" />
//   <div class="slider-handle" id="handle">
//   <div class="ttxx">
//     </div></div>`;
//     setupslider();
//   });
// }

// taptap();




const cardAnimation = document.querySelectorAll('.card');

const observebox = new IntersectionObserver((enteries) => {
  enteries.forEach(entry1 =>{
if(entry1.intersectionRatio >= 0.7){
entry1.target.classList.add('active');
}else{
  entry1.target.classList.remove('active');
}
  });

},
{
  threshold: [0.7]
}
);
cardAnimation.forEach(card =>{
observebox.observe(card);
})


// function infiniteSlide(selector, direction = "left", speed = 2) {
//   const row = document.querySelector(selector);
//   const parent = row.parentElement;

//   // ساخت نسخه دوم
//   const clone = row.cloneNode(true);
//   parent.appendChild(clone);

//   let pos1 = 0;
//   let width = row.scrollWidth;
//   let pos2 = direction === "left" ? width : -width;

//   function loop() {
//     if (direction === "left") {
//       pos1 -= speed;
//       pos2 -= speed;

//       if (pos1 <= -width) pos1 = pos2 + width;
//       if (pos2 <= -width) pos2 = pos1 + width;

//     } else {
//       pos1 += speed;
//       pos2 += speed;

//       if (pos1 >= width) pos1 = pos2 - width;
//       if (pos2 >= width) pos2 = pos1 - width;
//     }

//     row.style.transform = `translateX(${pos1}px)`;
//     clone.style.transform = `translateX(${pos2}px)`;

//     requestAnimationFrame(loop);
//   }

//   loop();
// }

// infiniteSlide(".row1", "left", 2);
// infiniteSlide(".row2", "right", 2);

// const boxh = document.querySelector('.services');

// boxh.addEventListener('mouseenter',function(){
//   currentSpeed = slowSpeed;
// })
// boxh.addEventListener('mouseleave', function(){
//   currentSpeed = speed;
// })

window.addEventListener("scroll", () => {
  const box = document.querySelector(".glass-radio-group");
  const totalH = document.documentElement.scrollHeight - window.innerHeight;
  const totalseven = document.documentElement.scrollHeight - window.innerHeight;
  const thirty = totalH * 0.15;
  const seventh = totalseven * 0.8;
  if (window.scrollY >= thirty) {
    box.classList.add("active");
    box.style.transition = "0.5s ease";
  } else if (window.scrollY <= thirty) {
    box.classList.remove("active");
  }
  if (window.scrollY >= seventh) {
    box.classList.remove("active");
  }
});

/* =========================
   1. STATE & DATA
========================= */

const videos = [
  "img/12.mp4",
  "img/12.mp4",
  "img/12.mp4",
  "img/12.mp4"
];

const storytxt = [
  "first story <br>this is for you",
  "sec story <br>hi baby hope love",
  "third story <br> come to my house hony",
  "forth story <br> lets play ps5 together"
];

let index = 0;
let raf = null;
let storyFocused = false;

function lockscroll(){
  document.documentElement.style.overflow = "hidden";
}
function unlockscroll(){
  document.documentElement.style.overflow ="";
}

/* =========================
   2. DOM ELEMENTS
========================= */


const storySection = document.getElementById("storySectiion");
const video = document.getElementById("videomain");
const bars = document.querySelectorAll(".bar span");
const navRight = document.querySelector(".nav1.right1");
const navLeft = document.querySelector(".nav1.left1");
const exitlogo = document.querySelector(".mainLogo");
const navShow = document.querySelector('.nav');
const bgmicon = document.querySelector('.bgmicon');
const signbutt = document.getElementById('sign');


/* =========================
   3. EXIT STORY
========================= */

exitlogo.addEventListener("click", () => {
  
  signbutt.classList.remove('story');
  navShow.classList.remove('transform');
  bgmicon.classList.remove('show');
  navShow.classList.remove('story')
  unlockscroll();
  storySection.style.opacity = "0";
  storySection.style.transition = "opacity 1s ease";
  setTimeout(() => {
    storySection.style.display = "none";
  }, 1000);
  
});

/* =========================
   4. VIDEO LOADER
========================= */
function loadVideo(i) {
  lockscroll();
  signbutt.classList.add('story');
  navShow.classList.add('story')
  bgmicon.classList.add('show');
  bars.forEach(b => (b.style.width = "0%"));
  cancelAnimationFrame(raf);

  video.pause();
 
  video.preload = "auto";
  video.src = videos[i];
  video.load();

  video.onloadeddata = () => {
    video.play();

    video.style.opacity = 1;
    video.style.transition = "opacity 0.2s ease";
    
    if(index === videos.length -1){
      
    navShow.classList.add('story');
      navShow.classList.add('transform');
  }else{
    navShow.classList.remove('transform');
  }

    // فقط نمایش ضربدر روی آخرین ویدیو
    exitlogo.style.opacity = i === videos.length - 1 ? 1 : 0;
  };
}

/* =========================
   5. txt bar
========================= */

function updatebartxt(i){
  const txt = document.getElementById('bartxt');
  txt.innerHTML = storytxt[i] || "";
   
  txt.classList.remove('animate');
  void txt.offsetWidth;

  txt.classList.add('animate');
  


  

  
}



/* =========================
   5. PROGRESS BAR
========================= */

function animateBar() {
  if (!video.duration) return;

  bars[index].style.width =
    (video.currentTime / video.duration) * 100 + "%";

  raf = requestAnimationFrame(animateBar);
}

video.onplay = () => {
  updatebartxt(index);
  cancelAnimationFrame(raf);
  animateBar();
};

video.onpause = () => {
  cancelAnimationFrame(raf);
};

/* =========================
   6. AUTO NEXT VIDEO
========================= */

video.onended = () => {
  index++;
  
  
  if (index < videos.length) {
    
    
    loadVideo(index);
  }
  
};



/* =========================
   7. MANUAL NAVIGATION
========================= */

navRight.onclick = () => {
  if (index < videos.length - 1) {
    index++;
    
    loadVideo(index);
  }
};

navLeft.onclick = () => {
  index = Math.max(index - 1, 0);
  
  loadVideo(index);
};

/* =========================
   8. OPTIONAL AUTO FOCUS
========================= */

window.addEventListener("scroll", () => {
  if (storyFocused) return;

  const rect = storySection.getBoundingClientRect();

  if (
    rect.top <= window.innerHeight * 0.3 &&
    rect.bottom >= window.innerHeight * 0.7
  ) {
    storyFocused = true;
    storySection.scrollIntoView({ behavior: "smooth" });
  }
});

/* =========================
   9. INIT
========================= */

loadVideo(index);

