const data = {
    user1: {
        name: 'Andrzej',
        password: 'LubiePlacki11',
        messege: "Witaj ",
    },
    user2: {
        name: 'Grzegorz',
        password: 'DoktorCyckarz69'
    },
    user3: {
        name: 'Janusz',
        password: "Haslo1234"
    }
}

const checkPassword = () => {
    const valuePassword = document.querySelector('.password').value;
    valuePassword === `${data.user1.password}`
     ? showStatus() : console.log('Hasło nieprawidłowe');
     console.log(valuePassword);
}


const showStatus = () => {
    const status = '! You were logget into your account. What do you want to check?';
    console.log(`${data.user1.messege} ${data.user1.name} ${status}`);
    // const uiPanelHide = document.querySelector('.uiPanelShow').className = 'uiPanelHide';
    // const userPanelShow = document.querySelector('.userPanelHide').className = 'userPanelShow';
    window.location.href = "dist/userAccount/userAccount.html"
}
