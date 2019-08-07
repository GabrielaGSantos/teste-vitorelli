$(document).ready(function () {
    $('.slick-principal').slick({
        rows: 1,
        slidesPerRow: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
    });

    $('.slick-vitrine').slick({
        rows: 1,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 30000,
    });

    $('.slick-vitrine .valor').each(function (index, element) {
        var elemento = element.innerHTML.split(" ");
        var valorAtual = parseFloat(elemento[1].replace(',', '.'));
        var porcentagem = 25;

        var valorNovo = (valorAtual + (valorAtual * porcentagem / 100)).toFixed(2);
        var resultado = (valorNovo.toString()).replace('.', ',');

        element.innerHTML = 'R$ ' + resultado;

    });
});