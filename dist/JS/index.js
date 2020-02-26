// SWITHING BUTTONS

var logInShow = document.querySelector('.uiLogIn');
var signUpShow = document.querySelector('.uiSignUp');

const hidePanel = () => {
    logInShow.style.display = 'none';
    signUpShow.style.display = 'none';
}

const uiLogInPanelShow = (logInShow) => {
    
    const buttonLogIn = document.querySelector('.buttonLogIn')
    buttonLogIn.addEventListener('click', () => {
        logInShow.style.display === 'none' ? logInShow.style.display = 'flex': logInShow.style.display = 'none'}, false)
}

uiLogInPanelShow(logInShow);

const uiSignUpPanelShow = (signUpShow) => {

    const buttonSignUp = document.querySelector('.buttonSignUp')
    buttonSignUp.addEventListener('click', () => {
        signUpShow.style.display === "none" ? signUpShow.style.display = 'flex' : signUpShow.style.display = 'none'}, false)
}

uiSignUpPanelShow(signUpShow);

// LOGIN AREA

const checkAccount = () => {

    // const logInEmail = document.querySelector('#uiLogInEmail')
    // const logInPassword = document.querySelector('#uiLogInPassword')
    
    function checker(data) {

        data.forEach((user) => {

        console.log(user)

        let logInEmail = document.querySelector('#uiLogInEmail');
        let logInPassword = document.querySelector('#uiLogInPassword');
        let sectionAppear = document.querySelector('.accountNone')

        console.log(logInEmail.value)
        user.email === logInEmail.value && user.password === logInPassword.value ? sectionAppear.className = 'accountYup' : console.log('nie ma cie...')

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
       
    accountElements[3].value === accountElements[4].value ?  sending(accountElements) : console.log("Hasła różnią się")
        
}