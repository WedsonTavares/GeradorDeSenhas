// Seleção de elementos do DOM
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassoword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// Conjunto de caracteres para gerar a senha
let charset = "*@#$abcdefghijklmnopqrstuvwxyz0123456789";
let novaSenha = "";

// Inicialização do valor do slider
sizePassoword.innerHTML = sliderElement.value;

// Atualização do valor exibido conforme o slider é movido
slider.oninput = function () {
    sizePassoword.innerHTML = this.value;
}

// Função para gerar a senha
function generatePassoword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Exibição da senha gerada e remoção da classe 'hide' para mostrar o container
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

// Função para copiar a senha para a área de transferência
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
