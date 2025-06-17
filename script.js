// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close when clicking outside
window.addEventListener('click', function (e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const icon = document.querySelector('.theme-toggle i');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

function toggleMenu() {
  document.getElementById('navbar-right').classList.toggle('active');
}

// Auto close menu when clicking any nav link
document.querySelectorAll('.navbar-right a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbar-right').classList.remove('active');
  });
});
function openModal(title, type, features, tech, github, live, imageSrc) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-type').innerText = type;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featuresList.appendChild(li);
  });

  const techContainer = document.getElementById('modal-tech');
  techContainer.textContent = tech.join(', '); 

  document.getElementById('modal-github').href = github;
  document.getElementById('modal-live').href = live;
  document.getElementById('modal-image').src = imageSrc;

  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
} 

const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});

document.getElementById("logo-refresh").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // or use: location.reload();
});
