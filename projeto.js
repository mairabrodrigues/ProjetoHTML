
let registo = document.getElementById('rgt-btn').addEventListener('click',function(){
    window.location.href="http://127.0.0.1:5500/registo_utilizador.htm"
})

let login = document.getElementById('login-btn').addEventListener('click',abrirModal);

function abrirModal(){
    document.getElementById('modal').style.display='flex';
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('email').focus();

}
function fecharModal(){
    document.getElementById('modal').style.display='none';
    document.getElementById('overlay').style.display = 'none';
}

function validarCampos() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var errorMessageElement = document.getElementById('errorMessage');

    if (email.trim() === '' || senha.trim() === '') {
        errorMessageElement.textContent = 'Ambos os campos são obrigatórios.';
    } else {
        
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('senha', senha);

        
        fetch(`${"http://localhost:3000/utilizadores"}?${params.toString()}`)
            .then(response => response.json())
            .then(utilizadores => {
                const utilizadorEncontrado = utilizadores.find(user => user.email === email && user.senha === senha);

                if (!utilizadorEncontrado) {
                    errorMessageElement.textContent = 'E-mail ou senha inválidos.';
                } else {
                      window.location.href="http://127.0.0.1:5500/perfil.html";   
                }
            })
            .catch(error => {
                console.error('Erro ao realizar a solicitação à API:', error);
                errorMessageElement.textContent = 'Erro ao realizar a solicitação à API.';
            });
    }
}
let currentSlide = 1;

    function showSlide(n) {
      const slides = document.getElementsByClassName('slide');
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[n - 1].style.display = 'block';
    }

    function nextSlide() {
      currentSlide = (currentSlide % 5) + 1;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentSlide);

    document.addEventListener("DOMContentLoaded", function () {
        var scrollToTopButton = document.getElementById('scroll-to-top');
  
        window.onscroll = function () {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
          } else {
            scrollToTopButton.style.display = "none";
          }
        };

        scrollToTopButton.addEventListener('click', function () {
          document.body.scrollTop = 0; 
          document.documentElement.scrollTop = 0; 
        });
      });


      document.addEventListener("DOMContentLoaded", function () {
        const cookieMessage = document.getElementById('cookie-message');
        const acceptButton = document.getElementById('accept-button');
        const overlay = document.getElementById('overlay');
        const body = document.body;
  
        
        if (!localStorage.getItem('cookiesAccepted')) {
          
          cookieMessage.style.display = 'block';
          overlay.style.display = 'block';
          body.classList.add('overlay-visible');
        }
  
        
        acceptButton.addEventListener('click', function () {
         
          cookieMessage.style.display = 'none';
          overlay.style.display = 'none';
          body.classList.remove('overlay-visible');
  
          //localStorage.setItem('cookiesAccepted', 'true');
        });
      });