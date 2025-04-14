document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtém os valores dos campos
    const guests = document.getElementById('guests').value;
    const unit = document.getElementById('unit').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const observations = document.getElementById('observations').value;

    // Seleciona as mensagens
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Validação: verifica se os campos obrigatórios estão preenchidos
    if (!guests || !unit || !name || !email || !phone) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    // Se todos os campos obrigatórios estão preenchidos, exibe mensagem de sucesso
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';

    // Simula o envio do formulário (ex.: exibe os dados no console)
    console.log({
        guests,
        unit,
        name,
        email,
        phone,
        observations
    });

    // Limpa o formulário após o envio
    document.getElementById('requestForm').reset();

    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});