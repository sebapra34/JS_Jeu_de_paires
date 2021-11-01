var tablebase= [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
.map( p => [p,Math.random()])
.sort( (a,b) => a[1]-b[1])
.map(p => p[0]);

var myimages = document.getElementsByTagName('img');
var elementscore= document.getElementById('score');
var score=0;
var step = 1;
var p1, p2;
var timer= null;

for( let i=0; i<myimages.length; i++){
    myimages[i].src2='asets/img' + tablebase[i] + '.jpg';
}

// click retourn img -> la mémoriser
// click2 retourn img -> la mémoriser
//comparaison
// if identique : suppr
// else retourner

document.addEventListener('click', function(e){
switch(step){
    case 1: // premier clic
    if (e.target.tagName=='IMG'){
        e.target.src=e.target.src2;
        p1= e.target;
        step=2;
    }
        break;
    case 2: // second clic
    if (e.target.tagName=='IMG'){
        e.target.src=e.target.src2;
        p2=e.target;
        step=3;
    }
    timer = setTimeout(check, 1100);
    break;
    case 3: 
    clearTimeout(timer);
    check();
    break;
    }
});

function check() {
    if (p1.src==p2.src){
        p1.replaceWith(document.createElement('span'))
        p2.replaceWith(document.createElement('span'))
        score +=50;
    } 
    else {
        p2.src= p1.src='asets/img0.jpg';
        score=Math.max(0, score-30);
    }
    step= 1;
    elementscore.textContent= score;
    //fin du game
    if (document.getElementsByTagName('img').length==0){
        elementscore.textContent= score
    }
}
