document
    .getElementById("Registration-form")
    .addEventListener("submit", function(event){
        event.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        console.log(username + "" + email + "" + password + "" + confirmPassword );
        username = username.trim()
        if (username.trim() === ""){
            document.getElementById ("usernameError").innerHTML = "Nome de Utilizador é obrigatório"
            return;
        }

        if (email.trim() === ""){
            document.getElementById ("emailError").innerHTML = "Email é obrigatório"
            return;
        }

        if (password.trim() === ""){
            document.getElementById ("passwordError").innerHTML = "Password é obrigatório"
            return;
        }else if (password.length < 6){
             document.getElementById ("passwordError").innerHTML = "Deve conter mais de 5 caracteres"
             return
        }

         if (confirmPassword.trim() === ""){
            document.getElementById ("confirmPasswordError").innerHTML = "É obrigatório confirmar a password"
            return;
        }else if(confirmPassword != password){
            document.getElementById ("confirmPasswordError").innerHTML = "Passwords diferentes"
            return;
        }

        alert("Formulário submetido com sucesso")
    })

    document.getElementById('Registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

        const username =
        document.getElementById('username').value;
        const email =
        document.getElementById('email').value;
        const password =
        document.getElementById('password').value;
        const confirmPassword =
        document.getElementById('confirmPassword').value;

        if (username, email, password && confirmPassword) {

    document.getElementById('Registration-form').style.display = 'none';
    
                }else {

                    alert('Por Favor, preencha todos os campos.');
                }
    });



    
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});




document.addEventListener('DOMContentLoaded', function(){

document.getElementById('openFormBtn1').addEventListener('click', function() {
    document.getElementById('Registration-form').style.display = 'block';
    })   

    document.getElementById('openFormBtn2').addEventListener('click', function() {
        document.getElementById('Registration-form').style.display = 'block';
        }) 

        document.getElementById('openFormBtn3').addEventListener('click', function() {
            document.getElementById('Registration-form').style.display = 'block';
            }) 
});



