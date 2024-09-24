function userInformation(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username,password);
}

function userSex(){
    let mail = document.getElementById('mail');
    let femail = document.getElementById('femail');
    if(mail.checked){
        console.log(mail.value)
    }else if(femail.checked){
        console.log(femail.value)
    }
}

function city(){
    const city = document.getElementById('city');
    console.log(city.options[city.selectedIndex].value)
}