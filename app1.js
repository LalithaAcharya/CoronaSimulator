document.body.style.backgroundImage = "url('./assets/fourth.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

//displaying name saved in session storage

var text=document.getElementById('heading4');
var name = sessionStorage.getItem("name");
console.log(name);
text.innerHTML="WELCOME "+name+"!!";

const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.heading3')
let currentShooterIndex = 133
let width = 16
let direction = 1
let coronaId
let goingRight = true
let coronaRemoved = []
let results = 0

const mySound1=document.getElementById('sound1')
const mySound2=document.getElementById('sound2')

// audio declaration

var bleep1= new Audio();
    bleep1.src="./assets/click.wav";

//timmer setting

var time = sessionStorage.getItem("time");
var count = time;
console.log(count);
  var interval = setInterval(function(){
    count--;
  document.getElementById('count').innerHTML="Remaing Time: "+count;
  if (count === 0){
    mySound1.play();
    clearInterval(interval);
    document.getElementById('count').innerHTML='TIME OVER';
    // or...
    /*alert("You're out of time!");*/
    clearInterval(interval)
    clearInterval(coronaId)
    
    let body=document.getElementById('body');
    let timeOver=document.createElement('div');
    timeOver.classList.add('timeOver');

    let heading=document.createElement('h1');
    heading.innerHTML="TIME UP";
    heading.classList.add('timeup');
    timeOver.appendChild(heading);

    let image=document.createElement('img');
    image.setAttribute("src","./assets/pic17.png");
    image.classList.add('photo');
    timeOver.appendChild(image);

    let image1=document.createElement('img');
    image1.setAttribute("src","./assets/pic16.png");
    image1.classList.add('photo1');
    timeOver.appendChild(image1);

    let image6=document.createElement('img');
    image6.setAttribute("src","./assets/cloud.png");
    image6.classList.add('photo6');
    timeOver.appendChild(image6);

    let btn=document.createElement('button');
    btn.setAttribute("onmousedown","bleep1.play()");
    btn.setAttribute("onclick","again()");
    btn.innerHTML="PLAY AGAIN";
    btn.classList.add('playagain');
    timeOver.appendChild(btn);

    let button=document.createElement('button');
    button.setAttribute("onmousedown","bleep1.play()");
    button.setAttribute("onclick","home()");
    button.innerHTML="HOME";
    button.classList.add('home');
    timeOver.appendChild(button);

    body.appendChild(timeOver);
  }
}, 1000);

// navigation to home page
function home() {
  location.href="./index.html";
}

//navigation to third page
function again(){
  location.href="./third.html";
}

//creating a div for corona
for (let i = 0; i < 225; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const corona = [
  2,3,4,5,6,7,8,9,10,11,12,
  16,17,18,19,20,21,22,23,24,25,26,
  30,31,32,33,34,35,36,37,38,39,40
]


function draw() {
  for (let i = 0; i < corona.length; i++) {
    if(!coronaRemoved.includes(i)) {
      squares[corona[i]].classList.add('corona')
    }
  }
}

draw()

function remove() {
  for (let i = 0; i < corona.length; i++) {
    squares[corona[i]].classList.remove('corona')
  }
}

squares[currentShooterIndex].classList.add('shooter')


function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -=1
      break
    case 'ArrowRight' :
      if (currentShooterIndex % width < width -1) currentShooterIndex +=1
      break
  }
  squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

