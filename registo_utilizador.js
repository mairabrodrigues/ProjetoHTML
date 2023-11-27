const urlAPI = "http://localhost:3000/utilizadores";

const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação do formulário
    if (validateForm()) {
        // Se o formulário for válido, envia os dados para o servidor
        sendFormData();
    } else {
        alert('Por favor, preencha corretamente todos os campos.');
    }
});

function validateForm() {
    const senha = document.getElementById('senha').value;
    const senhaConfirm = document.getElementById('senhaConfirm').value;

    if (senha !== senhaConfirm) {
        alert('As senhas não coincidem.');
        return false;
    }

    return true;
}

async function sendFormData() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const morada = document.getElementById('morada').value;
    const cp = document.getElementById('cp').value;
    const pais = document.getElementById('pais').value;

    try {
        const response = await fetch('http://localhost:3000/utilizadores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                senha,
                morada,
                cp,
                pais
            })
        });

        if (response.status === 201) {
            alert('Novo usuário criado com sucesso!');
            form.reset(); 
            
        } else {
            alert('Erro ao enviar o formulário.');
        }
    } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
    }
}

