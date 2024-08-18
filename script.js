const box = document.querySelector('.box')
console.log(box);

const body = document.querySelector('body')



const color = prompt('Choose theme for this site: Светлая или Тёмная')

if (color === 'Светлая') {
    box.classList.add('white')
    body.classList.add('whitesec')
} else if (color === 'Тёмная') {
    box.classList.add('black')
    body.classList.add('theme')
} else {
    alert('Неверный цвет для темы. Выберите из предложенных')
}



const title = document.querySelector('h1')

if (color) {
    title.textContent = color
} else {
    alert('Вы ничего не написали')
}