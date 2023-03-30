// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

const form = document.querySelector('#login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // evita o envio do formulário

  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  const username = usernameInput.value;
  const password = passwordInput.value;
  const erro = document.querySelector('#invalid');

  erro.classList.add('d-none');

  if (username === 'admin' && password === 'admin') {
    window.location.replace('home.html');
  } else {
    erro.classList.remove('d-none');
    if (username === 'admin') {
      passwordInput.focus();
    } else {
      usernameInput.focus();
    }
  }
});
