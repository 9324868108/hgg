const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const nextBtns = document.querySelectorAll('.btn-next');
const backBtns = document.querySelectorAll('.btn-back');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const selectRoleBtns = document.querySelectorAll('.role-select-btn');

// ======= NAVIGATION LOGIC =======
function showPage(pageId) {
  pages.forEach(page => {
    page.style.display = (page.id === pageId) ? 'block' : 'none';
  });
}

// Nav links (e.g., Home, Features, Pricing)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    showPage(target);
  });
});

// Multi-step onboarding/navigation
nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentStep = btn.closest('.page');
    const nextStepId = btn.getAttribute('data-next');
    currentStep.style.display = 'none';
    document.getElementById(nextStepId).style.display = 'block';
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentStep = btn.closest('.page');
    const prevStepId = btn.getAttribute('data-back');
    currentStep.style.display = 'none';
    document.getElementById(prevStepId).style.display = 'block';
  });
});

// ======= SEARCH FUNCTIONALITY =======
if(searchBtn && searchInput){
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if(query){
      // Placeholder: handle search
      alert('Searching for: ' + query);
      // You can add logic to display search results here.
    }
  });
}

// ======= LOGIN/SIGNUP PLACEHOLDER =======
if(loginBtn){
  loginBtn.addEventListener('click', () => {
    // Placeholder: implement login logic
    alert('Login clicked! Implement authentication here.');
  });
}
if(signupBtn){
  signupBtn.addEventListener('click', () => {
    // Placeholder: implement signup logic
    alert('Signup clicked! Implement registration here.');
  });
}

// ======= ROLE SELECTION PAGE =======
selectRoleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const role = btn.getAttribute('data-role');
    alert('You selected: ' + role);
    // Navigate to next page or store role selection
    // Example: showPage('freelancer-dashboard');
  });
});

// ======= INITIAL PAGE LOAD =======
document.addEventListener('DOMContentLoaded', () => {
  // Example: default to showing homepage
  showPage('home');
});
