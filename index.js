const togglerButton = document.getElementsByClassName('toggler')[0];
const navBar = document.getElementsByClassName('togled')[0];
togglerButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})