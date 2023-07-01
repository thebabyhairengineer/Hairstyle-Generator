let btnRandom = document.querySelector('.button2');
let result = document.querySelector('h2');
let within = document.querySelector('h6')
let middle = document.querySelector('.with');
let number = ['Small', 'Smedium','Medium','Large','Jumbo'];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
let result2 = document.querySelector('h3');
let back = ['Chin Length', 'Shoulder Length', 'Collar Bone Length','Chest Length','Midback Length', 'Waist Length','Butt Length']
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result2 = Math.floor(step2) + min;
    return result2;
}
let result3 = document.querySelector('h4');
let part = ['Design Cornrow Bun','Design Cornrow Ponytail', 'Tribal Cornrow Bun',
'Tribal Cornrow Ponytail','Tribal Sew-in','Wig/Closure','Knotless Braids', 
'Senegalese Twisrs','Passion Braids','Marley Twists','Faux Locs','Cuban Twists',
'Boho Knotless Braids','Boho Senegalese Twists','Passion Twists', 'Boho Passion Twists','Buttergly Locs','Distressed Locs']
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result3 = Math.floor(step2) + min;
    return result3;
}
let result4 = document.querySelector('h5');
let style = ['Square Parts', 'Triangle Parts','Round Parts' ]
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
    within.innerText = 'with'
    
    
});

let result5 = document.querySelector('.add');
let btnRandom2 = document.querySelector('.button3');
let andd = document.querySelector('.andd');
let addons = [' a heart','curled ends', 'beads','color','skunk stripe color','peek-a-boo color','hair tinsel','hair jewlery', 'colored money pieces']
function getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result5 = Math.floor(step2) + min;
    return result5;
}

btnRandom2.addEventListener('click', () => {
    let index5 = getRandomNumber(0, addons.length-1);
    andd.innerText = "and add " + addons[index5];
    
});
