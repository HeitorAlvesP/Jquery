$(document).ready(function(){

    //Piscar o Titulo da pagina
    setInterval(function() {
        $('h1').fadeOut(2000).fadeIn(5000);
    }, 1000);
    $('h1').append('De pessoas');

    //Mostrar e apagar lista de nomes
    $('#btn_mostrar_apagar').on('click', function(){
        if ($('li').is(':visible')) {
            $('li').fadeOut(1);
        }else{
            $('li').fadeIn(1)
        }
    })

    //Pintar da cor q deseja a lista
    function pinta (cor) {
        $('#pintar_btn').on('click', pintar)
        function pintar() {
            $('li').css({'color': cor})
        }
    }
    pinta('blue')

})