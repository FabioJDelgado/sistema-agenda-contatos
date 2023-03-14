// let formCadastrar = $('#formCadUsuario').on('submit', formValidate);

// function formValidate(evt) {
    
//     if($('#nome').trim().length === 0 || $('#login').trim().length === 0 || $('#senha').trim().length === 0) {
//         alert('Preencha todos os campos!');
//         evt.preventDefault(); 
//         return;
//     }        
//     formSubmit(evt);
// }

// function formSubmit(evt) {
//     let dados = new FormData(evt);
//     console.log(dados);

//     evt.preventDefault();
// }

$(function(){
    $('#formCadUsuario').submit(function(){
        let dados = new FormData(this);
        const controllerUrl = "../controller/UsuarioController.class.php";
        $.ajax({
            url: controllerUrl,
            type: "POST",
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            dataType: "JSON",
            success: successCadUsario,
            error: erroCadUsuario
        });
        return false;
    });
});

function successCadUsario(data) {
    console.log(data);
}

function erroCadUsuario(request, status, error) {
    console.log(request.responseText);
}