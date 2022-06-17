//1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, который выделяет текст например фоном.

let  firstP = document.createElement('p');
let  secondP = document.createElement('p');
let  thirdP = document.createElement('p');
let  fourthP = document.createElement('p');
let  fifthP = document.createElement('p');
let  sixthP = document.createElement('p');
let  seventhP = document.createElement('p');
let  eighthP = document.createElement('p');
let  ninthP = document.createElement('p');
let  tenthP = document.createElement('p');

firstP.className = 'highlightedText';
secondP.className = 'highlightedText';
thirdP.className = 'highlightedText';




let arrHighlightedText = document.querySelectorAll('highlightedText');
for(let i=0; i<arrHighlightedText.length; i++){
    arrHighlightedText[i].style.backgroundColor = 'orange';
    
}


// let masg = '************';
// document.getElementsByClassName('highlightedText').innerHTML = masg;
// firstP.style.textDecorationColor = 'red'

// tenthP.innerText = '********************';


//2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
//2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон

(function() {
    let elem = document.createElement('p');
    content = document.createTextNode('***************');
  elem.appendChild(content);
  body.parentNode.appendChild(elemпше)
})();