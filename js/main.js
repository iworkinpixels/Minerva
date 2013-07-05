$(document).ready(function() {
  $(document).keydown(function(e){
    switch(e.which) {
      case 37: // left
        var url = $('#answer-a').attr('href');
        if(url.type != 'undefined') window.location.href = url;
        break;

      case 38: // up
        var url = $('#answer-b').attr('href');
        if(url.type != 'undefined') window.location.href = url;
        break;

      case 39: // right
        var url = $('#answer-c').attr('href');
        if(url.type != 'undefined') window.location.href = url;
        break;

      case 40: // down
        var url = $('#answer-d').attr('href');
        if(url.type != 'undefined') window.location.href = url;
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
});
