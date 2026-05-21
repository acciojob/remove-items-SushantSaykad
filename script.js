//your JS code here. If required.
const button = document.querySelector('input[type="button"]');

button.addEventListener('click', function () {
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
});
