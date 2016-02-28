$(function() {
    //FUNÇÃO PARA ATIVAR O SCROOL SUAVE COM A class="scroll"
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top - 80}, 1000);
    });

    //FIXA A BARRA DE MENU class="sticky"
    $(window).scroll(function(){
        var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

        if (scroll >= 190)
  	         sticky.addClass('fixed');
        else
  	         sticky.removeClass('fixed');
    });
});
