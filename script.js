document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let nascimento = document.getElementById("nascimento").value;
    let endereco = document.getElementById("endereco").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    alert(
        "Cadastro enviado com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n" +
        "CPF: " + cpf + "\n" +
        "Telefone: " + telefone + "\n" +
        "Nascimento: " + nascimento + "\n" +
        "Endereço: " + endereco + "\n" +
        "CEP: " + cep + "\n" +
        "Cidade: " + cidade + "\n" +
        "Estado: " + estado
    );
});
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
