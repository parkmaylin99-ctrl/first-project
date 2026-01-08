const gmailInput = document.querySelector('#gmail_input');
const gmailBtn = document.querySelector('#gmail_button');
const gmailRez = document.querySelector('#gmail_result');

const regex = /^\w+\@gmail.com$/

gmailBtn.addEventListener('click', () => {
    if(regex.test(gmailInput.value)) {
        gmailRez.style.color = 'green'
        gmailRez.innerHTML = 'valid'  
    } else {
        gmailRez.style.color = 'red'
        gmailRez.innerHTML = 'invalid'
    }
})




const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

const width = parentBlock.clientWidth - childBlock.clientWidth
const height = parentBlock.clientHeight - childBlock.clientHeight
// console.log(parentBlock);
let positionX = 0; let positionY = 0;
const animation = () => {
 if (positionX < width && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(animation)
 } else if (positionX >= width && positionY < height) {
    positionY++;
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(animation) 
 } else if (positionX > 0 && positionY >= height) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(animation)
 } else if (positionY > 0 && positionX <= 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(animation) 
 } else {
    requestAnimationFrame(animation)
 }
};
animation()


const secNum = document.querySelector('#seconds');
const secStart = document.querySelector('#start')
const secStop = document.querySelector('#stop')
const secReset = document.querySelector('#reset')

let interval = null;
let count = 0;

secStart.addEventListener('click', () => {
    if(interval) return
    interval = setInterval(() => {
        count++;
        secNum.innerHTML = count;
    }, 1000)
}
);

secStop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})

secReset.addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
    count = 0;
    secNum.innerHTML = count;
})



//карточки с персонажами


const request = new XMLHttpRequest();
const charactersList = document.querySelector('.characters-list')
request.open('GET', '../data/characters.json');
request.responseType = 'json'
request.send();
request.onload = () => {
    const characters = request.response

    characters.forEach((character) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.innerHTML = `
            <div class="photo">
                <img src="${character.person_photo}" alt="${character.name}">
            </div>
            <h3>${character.name}</h3>
            <span>${character.age}</span>
        `
        charactersList.append(card)
    });
}