const buttons = document.querySelectorAll("sidebar-buttons-container li");

function setActive(e) {
    console.log(e);
}

buttons.forEach(button => {
    button.addEventListener('click', setActive);
})