// JavaScript with animateCurrentSlide structure for all 13 slides

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('counter');
  const dots = document.getElementById('dots');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    counter.textContent = `${index + 1}/${slides.length}`;
    updateDots(index);
    animateCurrentSlide();
  }

  function updateDots(activeIndex) {
    dots.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === activeIndex) dot.classList.add('active');
      dots.appendChild(dot);
    });
  }

  // Animations for each slide
  function animateCurrentSlide() {

     // 🟦 Slide 0 **************************************
    if (currentSlide === 0) {
      gsap.from("#Slide-0-01", { scale: 0.8, opacity: 0, duration: 1 });
    }

    // 🟦 Slide 1 **************************************
    if (currentSlide === 1) {
      gsap.from("#Slide-1-01", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
      gsap.from("#Slide-1-02", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
      gsap.from("#Slide-1-03", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
    }

    // 🟦 Slide 2 **************************************
    if (currentSlide === 2) {
      gsap.from("#Slide-2-01", { y: -100, opacity: 0, duration: 1 });
      gsap.from("#Slide-2-02", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
      gsap.from("#Slide-2-03", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
    }

    // 🟦 Slide 3 **************************************
    if (currentSlide === 3) {
      gsap.from("#Slide-3-01", { scale: 0.8, opacity: 0, duration: 1 });
      gsap.from("#Slide-3-02", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
      gsap.from("#Slide-3-03", { opacity: 0, duration: 1, delay: 1 });
    }
      // 🟦 Slide 4 **************************************
      if (currentSlide === 4) {
        gsap.from("#Slide-4-06", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
        gsap.from("#Slide-4-02", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
        gsap.from("#Slide-4-07", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
      }

      if (currentSlide === 5) {
        gsap.from("#Slide-5-02", { y: -100, opacity: 0, duration: 1 });
        gsap.from("#Slide-5-03", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.from("#Slide-5-04", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
      }

    if (currentSlide === 6) {
        gsap.from("#Slide-6-01", { scale: 0.8, opacity: 0, duration: 1 });
        gsap.from("#Slide-6-02", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
        gsap.from("#Slide-6-03", { opacity: 0, duration: 1, delay: 1 });
      }

      if (currentSlide === 7) {
        gsap.from("#Slide-7-03", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
        gsap.from("#Slide-7-04", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
        gsap.from("#Slide-7-06", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
      }
  
      if (currentSlide === 8) {
        gsap.from("#Slide-8-05", { y: -100, opacity: 0, duration: 1 });
        gsap.from("#Slide-8-08", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.from("#Slide-8-04", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
      }
   
   if (currentSlide === 9) {
        gsap.from("#Slide-9-0", { scale: 0.8, opacity: 0, duration: 1 });
        gsap.from("#Slide-9-02", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
        gsap.from("#Slide-9-03", { opacity: 0, duration: 1, delay: 1 });
      }

    
      if (currentSlide === 10) {
        gsap.from("#Slide-10-02", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
        gsap.from("#Slide-10-05", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
        gsap.from("#Slide-10-04", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
      }

      if (currentSlide === 11) {
        gsap.from("#Slide-11-05", { y: -100, opacity: 0, duration: 1 });
        gsap.from("#Slide-11-01", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.from("#Slide-11-03", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
      }

       
   if (currentSlide === 12) {
    gsap.from("#Slide-12-07", { scale: 0.8, opacity: 0, duration: 1 });
    gsap.from("#Slide-12-02", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from("#Slide-12-03", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from("#Slide-12-04", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
  }

  if (currentSlide === 13) {
    gsap.from("#Slide-13-03", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
    gsap.from("#Slide-13-04", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
    gsap.from("#Slide-13-06", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
  }
   
  }

  document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // loop backward
    showSlide(currentSlide);
  });

  document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // loop forward
    showSlide(currentSlide);
  });

  document.body.addEventListener("click", function startMusic() {
    const music = document.getElementById("bg-music");
    console.log("Trying to play music"); // DEBUG
    music.volume = 0.3;
    music.play().catch((e) => console.error("Audio error:", e));
    document.body.removeEventListener("click", startMusic);
  });

  document.body.addEventListener("click", function unmuteMusic() {
    const music = document.getElementById("bg-music");
    music.muted = false;
    music.volume = 0.3;
    document.body.removeEventListener("click", unmuteMusic);
  });
  
  document.getElementById("mute-btn").addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.muted = !music.muted;
    document.getElementById("mute-btn").textContent = music.muted ? "🔇 Unmute" : "🔊 Mute";
  });

  // Initialize first slide
  showSlide(currentSlide);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      currentSlide = (currentSlide + 1) % slides.length; // loop forward
      showSlide(currentSlide);
    } else if (event.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // loop backward
      showSlide(currentSlide);
    }
  });
});
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
}

