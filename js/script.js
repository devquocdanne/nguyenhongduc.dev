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
