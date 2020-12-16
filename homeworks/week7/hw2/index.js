document.querySelector('.faq-list').addEventListener('click', (e) => {
  e.preventDefault();
  // 確保有 .card 元素
  const element = e.target.closest('.card');
  if (element) {
    element.classList.toggle('show');
  }
});
