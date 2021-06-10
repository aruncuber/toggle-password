const password = document.getElementById("password");

const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click",function(){
   const passwordType = password.getAttribute("type") === "password" ? "text" : "password";
   password.setAttribute("type",passwordType);  
});