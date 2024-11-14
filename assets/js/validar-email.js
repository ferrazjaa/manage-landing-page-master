

function validarEmail() {
    let emailPlaceholder = document.getElementById('email');
let email = emailPlaceholder.value;
    

    // Verifica se o campo está vazio ou inválido
    if (email === "" || !email.includes('@')) {
        document.getElementById('resultado').innerHTML = "Please insert a valid email";
        
        emailPlaceholder.style.setProperty("--input-color", "#f68e74");
        emailPlaceholder.style.setProperty("--placeholder-color", "#f68e74");

        return false; // Impede o recarregamento da página
    }else{
        emailPlaceholder.style.setProperty("--input-color", "#42d327");
        return true; // Retorna true se o email for válido
    }

    
    
}
