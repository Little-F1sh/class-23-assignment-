function showPassword() {
    let show = document.getElementById('password');
    if (show.type === 'password') {
        show.type = 'text';
    } else {
        show.type = 'password';
    }
}

document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const emailValue = email.value;
    const passwordValue = password.value; 

    if (emailValue === 'admin@gmail.com' && passwordValue === 'admin'){
        console.log('You are the admin');
        window.location.href = 'dashboard.html';
    } else {
        console.log('You are not the admin');
        alert('You are not the admin');
    }
});