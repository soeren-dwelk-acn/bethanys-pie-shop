function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

let navMenuBtn = document.getElementById("hamburgerButton");
navMenuBtn.onclick = toggleMenu;