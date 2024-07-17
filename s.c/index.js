$(document).ready(function(){

    //Piscar o Titulo da pagina
    setInterval(function() {
        $('h1').fadeOut(2000).fadeIn(5000);
    }, 1000);

    $('h2').append(' de cores');
    $('#btn_mostrar_apagar').text('Apagar')

    //Mostrar e apagar lista de nomes
    $('#btn_mostrar_apagar').on('click', function(){
        if ($('li').is(':visible')) {
            $('#btn_mostrar_apagar').text('Mostrar')
            $('li').fadeOut(2);
        }else{
            $('#btn_mostrar_apagar').text('Apagar')
            $('li').fadeIn(1)
            pinta('white')
        }
    })

    //Pintar da cor q deseja a lista
    $('#pintar_btn').on('click', function() {
        let corDigitada = $('#corInput').val();
        pinta(corDigitada);
        $('#corInput').val('')
    });
    function pinta(cor) {
        $('li').css({'color': cor});
        if (!cor || !isValidColor(cor)){
            $('#mensagem_erro').text('Digite uma cor valida').fadeIn(500).fadeOut(3000)
        }else {
            $('li').css({'color': cor});
            $('#mensagem_erro').text(''); 
        }
    }

    //valida se a cor existe
    function isValidColor(cor){
        let coresValidas = ['blue', 'green', 'red', 'black', 'white', 'pink']
        return coresValidas.includes(cor.toLowerCase())
    }

    

})