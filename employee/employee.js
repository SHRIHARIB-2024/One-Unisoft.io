function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
