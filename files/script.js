let GirlScrl = document.getElementById("GirlScrl");
let GirlsHostel = document.getElementById("GirlsHostel")
let girldec = 0;
let title =document.getElementsByClassName('h3');
GirlScrl.addEventListener('click', function () {
    if (girldec == 0) {
        GirlsHostel.style.display = "block";
        girldec = 1;
        title[0].style.background='#1f51ff';
        title[0].style.color='white';
    }
    else {
        GirlsHostel.style.display = "none";
        console.log(title[0]);
        title[0].style.background='white';
        title[0].style.color='#505050';
        girldec = 0;
    }
})

console.log(title);

let BoysScrl = document.getElementById("BoysScrl");
let BoysHostel = document.getElementById("BoysHostel")
let boysdec = 0;
BoysScrl.addEventListener('click', function () {
    if (boysdec == 0) {
        BoysHostel.style.display = "block";
        title[1].style.background='#1f51ff';
        title[1].style.color='white';
        boysdec = 1;
    }
    else {
        BoysHostel.style.transitionDelay='1s';
        BoysHostel.style.display = "none";
       
        title[1].style.background='white';
        title[1].style.color='#505050';
        boysdec = 0;
    }
})
let BookGirl= document.getElementById("Book");
let numberG=document.getElementById('numberG');
BookGirl.addEventListener('click', function () {
    
    let val=numberG.innerText;
    val=val-1;
    localStorage.setItem('Girlsval',val);
    numberG.innerText=val;
    numberB.innerText=localStorage.getItem('Girlsval');

})
let BookBoys= document.getElementById("Book");
let numberB=document.getElementById('numberB');
BookBoys.addEventListener('click', function () {
    
    let val=numberB.innerText;
    val=val-1;
    localStorage.setItem('Boysval',val);
    numberB.innerText=val;
    numberB.innerText=localStorage.getItem('Boysval');

})