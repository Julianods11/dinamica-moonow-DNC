function Validar(){

    var value = document.getElementById('nome').value;
    var value1 = document.getElementById('email').value;
        if (value === '' || value1 === '') {
        window.alert('Não foi possível realizar o seu cadastro');
    }else{
        window.alert('Cadastro efetuado com sucesso');
    }
}