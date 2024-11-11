function validarEmail() {

    let emailPlaceholder = document.getElementById('email');
    let email = emailPlaceholder.value;

    // Verifica se o campo está vazio ou inválido
    if (email === "" || !email.includes('@')) {
        document.getElementById('resultado').innerText = "Please insert a valid email";
        
        emailPlaceholder.style.setProperty("--placeholder-color", "#f68e74");

        return false; // Impede o recarregamento da página
    }

    return true; // Retorna true se o email for válido
}
