//sounds

var bleep= new Audio();
bleep.src="./assets/click.wav";

var bleep2= new Audio();
bleep2.src="./assets/save.wav";

//navigate to second page 

function page2(){
    location.href="./second.html";
}

//name save alert

function save(name) {
    var name=document.getElementById('input1').value;
    console.log(name);
    alert("name saved");
    sessionStorage.setItem("name",name);
}
//navigate to third page

function page3(){
    location.href="./third.html";
}

// display of the name in saved in previous page

var text=document.getElementById('heading2');
var name = sessionStorage.getItem("name");
console.log(name);
text.innerHTML="Hello "+name+"!!";

//display of block in third page

var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById('block').style.display="none";
        return a=0;
    }
    else{
        document.getElementById('block').style.display="inline";
        return a=1;
    }
}

//select dificulty

function easy() {
    let time=35;
    console.log(time);
    console.log(sessionStorage.setItem("time",time));
    console.log(time);
    location.href="./fourth.html";
}

function midium() {
    let time1=30;
    console.log(time1);
    console.log(sessionStorage.setItem("time",time1));
    location.href="./fourth.html";
}

function hard() {
    let time2=25;
    console.log(time2);
    console.log(sessionStorage.setItem("time",time2));
    location.href="./fourth.html";
}

//navigate to page4

function page4(){
    location.href="./fourth.html";
}

