document.addEventListener('DOMContentLoaded', () => {
    function showSelect() {
        const flagSelect = document.querySelector('#country-select');
        const flagDropdown = document.querySelector('.header__flag-dropdown');

        flagSelect.addEventListener('click', () => {
            if(flagDropdown.classList.contains('is-visible')) {
                flagDropdown.classList.remove('is-visible')
            } else {
                flagDropdown.classList.add('is-visible')
            }
        });
    }
    showSelect();


})