const statusData = [
        { label: '24/7', color: '#00d4ff', icon: '&' },
        { label: 'To-do', color: '#6366f1', icon: '+' },
        { label: 'In Review', color: '#ffcc00', icon: '📋' },
        { label: 'Design Review', color: '#a855f7', icon: '⧉' },
        { label: 'Rework', color: '#f87171', icon: '↺' },
        { label: 'Done', color: '#22c55e', icon: '✓' },
        { label: 'Not Started', color: '#fb7185', icon: '−' },
        { label: 'Blocked', color: '#ef4444', icon: '✕' },
        { label: 'On Hold', color: '#3b82f6', icon: '⦿' },
        { label: 'Archived', color: '#94a3b8', icon: '↘' }
    ];

    const container = document.getElementById('badge-container');

    // ساخت دونه‌دونه المان‌ها در جاوااسکریپت
    statusData.forEach((data, index) => {
        const badge = document.createElement('div');
        badge.className = 'badge';
        
        // استایل‌دهی رنگی اختصاصی
        badge.style.backgroundColor = `${data.color}15`; // رنگ پس‌زمینه بسیار شفاف
        badge.style.borderColor = `${data.color}88`;    // حاشیه نیمه‌شفاف
        badge.style.boxShadow = `0 0 20px ${data.color}33, inset 0 0 10px ${data.color}22`;
        badge.style.color = data.color; // رنگ متن نزدیک به درخشش
        
        // تنظیم تاخیر انیمیشن شناور بودن برای اینکه همه با هم تکان نخورند
        badge.style.animationDelay = `${index * 0.5}s`;

        badge.innerHTML = `
            <span class="icon">${data.icon}</span>
            <span>${data.label}</span>
        `;

        container.appendChild(badge);


      const observebadge = new IntersectionObserver((enteries1) => {
        enteries1.forEach((entry2)=> {

                  entry2.target.classList.toggle('show', entry2.isIntersecting);

      });
      },
    {
      threshold: 0.3,
      rootMargin: '-50px'
      });
      observebadge.observe(badge);
    })
    
  
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

const instbox = document.querySelector(".instabox");
const hoverlink = document.querySelector("#link44");

function showinstabox() {
  hoverlink.addEventListener("mouseenter", function () {
    instbox.classList.add("show");
  });
  hoverlink.addEventListener("mouseleave", function () {
    instbox.classList.remove("show");
  });
}

showinstabox();
function setupslider() {
  const container = document.getElementById("compareBox");
  const overlay = document.getElementById("afterImg");
  const handle = document.getElementById("handle");

  let isDragging = false;
  let autoMoveDirection = 1; // 1 به راست، -1 به چپ
  let currentPercent = 50;

  // سرعت حرکت خودکار (هرچه کمتر باشد، کندتر است و حرکت گام‌ها کوچک‌تر)
  const speed = 0.2;

  // --- تابع حرکت دهنده اصلی ---
  function moveSlider(pos) {
    const rect = container.getBoundingClientRect();

    // اطمینان از اینکه موقعیت در محدوده کانتینر باشد (0 تا عرض کانتینر)
    if (pos < 0) pos = 0;
    if (pos > rect.width) pos = rect.width;

    const percent = (pos / rect.width) * 100;
    overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = `${percent}%`;

    // به روز رسانی درصد فعلی
    currentPercent = percent;
  }

  // --- تابع انیمیشن خودکار ---
  function animateSlider() {
    if (!isDragging) {
      // فقط در صورتی حرکت کن که کاربر در حال کشیدن نباشد

      // تعیین مقدار حرکت با توجه به سرعت
      currentPercent += autoMoveDirection * speed;

      // بررسی برخورد با مرزها (بین 10% و 90%)
      if (currentPercent >= 70) {
        autoMoveDirection = -1;
      } else if (currentPercent <= 30) {
        autoMoveDirection = 1;
      }

      // تبدیل درصد جدید به مختصات x (برای فراخوانی moveSlider)
      const rect = container.getBoundingClientRect();
      const newPos = (currentPercent / 100) * rect.width;

      moveSlider(newPos);
    }

    // درخواست فریم بعدی برای حرکت روان
    requestAnimationFrame(animateSlider);
  }

  // --- تنظیمات رویدادهای کاربری ---
  const startDrag = () => {
    isDragging = true;
  };
  const endDrag = () => {
    isDragging = false;
  };

  // رویدادهای موس
  handle.addEventListener("mousedown", startDrag);
  window.addEventListener("mouseup", endDrag);
  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = container.getBoundingClientRect();
      moveSlider(e.clientX - rect.left); // ورودی باید موقعیت نسبی باشد
    }
  });

  // رویدادهای لمس
  handle.addEventListener("touchstart", startDrag);
  window.addEventListener("touchend", endDrag);
  container.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const rect = container.getBoundingClientRect();
      moveSlider(e.touches[0].clientX - rect.left); // ورودی باید موقعیت نسبی باشد
    }
  });

  // --- شروع انیمیشن و موقعیت اولیه ---

  // 1. تنظیم موقعیت شروع در وسط
  const rect = container.getBoundingClientRect();
  moveSlider(rect.width / 2);

  // 2. شروع حلقه انیمیشن
  requestAnimationFrame(animateSlider);
}

setupslider();

const tap1 = document.getElementById("radio-1");
const tap2 = document.getElementById("radio-2");
const tap3 = document.getElementById("radio-3");
const tap4 = document.getElementById("radio-4");
const tap5 = document.getElementById("radio-5");
const imge = document.querySelector(".comparison-container");

function taptap() {
  tap1.addEventListener("click", function () {
    imge.innerHTML = "";
    imge.innerHTML = `
    <img src="" id="beforeImg" />
  <img src="" id="afterImg" class="overlay" />
  <div class="slider-handle" id="handle"><div class="ttxx">
    
    </div>
    </div>`;
    setupslider();
  });

  tap2.addEventListener("click", function () {
    imge.innerHTML = "";
    imge.innerHTML = `
    <img src="" id="beforeImg" />
  <img src="" id="afterImg" class="overlay" />
  <div class="slider-handle" id="handle">
  <div class="ttxx">
    </div>
    </div>`;
    setupslider();
  });

  function loadtap3() {
    imge.innerHTML = "";
    imge.innerHTML = `
    <img  src="img/befor.jpg" id="beforeImg" />
  <img src="img/after.jpg" id="afterImg" class="overlay" />
  <div class="slider-handle" id="handle">
  <div class="ttxx">
    </div></div>`;
    setupslider();
  }
  loadtap3();
  tap3.addEventListener("click", loadtap3);

  tap4.addEventListener("click", function () {
    imge.innerHTML = "";
    imge.innerHTML = `
    <img src="img/Picsart_25-11-25_03-15-27-219_upscaled.jpg" id="beforeImg" />
  <img src="img/Picsart_25-11-25_03-15-22-013_upscaled.jpg" id="afterImg" class="overlay" />
  <div class="slider-handle" id="handle">
  <div class="ttxx">
    </div></div>`;
    setupslider();
  });

  tap5.addEventListener("click", function () {
    imge.innerHTML = "";
    imge.innerHTML = `
    <img src="" id="beforeImg" />
  <img src="" id="afterImg" class="overlay" />
  <div class="slider-handle" id="handle">
  <div class="ttxx">
    </div></div>`;
    setupslider();
  });
}

taptap();




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

