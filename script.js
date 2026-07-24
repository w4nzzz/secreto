// ============ SOBRE ============
const envelope = document.getElementById('envelope');
const prompt = document.getElementById('prompt');
const scrollCue = document.getElementById('scrollCue');

envelope.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  prompt.classList.add('hide');
});

scrollCue.addEventListener('click', () => {
  document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
});

// ===== NOTITAS CLICKEABLES =====
const overlay = document.getElementById('noteOverlay');
const modalText = document.getElementById('noteModalText');
const modalImg = document.getElementById('noteModalImg');
const closeBtn = document.getElementById('noteClose');

document.querySelectorAll('.sticky').forEach(note => {
  note.addEventListener('click', () => {
    const text = note.dataset.note || '';
    const img = note.dataset.img || '';

    modalText.textContent = text;
    modalText.style.display = text ? 'block' : 'none';

    if (img) {
      modalImg.src = img;
      modalImg.style.display = 'block';
    } else {
      modalImg.style.display = 'none';
    }

    overlay.classList.add('show');
  });
});

function closeNote() {
  overlay.classList.remove('show');
}

closeBtn.addEventListener('click', closeNote);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeNote();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNote();
});

// ===== CORAZONES FLOTANTES (PNG) =====
const heartsContainer = document.createElement('div');
heartsContainer.className = 'floating-hearts';
document.body.appendChild(heartsContainer);

// pon aquí los nombres de tus PNGs (deben estar en la carpeta img/)
const floatingImages = [
  'img/corazonn.gif',
  'img/kitty1.png',
  'img/kitty2.png',
  'img/kitty3.png',
  'img/mcr.png',
  'img/star.png',
  'img/corazon2.webp',
  'img/corazon3.webp'
];

function spawnHeart() {
  const heart = document.createElement('img');
  heart.className = 'heart';
  heart.src = floatingImages[Math.floor(Math.random() * floatingImages.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
  heart.style.animationDuration = (6 + Math.random() * 5) + 's';
  const size = 48 + Math.random() * 24; // entre 28px y 52px
  heart.style.width = size + 'px';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

setInterval(spawnHeart, 900);