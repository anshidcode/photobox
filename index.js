// Add smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Sidebar navigation: show/hide view sections
document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');

    // set active class on sidebar
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    // hide all views, then show target
    document.querySelectorAll('.view').forEach(v => {
      v.style.display = 'none';
    });
    const target = document.getElementById(targetId);
    if (target) target.style.display = '';

    // scroll top of content for UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Settings actions
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    // Simple placeholder behavior for logout
    alert('Logged out (placeholder).');
    // In a real app, you'd clear auth and redirect.
  });
}

const helpBtn = document.getElementById('help-btn');
if (helpBtn) {
  helpBtn.addEventListener('click', () => {
    alert('Help: For assistance, contact: anshidcode@example.com');
  });
}

// Ensure the Home view is visible on load and sidebar reflects it
window.addEventListener('DOMContentLoaded', () => {
  const homeItem = document.querySelector('.sidebar-item[data-target="home-section"]');
  if (homeItem) homeItem.classList.add('active');
  const home = document.getElementById('home-section');
  if (home) home.style.display = '';
  // hide other views
  document.querySelectorAll('.view').forEach(v => {
    if (v.id !== 'home-section') v.style.display = 'none';
  });
});
