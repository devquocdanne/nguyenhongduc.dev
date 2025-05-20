const img = document.getElementById('movableImage');

let isDragging = false;
let offsetX, offsetY;

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
  if (!isDragging) return;
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Giới hạn trong cửa sổ trình duyệt (tuỳ chọn)
  const maxX = window.innerWidth - img.width;
  const maxY = window.innerHeight - img.height;
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  img.style.left = x + 'px';
  img.style.top = y + 'px';
});
