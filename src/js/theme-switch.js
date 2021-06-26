const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyColor = document.querySelector('body');

const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', clickOnCheckbox)

//---- Default theme settings ----//

if (localStorage.getItem('theme-type') === Theme.DARK) {

    bodyColor.classList.add(Theme.DARK)
    localStorage.setItem('theme-type', Theme.DARK)
    checkbox.setAttribute('checked', true)
} else {
    bodyColor.classList.add(Theme.LIGHT)
}

//---- Default theme settings ----//


function clickOnCheckbox() {
    if (bodyColor.classList.value === Theme.LIGHT) {
        bodyColor.classList.toggle(Theme.DARK)
        bodyColor.classList.toggle(Theme.LIGHT)

        localStorage.setItem('theme-type', bodyColor.classList.value)
    } else {
        bodyColor.classList.toggle(Theme.DARK)
        bodyColor.classList.toggle(Theme.LIGHT)

        localStorage.setItem('theme-type', bodyColor.classList.value)
    }
}
