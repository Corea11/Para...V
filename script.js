document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('envelopeWrapper');
  const bgElements = document.getElementById('bgElements');

  // Abrir / Cerrar la carta
  if (wrapper) {
    wrapper.addEventListener('click', () => {
      wrapper.classList.toggle('open');
    });
  }

  // ========================================================
  // 🌸 FLORES Y CORAZONES FLOTANTES
  // ========================================================
  const items = ['🌸', '🌺', '🌹', '❤️', '✨', '💖', '🌼', '🍃', '💕'];

  function createFloatingItem() {
    if (!bgElements) return;

    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.textContent = items[Math.floor(Math.random() * items.length)];
    item.style.fontSize = `${Math.random() * 18 + 14}px`;
    item.style.left = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 5 + 5;
    item.style.animationDuration = `${duration}s`;

    bgElements.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, duration * 1000);
  }

  // Genera un elemento flotante cada 350ms
  setInterval(createFloatingItem, 350);
});