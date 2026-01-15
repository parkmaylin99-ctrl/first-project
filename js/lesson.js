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


//converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#euro')

// som.oninput = () => {
//   const req = new XMLHttpRequest()
//   req.open('GET', '../data/converter.json')
//   req.setRequestHeader('Content-Type', 'application/json')
//   req.send()
//   req.onload = () => {
//     const data = JSON.parse(req.response)
//     usd.value = (som.value / data.usd).toFixed(2)
//   }
// }

// usd.oninput = () => {
//   const req = new XMLHttpRequest()
//   req.open('GET', '../data/converter.json')
//   req.setRequestHeader('Content-Type', 'application/json')
//   req.send()
//   req.onload = () => {
//     const data = JSON.parse(req.response)
//     som.value = (usd.value * data.usd).toFixed(2)
//   }
// }


converter = (element) => {
  element.oninput = () => {
    const req = new XMLHttpRequest()
  req.open('GET', '../data/converter.json')
  req.setRequestHeader('Content-Type', 'application/json')
  req.send()

  req.onload = () => {
      if(req.status >= 200 && req.status < 400) {
      const data = JSON.parse(req.response)
      const {euro, usd} = data
      if (element.value === '') {
          somInput.value = '';
          usdInput.value = '';
          euroInput.value = '';
          return;
        }
        if(element.id === 'som') {
          usdInput.value = (element.value / usd).toFixed(2);
          euroInput.value = (element.value/ euro).toFixed(2);
        } else if (element.id === 'usd'){
          somInput.value = (element.value * usd).toFixed(2)
          euroInput.value = ((element.value * usd) / euro).toFixed(2);
        } else if (element.id === 'euro'){
          somInput.value = (element.value * euro).toFixed(2)
          usdInput.value = ((element.value * euro) / usd).toFixed(2)
        }
      }
    }
  }
}

converter(somInput)
converter(usdInput)
converter(euroInput)


//card switcher
const next = document.querySelector('#btn-next')
const card = document.querySelector('.card')
const prev = document.querySelector('#btn-prev')
const btnActions = [next, prev];

const TODOS_API = 'https://jsonplaceholder.typicode.com/todos';

let todoId = 1;

  // fetcherTodos(todoId)
const fetcherTodos = (todoId) => {
    fetch(`${TODOS_API}/${todoId}`)
  .then(response => {
  if (!response.ok) {
    card.innerHTML =
    `<p style="color:red">Error occured</p>`
  } else {
    return response.json()
  }
})
  .then(data => {
    const {id, title, completed} = data;
    const color = completed ? 'green' : 'red';
    card.style.borderColor = color;
    card.innerHTML = `
    <p>ID: ${id}</p>
    <p>title -> ${title}</p>
    <p style="color:${color}">status -> ${completed ? 'finished' : 'pending'}</p>
    `
  })
  }
  fetcherTodos(todoId);
btnActions.forEach((buttons) => {
  buttons.addEventListener('click', (event) => {
  if (event.currentTarget.id === 'btn-next') {
   todoId = (todoId >= 200) ? 1 : todoId + 1; 
  } else if (event.currentTarget.id === 'btn-prev'){
    todoId = (todoId <= 1) ? 200 : todoId - 1; 
  }
  fetcherTodos(todoId);
})
})



//дз6.2
const POSTS = 'https://jsonplaceholder.typicode.com/posts'

fetch(POSTS)
.then(response => {
  if (!response.ok) {
    throw Error(`Ошибка ${response.status}`)
  } else {
    return response.json()
  }
}
)
.then(allPosts => {
  //в виде строки
  // allPosts.forEach(post => {
  //   const {id, title, body} = post;
  // console.log(`
  //    id:${id}
  //    title:${title}
  //    body:${body}
  //    `
  // )
  // });

  //в виде массива
  console.log(allPosts);
})