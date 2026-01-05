const modal = document.querySelector('.modal')
const openBtn = document.querySelector('#btn-get')
const closeBtn = document.querySelector('.modal_close')

let scrolledToTheEnd = false;

const modalClose = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

const modalOpen = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

openBtn.onclick = modalOpen;
closeBtn.onclick = modalClose;

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modalClose();
    }
})

const endScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const pageHeight = document.body.scrollHeight
    if(scrollPosition >= pageHeight){
        modalOpen()
    window.removeEventListener('scroll', endScroll)
    }
}
window.addEventListener('scroll', endScroll)

const modalTimer = setTimeout(() => {
    modalOpen()
    window.removeEventListener('scroll', endScroll)
}, 10000)
