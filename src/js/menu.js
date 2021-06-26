import markup from '../templates/markup.hbs';
import menuItems from '../menu.json';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', markup(menuItems))