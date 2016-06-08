$(function() {

  function init() {
    navController();
    if(window.location.href.indexOf('about') > 1) {
      initInstafeed();  
    }
  }

  function navController() {
    $('nav a').on('click', function() {
      $('nav').attr('data-state', $('nav').attr('data-state') == 'open' ? 'closed' : 'open')
    });  
  }

  function initInstafeed() {
    var feed = new Instafeed({
        get: 'user',
        target: 'instafeed',
        userId: 398474966,
        accessToken: '398474966.467ede5.f4990701d3c9465d9ebdc0865bed48e4',
        links: 'false',
        limit: 60,
        filter: function(image) {
          return image.tags.indexOf('noport') === -1;
        }
    });
    feed.run();    
  }

  init(); 

});
