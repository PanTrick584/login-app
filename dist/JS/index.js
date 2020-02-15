const data = {
    Andrzej: {
        password: 'LubiePlacki11',
        age: 76,
        adress: "Żagań"
    },
    Grzegorz: {
        password: 'DoktorCyckarz69',
        age: 36,
        adress: "Lublin albo Dublin"
    },
    user3: {
        password: "Haslo1234",
        age: "none",
        adress: "Internet"
    },
    Wacław: {
        password: 'dupadupadupa666',
        age: 12,
        adress: 'Stummilowy Las'
    },

    messege: "Witaj "
}

// const backgroundGradient = () => {
//     setTimeout(colorChanger(), 5000)
// }

// const colorChanger = () => {
//     let backgroundColor = document.querySelector("body").style.backgroundImage = 'linear-gradient(to right, #996b43, #998574, #d1680d)';
//     let backgroundColor = document.querySelector("body").style.backgroundImage = 'linear-gradient(to right, #998574, #d1680d, #996b43)';
//     let backgroundColor = document.querySelector("body").style.backgroundImage = 'linear-gradient(to right, #d1680d, #996b43, #998574)';


// } // pomysł na zmienianie tła w gradiencie, dopracować i będzie działaś, jakąś pętlę trzeba zrobić

const addEventListenerToInputs =(event) => {

    const inputs = document.querySelectorAll('input');

    for (let i = 0, len = inputs.length; i < len; i++) {

       
        const input = inputs[i]
        const prevInputValue = input.value
        console.log(prevInputValue)
        console.log(input)
        input.addEventListener(event, () => {input.focus ? input.value = "" : input.value = prevInputValue}, false);
        input.value === "" ? input.value = prevInputValue : input.value
    }
}

addEventListenerToInputs('focus'); 

// all buttons are working, but value of button isn't back so there is empty input if there is no valid value



// This one works but its not enough

const uiSignUpPanelShow = () => {
    const signUpShow = document.querySelector('.uiSignUpPanelHide');
    console.log(signUpShow.className)
    const signUpButton = document.querySelector('.buttonSignUp')
    signUpButton.addEventListener('click', () => {signUpShow.style.display === "none" ? signUpShow.className = '.uiSignUp' : signUpShow.className = '.uiSignUpPanelHide'}, false)
}

uiSignUpPanelShow();

const uiLogInPanelShow = () => {
    const logInShow = document.querySelector('.uiLogInPanelHide');
    const logInButton = document.querySelector('.buttonLogIn')
    logInButton.addEventListener('click', () => {logInShow.className === ".uiLogInPanelHide" ? logInShow.className = '.uiLogIn' : logInShow.className = '.uiLogInPanelHide'}, false)
}

uiLogInPanelShow();

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