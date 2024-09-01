const hamburger = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.nav-primary');
const logoLight = document.querySelector('.logo__light');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    logoLight.classList.toggle('show');
})