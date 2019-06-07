
let imgSrcArr = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg']

let buttons = document.getElementsByClassName('button');
let image = document.getElementsByTagName('IMG')[0];

let prev = buttons[0], play = buttons[1], next = buttons[2]

prev.addEventListener('click', subtract);
play.addEventListener('click', slide);
play.addEventListener('click', () => { play.classList.toggle('active') });
next.addEventListener('click', add);

let i = 0;
function add() {
    i++;
    if (i === imgSrcArr.length) { i = 0 }
    image.src = imgSrcArr[i]
}

function subtract() {
    i--;
    if (i === -1) { i = imgSrcArr.length - 1 }
    image.src = imgSrcArr[i]
}

let id, bool = true;
function slide() {
    if (bool) {
        id = setInterval(add, 1000);
        bool = false;
    } else {
        clearInterval(id);
        bool = true;
    }
}
