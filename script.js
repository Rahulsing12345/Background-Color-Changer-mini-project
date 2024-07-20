
const body = document.querySelector('body');
const colorBoxes = document.querySelectorAll('.boxes .box');
const refreshButton = document.querySelector('.refresh');

colorBoxes.forEach(function (colorBox) {
    colorBox.addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
    });
});

refreshButton.addEventListener('click', function () {
    body.style.backgroundColor = "#f0f0f0";
});
