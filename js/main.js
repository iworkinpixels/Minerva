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
          return;
      case 40: // down is page down
          return;
      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
});


function startTime() {
  var today=new Date();
  var h=today.getHours();
  // The hell with military time
  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  } else {
    ampm = 'AM';
  }
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('clock').innerHTML=h+":"+m+":"+s+" "+ampm;
  t=setTimeout(function(){startTime()},500);
}

function checkTime(i) {
  if (i<10) {
    i="0" + i;
  }
  return i;
}

function switchTo(theID){
  $('li.selected-answer').removeClass('selected-answer');
  $(theID).addClass('selected-answer');
}

