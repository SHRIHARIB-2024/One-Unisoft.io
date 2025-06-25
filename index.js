// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Responsive Nav (Optional)

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bgVideo');
  const brandText = document.querySelector('.brand-change');

  if (video && brandText) {
    video.addEventListener('timeupdate', () => {
      const currentTime = video.currentTime;

      if (currentTime >= 4) {
        brandText.style.color = 'white';
        brandText.style.filter = 'blur(2px)';
        brandText.style.opacity = '0.9';
      } else {
        brandText.style.color = 'red';
        brandText.style.filter = 'blur(0)';
        brandText.style.opacity = '1';
      }
    });
  }
});




