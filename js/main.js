function switchTo(theID){
  $('li.selected-answer').removeClass('selected-answer');
  $(theID).addClass('selected-answer');
}

$(document).ready(function() {
  $(document).keydown(function(e){
    switch(e.which) {
      case 32: // space bar is submit the currently selected answer
        var url = $('li.selected-answer a').attr('href');
        if(typeof url != 'undefined') window.location.href = url;
        break;
         
      case 37: // left is select previous answer
          if ($('#li-d').hasClass('selected-answer'))
            switchTo('#li-c');
          else if ($('#li-c').hasClass('selected-answer'))
            switchTo('#li-b');
          else if ($('#li-b').hasClass('selected-answer'))
            switchTo('#li-a');
          else if ($('#li-a').hasClass('selected-answer'))
            switchTo('#li-d');
          else
            switchTo('#li-d');
          break;
            
      case 39: // right is select next answer
          if ($('#li-a').hasClass('selected-answer'))
            switchTo('#li-b');
          else if ($('#li-b').hasClass('selected-answer'))
            switchTo('#li-c');
          else if ($('#li-c').hasClass('selected-answer'))
            switchTo('#li-d');
          else if ($('#li-d').hasClass('selected-answer'))
            switchTo('#li-a');
          else
            switchTo('#li-a');
          break;
      
      case 38: // up is page up
          break;
      case 40: // down is page down
          break;
      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
});
