function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("aberto");

}


const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();


    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos.");

        return;

    }


    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});