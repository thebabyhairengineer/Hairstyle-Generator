let btnRandom = document.querySelector('.button2');
let result = document.querySelector('h2');
let middle = document.querySelector('.with');
let number = ['One', 'Two'];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
let result2 = document.querySelector('h3');
let back = ['High', 'Middle', 'Low',]
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result2 = Math.floor(step2) + min;
    return result2;
}
let result3 = document.querySelector('h4');
let part = ['Middle Part','Left Side Part/Swoop', 'Right Side Part/Swoop','No Part','Zigzag Part','Cornrows In the Front']
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result3 = Math.floor(step2) + min;
    return result3;
}
let result4 = document.querySelector('h5');
let style = ['Natural Texture Ponytail(s)', 'Bubble Ponytail(s)','Braided Ponytail(s)','Boho Braid(s)', 'Extended Boho Braid(s)',
'Extended Ponytail(s)', 'Extended Braided Ponytail(s)','Extended Bubble Ponytail(s)','Claw Clip Ponytail(s)', 'Double Braided Ponytail(s)' ]
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result4 = Math.floor(step2) + min;
    return result4;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, number.length-1);
    result.innerText =  number[index];
    let index2 = getRandomNumber2(0, back.length-1);
    result2.innerText = back[index2];
    let index3 = getRandomNumber2(0, part.length-1);
    result3.innerText = part[index3];
    let index4 = getRandomNumber2(0, style.length-1);
    result4.innerText = style[index4];
    
    
});