function moveCorona() {
  const leftEdge = corona[0] % width === 0
  const rightEdge = corona[corona.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < corona.length; i++) {
      corona[i] += width +1
      direction = -1
      goingRight = false
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < corona.length; i++) {
      corona[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < corona.length; i++) {
    corona[i] += direction
  }

  draw()

  if (squares[currentShooterIndex].classList.contains('corona', 'shooter')) {

    let body=document.getElementById('body');
    let timeOver=document.createElement('div');
    timeOver.classList.add('timeOver');

    mySound1.play();

    let heading=document.createElement('h1');
    heading.innerHTML="GAME OVER";
    heading.classList.add('timeup');
    timeOver.appendChild(heading);

    let image=document.createElement('img');
    image.setAttribute("src","./assets/pic17.png");
    image.classList.add('photo');
    timeOver.appendChild(image);

    let image1=document.createElement('img');
    image1.setAttribute("src","./assets/pic16.png");
    image1.classList.add('photo1');
    timeOver.appendChild(image1);

    let image6=document.createElement('img');
    image6.setAttribute("src","./assets/cloud.png");
    image6.classList.add('photo7');
    timeOver.appendChild(image6);

    let btn1=document.createElement('button');
    btn1.setAttribute("onmousedown","bleep1.play()");
    btn1.setAttribute("onclick","again()");
    btn1.innerHTML="PLAY AGAIN";
    btn1.classList.add('playagain');
    timeOver.appendChild(btn1);
    
    let button=document.createElement('button');
    button.setAttribute("onmousedown","bleep1.play()");
    button.setAttribute("onclick","home()");
    button.innerHTML="HOME";
    button.classList.add('home');
    timeOver.appendChild(button);

    body.appendChild(timeOver);
    
    //location.href="./loose.html";
    //resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(interval)
    clearInterval(coronaId)
  }

  for (let i = 0; i < corona.length; i++) {

    if(corona[i] > (squares.length)) {


      let body=document.getElementById('body');
    let timeOver=document.createElement('div');
    timeOver.classList.add('timeOver');

    mySound1.play();

    let heading=document.createElement('h1');
    heading.innerHTML="GAME OVER";
    heading.classList.add('timeup');
    timeOver.appendChild(heading);

    let image=document.createElement('img');
    image.setAttribute("src","./assets/pic17.png");
    image.classList.add('photo');
    timeOver.appendChild(image);

    let image1=document.createElement('img');
    image1.setAttribute("src","./assets/pic16.png");
    image1.classList.add('photo1');
    timeOver.appendChild(image1);

    let image6=document.createElement('img');
    image6.setAttribute("src","./assets/cloud.png");
    image6.classList.add('photo7');
    timeOver.appendChild(image6);

    let btn2=document.createElement('button');
    btn2.setAttribute("onmousedown","bleep1.play()");
    btn2.setAttribute("onclick","again()");
    btn2.innerHTML="PLAY AGAIN";
    btn2.classList.add('playagain');
    timeOver.appendChild(btn2);

    let button=document.createElement('button');
    button.setAttribute("onmousedown","bleep1.play()");
    button.setAttribute("onclick","home()");
    button.innerHTML="HOME";
    button.classList.add('home');
    timeOver.appendChild(button);

    body.appendChild(timeOver);
  
       // location.href="./loose.html";
    // resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(interval)
      clearInterval(coronaId)
    }
  }
  if (corona.length === coronaRemoved.length) {

    let body=document.getElementById('body');
    let timeOver1=document.createElement('div');
    timeOver1.classList.add('timeOver1');

    mySound2.play();
    
    let heading1=document.createElement('h1');
    heading1.innerHTML="YOU WON";
    heading1.classList.add('timeup1');
    timeOver1.appendChild(heading1);

    let image3=document.createElement('img');
    image3.setAttribute("src","./assets/pic21.png");
    image3.classList.add('photo2');
    timeOver1.appendChild(image3);

    let image2=document.createElement('img');
    image2.setAttribute("src","./assets/pic20.png");
    image2.classList.add('photo3');
    timeOver1.appendChild(image2);

    let image4=document.createElement('img');
    image4.setAttribute("src","./assets/pic22.png");
    image4.classList.add('photo4');
    timeOver1.appendChild(image4);

    let image5=document.createElement('img');
    image5.setAttribute("src","./assets/cloud.png");
    image5.classList.add('photo5');
    timeOver1.appendChild(image5);

     
    let btn3=document.createElement('button');
    btn3.setAttribute("onmousedown","bleep1.play()");
    btn3.setAttribute("onclick","again()");
    btn3.innerHTML="PLAY AGAIN";
    btn3.classList.add('playagain1');
    timeOver1.appendChild(btn3);
    
    let button1=document.createElement('button');
    button1.setAttribute("onmousedown","bleep1.play()");
    button1.setAttribute("onclick","home()");
    button1.innerHTML="HOME";
    button1.classList.add('home1');
    timeOver1.appendChild(button1);

    body.appendChild(timeOver1);
    //location.href="./win.html";
    //resultsDisplay.innerHTML = 'YOU WIN'
    clearInterval(interval)
    clearInterval(coronaId)
  }
}
coronaId = setInterval(moveCorona, 600)

function shoot(e) {
  let doloId
  let currentDoloIndex = currentShooterIndex
  function moveDolo() {
    squares[currentDoloIndex].classList.remove('dolo')
    currentDoloIndex -= width
    squares[currentDoloIndex].classList.add('dolo')

    const mySound=document.getElementById('sound')

    if (squares[currentDoloIndex].classList.contains('corona')) {
        mySound.play();
      squares[currentDoloIndex].classList.remove('dolo')
      squares[currentDoloIndex].classList.remove('corona')
      squares[currentDoloIndex].classList.add('boom')
    

      setTimeout(()=> squares[currentDoloIndex].classList.remove('boom'), 300)
      clearInterval(doloId)

      const Removed = corona.indexOf(currentDoloIndex)
      coronaRemoved.push(Removed)
      results++
      resultsDisplay.innerHTML = "SCORE: "+results
      console.log(coronaRemoved)
    }

  }

  switch(e.key) {
    case 'ArrowUp':
      doloId = setInterval(moveDolo, 100)
  }
}

document.addEventListener('keydown', shoot)
