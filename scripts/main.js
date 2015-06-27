var names = ["Chuckwagon", "Charles", "Chuckatollah of Rock and Rollah", "Charlie", "Chuck"];

$(document).ready(function(){
  $('#nickname').text(names[0])
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

    $('#section-1').click(function(){
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(10, 10, 100, 100);
    })


});
