$(document).ready(function() {
  $(document).keydown(function(e){
    switch(e.which) {
      case 32: // space bar is submit the currently selected answer
        var url = $('li.selected-answer').attr('href');
        if(url.type != 'undefined') window.location.href = url;
        break;
         
      case 37: // left is select previous answer

      case 39: // right is select next answer
      
      case 38: // up is page up

      case 40: // down is page down

      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
});
