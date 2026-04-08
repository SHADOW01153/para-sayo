// script.js

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show confirmation message
  document.getElementById('confirmation').classList.remove('hidden');

  // Reset the form
  this.reset();

  // Optional: auto-hide confirmation after 5 seconds
  setTimeout(() => {
    document.getElementById('confirmation').classList.add('hidden');
  }, 5000);
});

// ScrollReveal animation
ScrollReveal().reveal('section', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  reset: false
});
