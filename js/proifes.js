$(function() {
//ocultar btn subir ao carregar a pagina
	$('.subir').fadeOut();
//inicio funcao scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
//navegacao principal adicionando/removendo classe para fixar
        if (scroll >= 200) { //altura na tela px
            $(".navegacao").addClass('navegacao-fixa');
        } else {
            $(".navegacao").removeClass("navegacao-fixa");
        }
//btn subir transicoes
        if ($(this).scrollTop() > 220) { //altura na tela px
            $('.subir').fadeIn();
        } else {
            $('.subir').fadeOut();
        }
    });
//btn subir acao subir
    $('.subir').click(function () {
        $("html, body").animate({
            scrollTop: 0 //altura na tela px
        }, 1000); //velocidade
        return false;
    });
});
// adicionando/removendo classe para menu mobile
function checkWidth() {
    if ($(window).width() < 768) {
        $('#navegacao').addClass('menu-mobile'); // adicionando classe para menu mobile se abaixo de 768px
        $(".navegacao").removeClass("navegacao-fixa"); //removendo classe menu fixo no mobile
    } else {
        $('#navegacao').removeClass('menu-mobile'); //removendo classe de menu mobile se for acima de 768px
    }
}

$(window).resize(checkWidth);

// ativando funcao modaal fullscreen usando no menu mobile(<768px) agora
$('.fullscreen').modaal({
		fullscreen: true
});