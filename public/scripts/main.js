$(function() {

  function init() {
    showAll();
    filterItemClicked();
  };
  
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

  init();	

});
