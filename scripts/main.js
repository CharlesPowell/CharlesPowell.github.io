var names = ["Chuckwagon", "Charles", "Chuckatollah", "Charlie", "Chuck", 'Chuckles', 'Chöchi'];
var randomName = function(){return names[Math.floor(Math.random() * names.length)]};

var nameTransition = function(){
  $("#nickname").fadeOut(function() {
    $('#nickname').text(randomName).fadeIn();
  })
};

$(document).ready(function(){
  $('#nickname').text(randomName)

  setInterval(nameTransition,
    3000);

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
      axis: 'y',
      trigger: 'click',
      reverse: true
    });




});
