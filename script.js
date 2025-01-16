function chooseActivity(activity, imagePath) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `🎉 Woohoo, Roni! Tonight you'll ${activity} with the amazing Jenya! 🎉`;
  
    // Show modal
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
  
    modal.style.display = 'block';
    modalImage.src = imagePath; // Use the provided image path
    caption.textContent = `Get ready to ${activity} like never before! 🚀`;
}
  
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}
