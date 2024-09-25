// Function to toggle content visibility with animation
function toggleContent(id) {
  const content = document.getElementById(id);

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    content.classList.add('visible');
  } else {
    content.classList.remove('visible');
    content.classList.add('hidden');
  }
}
