// SWITHING BUTTONS
const logInShow = document.querySelector('.uiLogIn')
const signUpShow = document.querySelector('.uiSignUp')
const buttonLogIn = document.querySelector('.buttonLogIn')
const buttonSignUp = document.querySelector('.buttonSignUp')
const loginButton = document.querySelector('.loginButton')

const form = document.getElementById('form');

const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const passwordWerifyInput = document.getElementById('password-werify')


// FUNCTIONS

function uiPanelShow(hidenPanel) {
    
    hidenPanel.style.display = 'flex'
}
//  Error message
function showError(input, message) {
    input.style.backgroundColor = "#cf4e38"
    formControl = input.parentElement;
    const small = formControl.querySelector('span');
    small.style.color = "#cf4e38"
    small.innerHTML = message;
}
//Show succes outline
function showSuccess(input, message) {
    input.style.backgroundColor = "green"
    formControl = input.parentElement;
}
//Validating email
function validateEmail(mailValue){

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mailValue);

}
// EVENTS

buttonLogIn.addEventListener('click',  ()=>uiPanelShow(logInShow));
buttonSignUp.addEventListener('click',  ()=>uiPanelShow(signUpShow))

loginButton.addEventListener('click', (e)=>{e.preventDefault();checkAccount()})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("submit")
    //First name
    if(firstNameInput.value === '') {
        showError(firstNameInput, 'First name is required');
        console.log("First name is missing")
    }else 
    if(firstNameInput.value.length < 3){
        showError(firstNameInput, `${firstNameInput.value} is too short, give us full name`)
        console.log(`${firstNameInput.value} is to short`)
        return 
    }else{
        showSuccess(firstNameInput)
    }
    //Last name
    if(lastNameInput.value === ''){
        showError(lastNameInput, 'Last name is required')
    }else{
        showSuccess(lastNameInput)
    }
    //Email
    if(email.value === '') {
        showError(email, 'Email adress is required');
        console.log('Email is missing')
    }else if (!validateEmail(email.value)){
        showError(email, 'Email adress is incorrect');
        return
    }else{
        showSuccess(email)
    }
    //Password
    if(password.value === '') {
        showError(password, 'Password is required');
        console.log('Password is missing')
    }else {
        showSuccess(password)
    }
    //Password werify
    if(passwordWerifyInput.value === '') {
        showError(passwordWerifyInput, 'Password repeat is required');
        console.log('Password is required')
    }else if(passwordWerifyInput.value !== password.value){
        showError(passwordWerifyInput, 'Password is missing');
    }else{
        showSuccess(passwordWerifyInput)
    } 
    createAccount()

})


// LOGIN AREA

const checkAccount = () => {
    
    function checker(data) {

        data.forEach((user) => {

        console.log(user)

        let logInEmail = document.querySelector('#uiLogInEmail');
        let logInPassword = document.querySelector('#uiLogInPassword');
        let sectionAppear = document.querySelector('.accountNone')
        const accountData = document.getElementById("accountData")

        console.log(logInEmail.value)
        user.email === logInEmail.value && user.password === logInPassword.value ? sectionAppear.style.display = 'flex' : console.log('nie ma cie...')
        accountData.innerHTML = `Witaj ${user.first}`;
    })

        // data.email.value === logInEmail.value && data.password.value === logInPassword.value ? console.log('Zalogowany') : console.log('Błędne dane')
    }

    fetch("http://localhost:3000/user")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data[0])
                checker(data)
            })
        }

// CREATE ACCOUNT



function getter() {
    fetch("http://localhost:3000/user")
    .then((rep) => {
       return rep.json()
    })
    .then(data => {
        console.log(data)
    })
}

function createAccount() {

    let input = document.querySelectorAll('.uiSignUp input')

    const accountElements = Array.from(input)
    console.log(accountElements)


    let sending = (accountElements) => {
        
        fetch("http://localhost:3000/user", {
            method:'POST',
            headers:{
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                first: accountElements[0].value,
                last: accountElements[1].value,
                email: accountElements[2].value,
                password: accountElements[3].value,
                passwordRep: accountElements[4].value,
    
            }),   
        })
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                console.log(data)
                getter()
            })
        }
       sending(accountElements)
        
}

