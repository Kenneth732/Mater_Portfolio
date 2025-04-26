const toggle = document.getElementById('eliteToggle');
const navLinks = document.getElementById('eliteNavLinks');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});



// Ultra-Premium Luxury About Section Animation
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.elite-about-section');
  if (!aboutSection) return;
  
  // Initialize elements
  const elementsToAnimate = [
      ...document.querySelectorAll('.elite-title-word'),
      document.querySelector('.elite-section-subtitle'),
      document.querySelector('.elite-image-container'),
      document.querySelector('.elite-about-content'),
      document.querySelector('.elite-tech-badge'),
      document.querySelector('.elite-experience-indicator'),
      ...document.querySelectorAll('.elite-about-text'),
      document.querySelector('.elite-divider'),
      document.querySelector('.elite-skills-tags'),
      document.querySelector('.elite-signature-cta'),
      ...document.querySelectorAll('.elite-decoration')
  ].filter(el => el);
  
  // Set initial state
  elementsToAnimate.forEach(el => {
      if (el.style) {
          const computedStyle = window.getComputedStyle(el);
          if (computedStyle.opacity !== '0') {
              el.style.opacity = '0';
          }
      }
  });
  
  // Animation function
  function animateAboutSection() {
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (sectionPosition < screenPosition) {
          aboutSection.classList.add('active');
          
          // Remove event listener after animation triggers
          window.removeEventListener('scroll', animateAboutSection);
      }
  }
  
  // Image hover effects
  const imageContainer = document.querySelector('.elite-image-container');
  if (imageContainer) {
      imageContainer.addEventListener('mouseenter', () => {
          const badge = imageContainer.querySelector('.elite-badge-inner');
          if (badge) {
              badge.style.transform = 'translateY(-5px)';
          }
      });
      
      imageContainer.addEventListener('mouseleave', () => {
          const badge = imageContainer.querySelector('.elite-badge-inner');
          if (badge) {
              badge.style.transform = 'none';
          }
      });
  }
  
  // Check on load and scroll
  animateAboutSection();
  window.addEventListener('scroll', animateAboutSection);
  
  // Add intersection observer for more precise triggering
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateAboutSection();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  
  observer.observe(aboutSection);
});


// Ultra-Luxury Premium Hero Interactions
document.addEventListener('DOMContentLoaded', function() {
  const luxuryHero = document.querySelector('.luxury-hero');
  if (!luxuryHero) return;
  
  // Initialize elements
  const elementsToAnimate = [
      ...document.querySelectorAll('.luxury-headline-word'),
      document.querySelector('.luxury-subtext'),
      document.querySelector('.luxury-image-container'),
      document.querySelector('.luxury-tech-badge'),
      document.querySelector('.luxury-tech-stack'),
      document.querySelector('.luxury-trust-indicators'),
      ...document.querySelectorAll('.luxury-decoration')
  ].filter(el => el);
  
  // Set initial state
  elementsToAnimate.forEach(el => {
      if (el.style) {
          const computedStyle = window.getComputedStyle(el);
          if (computedStyle.opacity !== '0') {
              el.style.opacity = '0';
          }
      }
  });
  
  // Animation function
  function animateLuxuryHero() {
      const sectionPosition = luxuryHero.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (sectionPosition < screenPosition) {
          luxuryHero.classList.add('active');
          
          // Remove event listener after animation triggers
          window.removeEventListener('scroll', animateLuxuryHero);
      }
  }
  
  // Image hover effects
  const imageContainer = document.querySelector('.luxury-image-container');
  if (imageContainer) {
      imageContainer.addEventListener('mouseenter', () => {
          const badge = imageContainer.querySelector('.luxury-badge-content');
          if (badge) {
              badge.style.transform = 'translateY(-5px)';
          }
      });
      
      imageContainer.addEventListener('mouseleave', () => {
          const badge = imageContainer.querySelector('.luxury-badge-content');
          if (badge) {
              badge.style.transform = 'none';
          }
      });
  }
  
  // Tech stack hover effects
  const techItems = document.querySelectorAll('.luxury-tech-item');
  techItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          const icon = item.querySelector('img');
          if (icon) {
              icon.style.transform = 'scale(1.1)';
          }
      });
      
      item.addEventListener('mouseleave', () => {
          const icon = item.querySelector('img');
          if (icon) {
              icon.style.transform = 'scale(1)';
          }
      });
  });
  
  // Check on load and scroll
  animateLuxuryHero();
  window.addEventListener('scroll', animateLuxuryHero);
  
  // Add intersection observer for more precise triggering
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateLuxuryHero();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  
  observer.observe(luxuryHero);
});


// Quantum Interaction System
document.addEventListener('DOMContentLoaded', function() {
  // Initialize quantum cards
  const quantumCards = document.querySelectorAll('.q-card');
  
  // Create gradient definitions for SVG icons
  const svgNS = "http://www.w3.org/2000/svg";
  quantumCards.forEach(card => {
    const svg = card.querySelector('.quantum-icon svg');
    const defs = document.createElementNS(svgNS, 'defs');
    const gradient = document.createElementNS(svgNS, 'linearGradient');
    gradient.setAttribute('id', 'quantum-gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS(svgNS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#6bc5f8');
    
    const stop2 = document.createElementNS(svgNS, 'stop');
    stop2.setAttribute('offset', '50%');
    stop2.setAttribute('stop-color', '#a162e8');
    
    const stop3 = document.createElementNS(svgNS, 'stop');
    stop3.setAttribute('offset', '100%');
    stop3.setAttribute('stop-color', '#f7b500');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    gradient.appendChild(stop3);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
    
    // Add 3D tilt effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      card.style.transform = `perspective(2000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      
      // Parallax effect for hologram
      const hologram = card.querySelector('.card-hologram');
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      hologram.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(2000px) rotateX(0) rotateY(0)';
    });
  });
  
  // Activate quantum particles on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('quantum-active');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(document.querySelector('.neon-services'));
});

// Quantum Contact Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Animate form inputs on focus
  const inputs = document.querySelectorAll('.holographic-input');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.querySelector('.input-hologram').style.background = 'rgba(107, 197, 248, 0.1)';
      this.parentElement.querySelector('.input-hologram').style.boxShadow = '0 0 15px rgba(107, 197, 248, 0.2)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.querySelector('.input-hologram').style.background = 'rgba(107, 197, 248, 0.05)';
      this.parentElement.querySelector('.input-hologram').style.boxShadow = 'none';
    });
  });
  
  // Activate submit button pulse
  const submitBtn = document.querySelector('.quantum-submit');
  
  submitBtn.addEventListener('mouseenter', function() {
    const pulse = this.querySelector('.submit-pulse');
    pulse.style.animation = 'submit-pulse 2s infinite';
  });
  
  // Network line animation
  const networkLine = document.querySelector('.network-line');
  let position = 0;
  
  function animateNetwork() {
    position += 0.5;
    if (position > 100) position = 0;
    networkLine.style.background = `linear-gradient(to bottom, 
      transparent 0%, 
      rgba(107, 197, 248, 0.3) ${position - 10}%, 
      rgba(107, 197, 248, 0.1) ${position}%, 
      transparent ${position + 10}%)`;
    requestAnimationFrame(animateNetwork);
  }
  
  animateNetwork();
  
  // Activate quantum effects on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('quantum-active');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(document.querySelector('.quantum-contact'));
});