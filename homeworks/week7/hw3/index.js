// 新增代辦事項
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = document.querySelector('.input');
  if (!value) {
    return;
  }
  const todo = document.createElement('li');
  todo.classList.add('list-item', 'd-flex', 'justify-content-between', 'align-items-center');
  todo.innerHTML = `
    <div class="input-group">
        <input type="checkbox" name="todo">
        <label>${value}</label>
    </div>
    <a href="#" class="remove-btn">
        <img src="./close-24px.svg" alt="close icon">
    </a>
    `;
  document.querySelector('.list').appendChild(todo);
  document.querySelector('.input').value = '';
});

document.querySelector('.list').addEventListener('click', (e) => {
  console.log(e.target);
  // 刪除
  if (e.target.parentNode.classList.contains('remove-btn')) {
    e.target.parentNode.parentNode.remove();
  }
  // 標記完成或未完成
  if (e.target.checked) {
    e.target.parentNode.parentNode.classList.add('checked');
  } else {
    e.target.parentNode.parentNode.classList.remove('checked');
  }
});
