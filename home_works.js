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

// console.log(parentBlock);
let position = 0;
function animation() {
    const maxPosition = parentBlock.clientWidth - childBlock.clientWidth
 if (position < maxPosition) {
    position += 1;
    childBlock.style.left = `${position}px`;
    requestAnimationFrame(animation)
 }
};
animation()

