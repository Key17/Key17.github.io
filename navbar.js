const togglerButton = document.getElementsByClassName('toggler')[0];
const navBar = document.getElementsByClassName('toggled')[0];
togglerButton.addEventListener('click', () =>{
    navBar.classList.toggle('active');
})