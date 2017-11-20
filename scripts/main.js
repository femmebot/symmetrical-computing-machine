$( document ).ready(function() {

  // var accordionHeight = $( "section:first-of-type article" ).height();
  // $( "h1").css( "height", accordionHeight );
  $( "article" ).hide();
  $( "section:first-of-type article" ).show();
  $( "section:first-of-type" ).css( "background-color", "#e7e9eb" );


  $( ".option-input" ).click(function() {
    $( "article" ).hide();
    $( "section" ).css( "background-color", "#d3d9df" );
    $( this ).parent().siblings( "article" ).delay( 200 ).fadeIn( 1200 );
    $( this ).parent().parent( "section" ).css( "background-color", "#e7e9eb" ).fadeIn();
    // accordionHeight = ( this ).parent().parent( "section" ).height();
    // $( "h1").css( "height", accordionHeight );
  });

});
