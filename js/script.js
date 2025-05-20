// Tạo 30 phần tử tuyết rơi
const snowflakeCount = 30;

for(let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Gán giá trị random cho biến CSS custom --random, --random2, ...
  snowflake.style.setProperty('--random', Math.random());
  snowflake.style.setProperty('--random2', Math.random());
  snowflake.style.setProperty('--random3', Math.random());

  // Random kích cỡ tuyết (5px đến 12px)
  const size = Math.random() * 7 + 5;
  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';

  document.body.appendChild(snowflake);
}

// Kéo thả ảnh di chuyển bên trong container
const img = document.getElementById('movableImage');
const container = document.querySelector('.container');

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

  // Giới hạn vị trí trong container
  const maxX = container.clientWidth - img.clientWidth;
  const maxY = container.clientHeight - img.clientHeight;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  img.style.left = x + 'px';
  img.style.top = y + 'px';
});
