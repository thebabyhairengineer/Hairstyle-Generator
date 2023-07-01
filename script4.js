let btnRandom = document.querySelector('.button2');
let result = document.querySelector('h2');

let number = ['Bantu Knots', 'Halo Braid','Halo Twist','High Headwrap Style',
'Low Headwrap Style', 'Cornrows', 'Design Cornrow Bun', 'Tribal Cornrow Bun', 
'Design Cornrow Ponytail', 'Tribal Cornrow Ponytail','Mini Braids','Boho Mini Braids','Mini Twists', 
'Boho Mini Twists','Three Strand Twists','Flat Twists'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}


btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, number.length-1);
    result.innerText =  number[index];
    
    
    
});