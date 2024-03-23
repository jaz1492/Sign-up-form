const passwordChecker=function(){
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    return console.log(password === confirmPassword? true : false);
}