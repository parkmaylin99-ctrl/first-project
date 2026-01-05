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


const tabBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let intervalId;

const hideBlocks = () => {
  tabBlocks.forEach((item) => {
    item.style.display = 'none'
  });
  tabs.forEach((item) => {
    item.classList.remove('tab_content_item_active')
  })
};

const showBlock = (index = 0) => {
  tabBlocks[index].style.display = 'block'
  tabs[index].classList.add('tab_content_item_active') 
};

hideBlocks();
showBlock()

tabsParent.addEventListener('click', (event) => {
  if(event.target.tagName.toLowerCase() === 'button'){
    tabs.forEach((item, index) => {
      if(event.target === item){
        clearInterval(intervalId);
        hideBlocks();
        showBlock(index);
        intervalId = setInterval(() => {
          index++;
          if(index > tabs.length - 1){
            index = 0;
          }
          hideBlocks();
          showBlock(index);
        }, 3000)
      }
    })
  }
})

let index = 0;

intervalId = setInterval(() => {
          index++;
          if(index > tabs.length - 1){
            index = 0;
          }
        hideBlocks()
        showBlock(index);
        }, 3000)
