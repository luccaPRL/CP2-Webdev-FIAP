document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contato-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        
        if (nome.length < 2) {
            alert("O nome deve ter no mínimo 2 letras.");
            return;
        }
        if (!email || !telefone || !mensagem) {
            alert("Todos os campos obrigatórios devem ser preenchidos.");
            return;
        }

        
        alert(`Enviado com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
    });


    const animais = document.querySelectorAll('.animal');
    animais.forEach(animal => {
        animal.addEventListener('click', function () {
            const nome = animal.querySelector('h3').innerText;
            const descricao = animal.querySelector('p').innerText;
            alert(`Nome: ${nome}\n\nDescrição: ${descricao}`);
        });
    });
});
