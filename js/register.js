import { User } from "./modules/User.js"

const form = document.querySelector('#form');
const fullName = document.querySelector('#register-fullname');
const email = document.querySelector('#register-email');
const password = document.querySelector('#register-password');
const confirmPassword = document.querySelector('#confirm-password');
const dateOfBirth = document.querySelector('#date-of-birth');
const phoneNumber = document.querySelector('#phone_number');
const checkbox = document.querySelector('#agree-terms');
const btnRegister = document.querySelector('#btn-register');

let equalPassword = null;
let validAge = null;

export let usersOfSite = JSON.parse(localStorage.getItem('userData')) || [];

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(validateForm()) {
        if(equalPassword && validAge) {
            const newUser = new User(fullName.value, email.value, password.value, dateOfBirth.value, phoneNumber.value);
            usersOfSite.push(newUser)
            localStorage.setItem("userData", JSON.stringify(usersOfSite));
            window.location.href = "login.html"
        }
    } else {
        console.log('Algo está errado')
    }
})

password.addEventListener('blur', () => {
    if (password.value) { 
        confirmPassword.removeAttribute('disabled')
    } else {
        confirmPassword.setAttribute('disabled', 'disabled')
    }
})

confirmPassword.addEventListener('blur', ()=> {
    if(!confirmPassword.hasAttribute("disabled")) {
        if(confirmPassword.value !== password.value) {
            equalPassword = false
            btnRegister.setAttribute('disabled', 'disabled')
            alert('The passwords are different')
            console.log('Senhas diferentes')
        } else {
            equalPassword = true;
            btnRegister.removeAttribute('disabled')
            console.log('Senhas iguais')
        }
    }
})

dateOfBirth.addEventListener('blur', ()=> {
    const age = checkAge(dateOfBirth.value)
    if(age >= 18) {
        validAge = true
        btnRegister.removeAttribute('disabled')
        console.log('Você é MAIOR de idade')
    } else {
        validAge = false
        btnRegister.setAttribute('disabled', 'disabled')
        alert('You need to be, at least, 18 years old!')
        console.log('Você precisa ter pelo menos 18 anos de idade para cadastrar uma conta no nosso site.')
    }
})

phoneNumber.addEventListener('blur', ()=> {
    let phoneRedefined = ""
    for(let i of phoneNumber.value) {
        i = Number(i)
        if(i >=0 && i<=9) {
            i = String(i)
            phoneRedefined = phoneRedefined + i
        }
    }
    phoneNumber.value = phoneRedefined
})

function validateForm() {
    if(!fullName.value || !email.value || !password.value || !confirmPassword.value || !dateOfBirth.value || !phoneNumber.value || !checkbox.checked) {
        return false;
    } else {
        return true;
    }
}

function checkAge(date) {
    const today = new Date()
    const dateOfBirthObj = new Date(date)
    const diff = today.getTime() - dateOfBirthObj.getTime()
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}