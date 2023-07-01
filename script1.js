let btnRandom = document.querySelector('.button2');
let result = document.querySelector('h2');
let middle = document.querySelector('.with');
let front = ['High Bun', 'Middle Bun', 'High Knot Bun', 'Middle Knot Bun', 'High Ponytail', 'Middle Ponytail', 
'High Pigtails', 'High Braided Ponytail', 'High Braided Pigtails', 'Middle Ponytail Braid', 'Middle Bubble Ponytail',
'Two High Bubble Ponytails', 'Flat Twists', 'Cornrow Design','3 Bantu Knots', '4 Bantu Knots', '5 Bantu Knots', 
'Space Buns', 'Criss-Cross', 'Claw Clip Ponytail', 'Claw Clip BUn'];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
let result2 = document.querySelector('h3');
let back = ['Natural Curls', 'Twist Out', 'Braid Out', 'Bantu Knot Out', 'Three Strand Twist Out', 'Flexi Rod Curls', 'Perm Rod Curls', 'Finger Coils'];
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result2 = Math.floor(step2) + min;
    return result2;
}


btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, front.length-1);
    result.innerText = "Front/Top: " + front[index];
    let index2 = getRandomNumber2(0, back.length-1);
    result2.innerText = "Back: " + back[index2];
    middle.innerText = "with"
});