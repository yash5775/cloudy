
 // Get both password fields and the checkbox
 let password = document.getElementById('password');
 let confirmPassword = document.getElementById('confirm-password');
 let checkbox = document.getElementById('checkbox');

 // Toggle visibility for both fields
 checkbox.onclick = function () {
     let type = checkbox.checked ? 'text' : 'password';
     password.type = type;
     confirmPassword.type = type;
 };
