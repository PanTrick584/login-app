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


// let input = document.querySelectorAll('input');
// console.log(input)
const inputs = document.querySelectorAll('input');


let inputChange = () => {
    // console.log(input.className)
    input.className ;
}

const addEventListenerToInputs =(event) => {
    
    for (let i = 0, len = inputs.length; i < len; i++) {
       
        const input = inputs[i]
        const prevInputValue = input.value
        console.log(input)
        input.addEventListener(event, () => {input.focus ? input.value = "" : console.log('duno?')}, false);
        // input.addEventListener('mouseout', () => {input.value = "" ? prevInputValue : console.log('cośwymyśle')}, false)
    }


}

addEventListenerToInputs('focus'); 

// all buttons are working, but value of button isn't back so there is empty input if there is no valid value





// Menu wyświetlania inputów
// let buttonSignLog = document.querySelector('.buttonSignLog');
// let uiSignUpPanelShow = () => {
    
//     let buttonLogIn = document.querySelector('.buttonLogIn')
//     let signUpShow = document.querySelector('.uiSignUpPanelHide')
//     let logInShow = document.querySelector('.uiLogInPanelHide')

//     let signUpChange = () => {
//         signUpShow.className = '.uiSignUp';
//         console.log(2)
//     }
//     return signUpChange()
// }
// buttonSignLog.addEventListener(onclick, signUpChange(), false)


// const inputValueChange = () => {
//     let inputs = document.querySelectorAll('input').forEach(inp = () => {
    
//         let input = inp;
//         input.value = '';
//         console.log(input)
//         return input
    
//     })
// input.addEventListener("click", inputs(), false);
// }

// This one works but its not enough

let uiSignUpPanelShow = () => {
    let signUpSow = document.querySelector('.uiSignUpPanelHide').className = '.uiSignUp';
}
let uiLogInPanelShow = () => {
    let logInShow = document.querySelector('.uiLogInPanelHide').className = '.uiLogIn';
}

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