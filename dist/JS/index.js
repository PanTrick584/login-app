const data = {};


const addEventListenerToInputs =(event) => {

    const inputs = document.querySelectorAll('input');

    for (let i = 0, len = inputs.length; i < len; i++) {

        const input = inputs[i]
        const prevInputValue = input.value
        console.log(prevInputValue)
        console.log(input)
        input.addEventListener(event, () => input.focus ? input.value = "" : input.value = prevInputValue, false);
        input.addEventListener(event, () => value === "" ? input.value = prevInputValue : input.value)  
    }
}

addEventListenerToInputs('click'); 

// all buttons are working, but value of button isn't back so there is empty input if there is no valid value



// This one works but its not enough

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




// There is no go back in displaying containers


// Validating inputs

// const checkLogin = () => {
//     const valueLogin = document.querySelector('.login').value;
//     Object.keys(data).forEach(user => {
        
//         let name = user
//         Object.keys(name).forEach(pass => {

//         })
//         console.log(data.name)  
//         console.log(typeof name)
//         console.log(name.password)
//         valueLogin === name
//         ? showStatus(valueLogin) : console.log('Login nieprawidłowy');
//             // console.log(valueLogin)
           
//          return name
        
//     }) 
// }

// const checkPassword = (n) => {
//     const valuePassword = document.querySelector('.password').value;
//         console.log(n.password)
//     // valuePassword === `${data.user1.password}`
//     //  ? showStatus(valuePassword) : console.log('Hasło nieprawidłowe');
//     //  console.log(valuePassword);
// }



const loggedIn = () => {
    
    window.location.href = "dist/userAccount/userAccount.html"
}

const showStatus = (valueP, valueL) => {
    const status = '! Whait a moment...';
    console.log(`${data.messege} ${name} ${status}`);
    valueP && valueL ?  loggedIn() : "";
}