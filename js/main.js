var p1 = {name:"Hearthstone Deckbuilder",
          pic:"assets/hs-deckbuilder.png",
          desc:"A Ruby on Rails application that lets users build decks in Hearthstone, Blizzard's card game. The content was scraped from the web using Nokogiri and openuri.",
          url:"https://github.com/CharlesPowell/HearthstoneDeckBuilder/",
          points:["Ruby on Rails", "OpenURI", "Nokogiri"]};

var p2 = {name:"Point of Sale RESTful App",
          pic:"https://github.com/CharlesPowell/RESTaurant/blob/master/RESTaurant.png?raw=true",
          url:"https://github.com/CharlesPowell/RESTaurant",
          desc: "A point of sale system for a mock restaurant built in Sinatra",
          points:["JavaScript", "Sinatra", "jQuery"]};

var p3 = {name:"Triviabase",
          pic:"assets/triviabase.png",
          desc:"A multiplayer trivia game which lets people compete and chat in real time. My team and I used Ruby on Rails to handle the backend with authentication and used JavaScript and Firebase to handle the frontend interaction", url:"https://github.com/WDI-Woodstock-Sally/Trivia-App/",
          points:["Firebase", "jQuery", "Ruby backend"]};

var p4 = {name:"D3 Synthesizer",
          pic:"assets/synth.png",
          desc:"A simple JavaScript Synthesizer which animates the notes you play with D3.",
          url:"https://github.com/CharlesPowell/js_synth/",
          points:["synth.js", "D3", "JavaScript"]};

var changeProj = function(proj){
  console.log(proj.name.toString());
  $("#name-main").text(proj.name.toString());
  $("#img-main").attr("src", proj.pic)
  $("#proj-desc").text(proj.desc.toString());
  $("#point1").text(proj.points[0]);
  $("#point2").text(proj.points[1]);
  $("#point3").text(proj.points[2]);
  $("#point4").text(proj.points[3]);
  $("#repo-link").attr("href",proj.url.toString());

}


//proj-points img-main proj-desc proj-name
$(document).ready(function(){
  changeProj(p1);

  $("#proj1").click(function(){
      changeProj(p1);
      $('.current-contact').hide();
      $('.current-project').show();
  })
  $("#proj2").click(function(){
      changeProj(p2);
      $('.current-contact').hide();
      $('.current-project').show();
  })
  $("#proj3").click(function(){
      changeProj(p3);
      $('.current-contact').hide();
      $('.current-project').show();
  })
  $("#proj4").click(function(){
      changeProj(p4);
      $('.current-contact').hide();
      $('.current-project').show();
  })
  $("#contact-click").click(function(){
    $('.current-project').hide();
    $('.current-contact').show();
    $(".navbar-toggle").click()
  })
  $("#portfolio-click").click(function(){
    $('.current-contact').hide();
    $('.current-project').show();
    $(".navbar-toggle").click()
  })

  $(".navbar-toggle").click()



})
