// // Set the date we're counting down to
// var countDownDate = new Date("July 4, 2023 18:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML =   hours + " : "
//   + minutes + " : " + seconds + " ";

// document.getElementById("hours").innerHTML = hours + "h";
// document.getElementById("min").innerHTML = minutes + "m";
// document.getElementById("sec").innerHTML = seconds + "s";



//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

//change color of navbar on scrolling

function changebg(){
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY
    if(scrollvalue < 80){
        navbar.classList.remove('navbgscroll')
    }
    else{
        navbar.classList.add('navbgscroll')
    }
}
window.addEventListener('scroll',changebg)


// put form data on google sheets
let form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
e.preventDefault();
let data = new FormData(form);
fetch('https://script.google.com/macros/s/AKfycbxsBjFhN-r3qDUL4zdEt4jqtKSRUFObg5P4H-vxq4GaPizX7sftQUtIbdyvju6sp1D5hA/exec',{
  method: "POST",
  body:data

})
.then(res => res.text())
.then(data => console.log(data));
})






const dateElement = document.getElementById('webinarDate');
dateElement.textContent = '3 July 2023';














