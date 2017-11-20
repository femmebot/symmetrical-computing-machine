$( document ).ready(function() {

  var accordionHeight = $( "section:first-of-type article" ).height();
  var labelHeight;
  $( "article" ).hide();
  $( "section:first-of-type article" ).show();
  $( "section:first-of-type" ).css( "background-color", "#e7e9eb" );
  // labelHeight = $( "section:first-of-type article h1" ).height();
  // alert ( "accordion height: " + accordionHeight + "label height: " + labelHeight );

  $( ".option-input" ).click(function() {
    $( "article" ).hide();
    $( "section" ).css( "background-color", "#d3d9df" );
    $( this ).parent().siblings( "article" ).delay( 400 ).fadeIn( 1200 );
    $( this ).parent().parent( "section" ).css( "background-color", "#e7e9eb" ).fadeIn();
    // accordionHeight = ( this ).parent().parent( "section" ).height();
    // $( "h1").css( "height", accordionHeight );
    // alert ( "accordion height: " accordionHeight );
  });

});
