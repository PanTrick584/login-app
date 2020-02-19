const data = {
    accounts: [
        {
            name: 'Andrzej',
            email: 'andrzej.dupa@hotmail.com',
            password: 'LubiePlacki666'
        },
        {
            name: 'Weronika',
            email: 'weronka.jelonka@hotmail.com',
            password: 'dziuniaWera'
        },
        {
            name: 'qwerty',
            email: 'thiaon@mail.com',
            password: 'haslo1234'
        },
        {
            name: 'Magiczny___Krzysztof',
            email: 'czarodziej.kristofer@nibylandia.com',
            password: 'MagicznyKrzysztof69'
        },
    ]
};

const addEventListenerToInputs =(event) => {

    const inputs = document.querySelectorAll('input');

    inputs.forEach(function(input){
        input.addEventListener(event, ()=> input.click ? input.value = "" : input.value)
    })

}

addEventListenerToInputs('click'); 

// all buttons are working, but value of button isn't back so there is empty input if there is no valid value



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
    data.accounts.forEach((user) => {

        console.log(user.name)

        let logInName = document.querySelector('#uiLogInName');
        let logInEmail = document.querySelector('#uiLogInEmail');
        let logInPassword = document.querySelector('#uiLogInPassword');

        // console.log(logInName.value)
        user.name === logInName.value && user.email === logInEmail.value && user.password === logInPassword.value ? window.location.href = "dist/userAccount/userAccount.html" : console.log('nie ma cie...')

    })
}

const createAccount = () => {
        const inputsGrab = document.querySelectorAll('.uiSignUp input')
        inputsGrab.forEach((inp)=>{
            console.log(inp.value)
        })

        
}