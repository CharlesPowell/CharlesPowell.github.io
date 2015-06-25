$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        //e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing');
    });
    $('#section-2').scroll(function(){
      console.log('section 2');
    })

    $("#card").flip({
      axis: 'x',
      trigger: 'hover',
      reverse: true
    });

    $(".card-grid").flip({
      axis: 'x',
      trigger: 'hover',
      reverse: true
    });
});
