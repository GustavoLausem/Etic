const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const selectCategoria = document.getElementById('categoria');

const previewNome = document.getElementById('previewNome');
const previewEmail = document.getElementById('previewEmail');
const previewCategoria = document.getElementById('previewCategoria');


// Atualiza o nome em tempo real
inputNome.addEventListener('input', (e) => {
    const valor = e.target.value;

    previewNome.textContent = valor.trim() !== "" ? valor : "---";
});


// Verifica o e-mail em tempo real
inputEmail.addEventListener('input', () => {
    const email = inputEmail.value;

    if (email.includes('@') && email.includes('.')) {
        previewEmail.textContent = "Válido";
        previewEmail.className = "text-success fw-bold";
        inputEmail.style.borderColor = "green";
    } else {
        previewEmail.textContent = "Inválido";
        previewEmail.className = "text-danger";
        inputEmail.style.borderColor = "red";
    }
});


// Atualiza a categoria em tempo real
selectCategoria.addEventListener('change', () => {
    const categoria = selectCategoria.value;

    if (categoria === "") {
        previewCategoria.textContent = "Não definida";
        previewCategoria.className = "badge bg-secondary";
    } else {
        previewCategoria.textContent = categoria;
        previewCategoria.className = "badge bg-primary";
    }
});