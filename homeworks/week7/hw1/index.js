document
  .querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const elements = document.querySelectorAll('.required');
    const radioGroups = document.querySelectorAll('.required-radio');
    let isValid = true;
    const values = {};
    let hasError = false;
    // 檢查填寫資料 input
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      const input = element.querySelector('input');
      if (input) {
        values[input.name] = input.value;
        if (!input.value) {
          element.classList.add('error-display');
          isValid = false;
        } else {
          element.classList.remove('error-display');
        }
        if (!isValid) {
          hasError = true;
        } else {
          element.classList.remove('error-display');
        }
      }
    }
    // 檢查 radio
    if (radioGroups.length) {
      for (let i = 0; i < radioGroups.length; i += 1) {
        const radioGroup = radioGroups[i];
        const radios = radioGroup.querySelectorAll('input');
        const hasValue = [...radios].some(radio => radio.checked);
        if (!hasValue) {
          radioGroup.classList.add('error-display');
          isValid = false;
        } else {
          radioGroup.classList.remove('error-display');
        }
        if (!isValid) {
          hasError = true;
        } else {
          values[radioGroup.querySelector('input').name] = radioGroup.querySelector('input:checked').value;
          radioGroup.classList.remove('error-display');
          hasError = false;
        }
      }
    }
    // 是否有錯誤
    console.log(hasError);
    if (!hasError) {
      /* eslint-disable no-alert, no-console */
      alert(`
            暱稱：${values.nickname}
            電子郵件：${values.email}
            手機號碼：${values.phone}
            報名類型: ${values['sign-up']}
            如何得知活動：${values.activitySource}
            `);
      /* eslint-enable no-alert */
    }
  });
