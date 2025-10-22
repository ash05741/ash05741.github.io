// Fade-in 
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
