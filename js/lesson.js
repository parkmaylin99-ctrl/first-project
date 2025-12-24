const phoneInput = document.querySelector('#phone_input');
const phoneBtn = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regex = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneBtn.addEventListener('click', () => {
  if(regex.test(phoneInput.value)) {
    phoneResult.style.color = "green"
    phoneResult.innerHTML = 'valid'
  } else {
    phoneResult.style.color = "red"
    phoneResult.innerHTML = 'invalid'
  }
})