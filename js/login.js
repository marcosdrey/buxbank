const form = document.querySelector('#form')
const email = document.querySelector('#login-email')
const password = document.querySelector('#login-password')
let usersOfSite = JSON.parse(localStorage.getItem('userData')) || []

form.addEventListener('submit', (e)=> {
    let connected = false;
    e.preventDefault()
    if(email.value && password.value) {
        usersOfSite.forEach(user => {
            if(email.value === user._email && password.value === user._password) {
                alert(`Welcome back, ${user._name}!`) 
                connected = true;
                window.location.href = 'token.html'
            }
        })
        if(!connected) {
            alert('The infos are incorrects. Please try again.');
        }
    } else {
        alert('Put all infos!')
    }
})