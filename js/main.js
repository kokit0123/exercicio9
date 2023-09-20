$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000-000-000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, coloque o seu nome.'
        }
        
    })
})

