const img = document.getElementById('movableImage');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

img.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - img.offsetLeft;
  offsetY = e.clientY - img.offsetTop;
  img.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  img.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Giới hạn ảnh không ra ngoài màn hình
    const maxX = window.innerWidth - img.offsetWidth;
    const maxY = window.innerHeight - img.offsetHeight;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    img.style.left = x + 'px';
    img.style.top = y + 'px';
  }
});
