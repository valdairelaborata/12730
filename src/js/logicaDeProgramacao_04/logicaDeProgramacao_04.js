/* for (let index = 0; index < 10; index++) {
         document.write('<p>Opa! for ' + index + ' </p>')
     }
     document.write('<hr>')
 
     var indexWhile = 0
     while (indexWhile < 10) {
         document.write('<p>Opa! while ' + indexWhile + ' </p>')
         indexWhile++
     }

    function opa() {
        var valorAnterior = document.getElementById('divResultado').innerHTML;
        console.log(valorAnterior)

        document.getElementById('divResultado').innerHTML = 'Outro valor!'
    }*/

    function salvar() {

        var nome = document.getElementById('txtNome').value;
        var txtIdade = document.getElementById('txtIdade');
        var email = document.getElementById('txtEmail').value;
        var telefone = document.getElementById('txtTelefone').value;
        var mensagem = document.getElementById('txtMensagem').value;

        validaDados(nome, txtIdade, email, telefone, mensagem)

    }

    function validaDados(nome, txtIdade, email, telefone, mensagem) {
        if (nome === '' || nome === undefined) {
            alert('Nome inválido!')
            document.getElementById('txtNome').focus();
            return;
        } else if (txtIdade.value < 18) {
            alert('Idade inválida!')
            txtIdade.focus();
            return;
        }

        exibirResutado(nome, txtIdade, email, telefone, mensagem)
    }

    function exibirResutado(nome, txtIdade, email, telefone, mensagem) {
        document.write('<h1>Registro enviado com sucesso!</h1>')
        document.write('<p> Nome: ' + nome + ' </p>')
        document.write('<p> Idade: ' + txtIdade.value + ' </p>')
        document.write('<p>E-mail: ' + email + ' </p>')
        document.write('<p>Telefone: ' + telefone + ' </p>')
        document.write('<p>Mensagem: ' + mensagem + ' </p>')
    }