function showrecover(){
    var login = document.getElementById('login');
    login.classList.remove('animate-left');
    login.classList.add('animate-right');
    login.classList.remove('animate-right');
    login.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.remove('hidden');
    recover.classList.add('animate-right')
}

function showlogin(){
    var recover = document.getElementById('recover');
    recover.classList.remove('animate-right');
    recover.classList.add('animate-left');
    recover.classList.remove('animate-left');
    recover.classList.add('hidden');
    var login = document.getElementById('login');
    login.classList.remove('hidden');
    login.classList.add('animate-left')
}
function showregisteronlogin(){
    var login = document.getElementById('login');
    login.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.add('hidden');
    var register = document.getElementById('register');
    register.classList.remove('hidden');
    register.classList.add('animate-bottom')
}
function showregisteronrecover(){
    var recover = document.getElementById('recover');
    recover.classList.add('hidden');
    var register = document.getElementById('register');
    register.classList.remove('hidden');
    register.classList.add('animate-bottom')
}
function showrecoveronregister(){
    var register = document.getElementById('register');
    register.classList.remove('animate-right');
    register.classList.add('animate-left');
    register.classList.remove('animate-left');
    register.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.remove('hidden');
    recover.classList.add('animate-left')
}
function showloginonregister(){
    var register = document.getElementById('register');
    register.classList.remove('animate-right');
    register.classList.add('animate-left');
    register.classList.remove('animate-left');
    register.classList.add('hidden');
    var login = document.getElementById('login');
    login.classList.remove('hidden');
    login.classList.add('animate-left')
}

function displaydropdown(){
    var drop = document.getElementById('DropdownProfile');
    var dirrection = document.getElementById('arrorient');
    if(drop.classList.contains('hidden')){
        drop.classList.remove('hidden');
        drop.classList.add('animate-fading');
        dirrection.style.transform = "rotate(45deg)";
    }else{
        drop.classList.remove('animate-fading');
        drop.classList.add('hidden');
        dirrection.style.transform = "rotate(-45deg)";
    }
}

function displaymenus(){
    var nav = document.getElementById('side-nav');
    nav.classList.remove('hidden');
    nav.classList.add('animate-left');
}

function hidesidenav(){
    var nav = document.getElementById('side-nav');
    nav.classList.remove('animate-left');
    nav.classList.add('animate-right');
    nav.classList.add('hidden');
}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fixed-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticknav")
  } else {
    navbar.classList.remove("sticknav");
  }
}