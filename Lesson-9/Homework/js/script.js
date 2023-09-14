// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент < div id = "text" > зникав.

const textBtn = document.querySelector('.textBtn');
const text = document.querySelector('#text');

textBtn.addEventListener('click', () => {
    text.style.display = 'none';
});

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const hiddenBtn = document.querySelector('.hiddenBtn');

hiddenBtn.addEventListener('click', () => {
    hiddenBtn.style.display = 'none';
});

// ----- 3----
// Створіть дерево, яке показує / приховує дочірні вузли при кліці

const tree = document.querySelector('#tree');

const handleClick = (event) => {
    if (event.target.tagName == 'LI') {
        const parent = event.target.querySelector('ul');
        if (parent) {
            if (parent.classList.contains('hidden')) {
                parent.classList.remove('hidden');
            } else {
                parent.classList.add('hidden');
            }  
        }
    }
};

tree.addEventListener('click', handleClick);
