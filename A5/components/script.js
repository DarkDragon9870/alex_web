function loadImage(imagePath) {
    const largeImage = document.getElementById("large-image");
    largeImage.src = imagePath;
    largeImage.style.display = "block";
  }
  
function highlightSection() {
    const section = document.getElementById("highlight-section");
    section.style.backgroundColor = "#f0f0f0";
    section.style.color = "black";
}

function resetSection() {
    const section = document.getElementById("highlight-section");
    section.style.backgroundColor = "";
    section.style.color = "";
}

function validatePassword(event) {
    event.preventDefault(); // Previene el envío del formulario
  
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const errorMessage = document.getElementById("error-message");
  
    if (password1 !== password2) {
      errorMessage.textContent = "Las contraseñas no coinciden.";
      errorMessage.style.display = "block";
    } else if (password1.length < 8) {
      errorMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
      errorMessage.style.display = "block";
    } else {
      alert("S'ha canviat correctament la contrasenya");
      errorMessage.style.display = "none";
      // Aquí puedes agregar código para enviar el formulario si es necesario
    }
  }
  
  // Agregar el evento submit al formulario
  document.getElementById("password-form").addEventListener("submit", validatePassword);

// Agregar el evento submit al formulario
document.getElementById("password-form").addEventListener("submit", validatePassword);
  // Agregar el evento submit al formulario
  document.getElementById("password-form").addEventListener("submit", validatePassword);

function changeTextStyle() {
    const mainText = document.getElementById("hidden");
    mainText.style.color = "#ffffff"; 
    mainText.style.backgroundColor = "#333333"; 
    mainText.style.padding = "10px"; 
    mainText.style.borderRadius = "5px"; 
}

function resetTextStyle() {
    const mainText = document.getElementById("main-text");
    mainText.style.color = ""; 
    mainText.style.backgroundColor = ""; 
    mainText.style.padding = ""; 
    mainText.style.borderRadius = ""; 
}

document.addEventListener("DOMContentLoaded", () => {
    const reloj = document.getElementById("reloj");
    setInterval(() => {
        const now = new Date();
        reloj.textContent = now.toLocaleTimeString();
    }, 1000);
});
