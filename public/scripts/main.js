$(function() {

  function init() {
    navToggle();
    outterClick();
    showAll();
    filterItemClicked();
    initInstafeed();
  };

  function navToggle() {
    $('.mobile-nav').on('click', function(event) {
      event.stopPropagation();
      $(this).toggleClass('moveToggle');
      $('nav .nav').toggleClass('showMenu');
    });
  };

  function outterClick() {
    // Close nav is body is clicked.
    $('body').on('click', function(event) {
      if($('.mobile-nav').hasClass('moveToggle')) {
          $('.mobile-nav').removeClass('moveToggle');
          $('nav .nav').removeClass('showMenu');
      };
    }); 

    // Keep nav open if nav is clicked.
    $('nav .nav').on('click', function(event) {
      event.stopPropagation();
    }); 
  }

  // Determine what filter is chosen. Add active class.
  function filterItemClicked() {
    $('.work__nav li').on('click', function(event) {
      event.preventDefault();
      $('.work__nav li').removeClass( 'active' );
      $(this).addClass( 'active' );

      var filterBy = $('.work__nav li.active').children( 'a' ).data( 'filter' ); 

      if( filterBy.indexOf('all') > -1 ) {
        showAll();
      } else {
        adjustGridItems( filterBy );
      }
    });       
  };

  function showAll() {
    $('.work__container section').each(function() {
      $('.work__nav li').eq(0).addClass(' active ');
      $(this).addClass( 'filterByThis' );
    });
  };
  
  // Add filterByThis class to items whose filter is chosen above. Handle animation in CSS.
  function adjustGridItems( filterBy ) {
    $('.work__container section').each(function(index, value) {

      $(this).removeClass( 'filterByThis' );

      var role = $(this).data( 'role' );
      var match = $( '.work__container section[data-role*=' + filterBy + ']' );

      match.addClass( 'filterByThis' );

    });
  };  

  function initInstafeed() {
    var feed = new Instafeed({
        get: 'user',
        target: 'instafeed',
        userId: 398474966,
        accessToken: '398474966.467ede5.f4990701d3c9465d9ebdc0865bed48e4',
        links: 'false',
        limit: 60,
        sortBy: 'most-liked',
        filter: function(image) {
          return image.tags.indexOf('noport') === -1;
        }
    });
    feed.run();    
  }

  init();	

});
