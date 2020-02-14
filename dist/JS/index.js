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


const checkLogin = () => {
    const valueLogin = document.querySelector('.login').value;
    Object.keys(data).forEach(user => {
        
        let name = user
        Object.keys(name).forEach(pass => {

        })
        console.log(data.name)  
        console.log(typeof name)
        console.log(name.password)
        valueLogin === name
        ? showStatus(valueLogin) : console.log('Login nieprawidłowy');
            // console.log(valueLogin)
           
         return name
        
    }) 
}

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
