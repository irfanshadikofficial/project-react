//dark-mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
 }
//dark-mode


//toogle-image-of-the-mood
const img = document.getElementById('change_sun');
let toggle = true;
img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src= 'img\\sun.png';
    }
    else{
        img.src= 'img\\moon.png'
    }
})
//toogle-image-of-the-mood
