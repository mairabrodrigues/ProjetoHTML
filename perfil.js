
    async function saudacao() {
        try {
            const response = await fetch("http://localhost:3000/utilizadores");
            const utilizadores = await response.json();

            if (utilizadores.length > 0) {
                const nomeDoUtilizador = utilizadores[1].nome; 
                const horaAtual = new Date().getHours();

                let saudacaoMensagem;

                if (horaAtual >= 5 && horaAtual < 12) {
                    saudacaoMensagem = `Bom dia, ${nomeDoUtilizador}!`;
                } else if (horaAtual >= 12 && horaAtual < 18) {
                    saudacaoMensagem = `Boa tarde, ${nomeDoUtilizador}!`;
                } else {
                    saudacaoMensagem = `Boa noite, ${nomeDoUtilizador}!`;
                }

                document.querySelector('.salut').textContent = saudacaoMensagem;
            }
        } catch (error) {
            console.error('Erro ao obter utilizadores da API:', error);
        }
    }
 saudacao();


 async function carregarDadosDoUsuario() {
    try {
        const response = await fetch("http://localhost:3000/utilizadores");
        const usuarioAtual = await response.json();

        if (usuarioAtual) {
            // Exibe os dados do usuário na página
            document.getElementById("nome").textContent = usuarioAtual[1].nome;
            document.getElementById("email").textContent = usuarioAtual[1].email;
            document.getElementById("morada").textContent = usuarioAtual[1].morada;
            document.getElementById("cp").textContent = usuarioAtual[1].cp;
            document.getElementById("pais").textContent = usuarioAtual[1].pais;
        } else {
            console.error('Usuário não encontrado na API.');
        }
    } catch (error) {
        console.error('Erro ao obter usuário da API:', error);
    }
}

carregarDadosDoUsuario();
