let signupName = document.getElementById('signupName')
let signupEmail = document.getElementById('signupEmail')
let signupPassword = document.getElementById('signupPassword')
let LoginEmail = document.getElementById('LoginEmail')
let LoginPassword = document.getElementById('LoginPassword')
let usernameelement= document.getElementById('username')
// signup section
let regArray = []
if (localStorage.getItem('users') == null) {
    regArray = []
} else {
    regArray = JSON.parse(localStorage.getItem('users'))
}
function signUp(){
    // check of not found
    if (signupName.value && signupEmail.value && signupPassword.value) {
        if(validation(signupName.value,signupEmail.value,signupPassword.value)){ 
           let usersExist=regArray.findIndex((element) =>{
            if(element.name==signupName.value&&element.email==signupEmail.value&&element.password==signupPassword.value)
            return element
           })
           if(usersExist==-1){
                let signUp = {
                    name: signupName.value,
                    email: signupEmail.value,
                    password: signupPassword.value,
                }
                regArray.push(signUp)
                localStorage.setItem('users', JSON.stringify(regArray))
                document.getElementById('notfound').innerHTML = '<span class="text-success m-3">Success</span>'
            }
            else{

                document.getElementById('notfound').innerHTML = '<span class="text-danger m-3">email already exists</span>'
            }
           
        }
        else{
            document.getElementById('notfound').innerHTML = '<span class="text-danger m-3">Name Wrong or Email Wrong or password wrong</span>'
        }
    }else{
    document.getElementById('notfound').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'}
}
function validation(name,email,password) {
    let regname=/^[a-zA-Z ]{2,30}$/;
    let regemail=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
    let regpassword=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regname.test(name)&&regemail.test(email)&&regpassword.test(password)){
        return true;
    }  
}
function validationForLogin(email,password) {
    let regemail=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
    let regpassword=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regemail.test(email)&&regpassword.test(password)){
        return true;
    }  
}
// login section
function login(){
    if(LoginEmail.value&&LoginPassword.value){
        if(validationForLogin(LoginEmail.value ,LoginPassword.value)){
            let usersExist=regArray.findIndex((element) =>{
            if(element.email==LoginEmail.value&&element.password==LoginPassword.value)
                return element
            })
            if(usersExist==-1){
                document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">Please SignUP Frist</span>'
            }
            else{
                let username;
                for (let index = 0; index < regArray.length; index++) {
                    if(regArray[index].email==LoginEmail.value&&regArray[index].password==LoginPassword.value){
                        currentindex=regArray[index].name
                        username=currentindex
                    }
                }
                // console.log(username)
                window.open('home.html')
                // usernameelement.innerHTML="welcome"+username

            }  
        }
        else{
            document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">Name Wrong or Email Wrong or password wrong</span>'
        }
    }
    else{
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
}

