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