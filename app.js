const dropDownMenu = () => {
    const toggleMenu = document.querySelector('.toggle-menu')
    const menu = document.querySelector('.nav__links')

    toggleMenu.addEventListener('click', () => {
        const image = document.querySelector('.toggle-menu img')
        menu.classList.toggle('toggle-active')

        let menuSate = menu.classList.contains('toggle-active')

        if (menuSate) {
            image.src = "/images/close.svg"
        } else { image.src = "/images/hamurger.svg" }
        
    })    
}

dropDownMenu()