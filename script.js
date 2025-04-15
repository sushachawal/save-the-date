const card = document.getElementById('card');
const flipButton = document.getElementById('flipButton');
const downloadButton = document.getElementById('downloadButton');

let isFlipped = false;

flipButton.addEventListener('click', () => {
  isFlipped = !isFlipped;
  card.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
});

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'save_the_date_downloadable.png';
  link.download = 'save_the_date_downloadable.png';
  link.click();
});
