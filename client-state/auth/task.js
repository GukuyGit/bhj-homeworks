const formAuth = document.getElementById('signin__form');
const inputFields = Array.from(document.querySelectorAll('.control'));
const userId = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const button = document.querySelector('.btn');
let savedUserId

formAuth.addEventListener('submit', (event) => {
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: new FormData(formAuth)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Неверный логин/пароль');
            }
        })
        .then(data => {
            inputFields.forEach(field => {
                field.value = '';
            });
            localStorage.setItem('id', data.user_id);
            savedUserId = localStorage.getItem('id');
            userId.textContent = savedUserId;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
        })
        .catch(error => {
            alert(error);
        });

    event.preventDefault();
});

window.addEventListener('load', () => {
    savedUserId = localStorage.getItem('id');
    if (savedUserId) {
        userId.textContent = savedUserId;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
    }
});