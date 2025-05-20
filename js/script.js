const img = document.getElementById('movableImage');
const container = document.querySelector('.container');

let isDragging = false;
let offsetX, offsetY;

img.addEventListener('mousedown', (e) => {
  isDragging = true;
  // Tính offset so với vị trí ảnh hiện tại
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

  // Tính vị trí mới theo chuột, trừ offset ban đầu
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Giới hạn ảnh trong vùng container
  const containerRect = container.getBoundingClientRect();

  // Tính max left và top so với container
  const maxX = container.clientWidth - img.clientWidth;
  const maxY = container.clientHeight - img.clientHeight;

  // Giới hạn vị trí x,y không vượt container
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  img.style.left = x + 'px';
  img.style.top = y + 'px';
});
