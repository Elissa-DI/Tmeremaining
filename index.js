const start = document.querySelector('.start');
const next = document.querySelector('.next');
const pause = document.querySelector('.pause');
const a = document.querySelector('.a');
const b = document.querySelector('.b');

start.addEventListener('click', () => {
        b.pause();
        a.play();
})
next.addEventListener('click', () => {
    a.pause();
    b.play();
})
pause.addEventListener('click', () => {
    a.pause();
    b.pause();

})