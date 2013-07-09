var mode="answers";

$(document).ready(function() {
  $(document).keydown(function(e){
    switch(e.which) {
      case 32: // space bar is submit the currently selected answer
        var url = $('li.selected-answer a').attr('href');
        if(typeof url != 'undefined') window.location.href = url;
        break;
         
      case 37: // left is select previous answer
          if (mode == 'answers') {
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
          } else {
            if ($('#nav-home').hasClass('selected'))
              rotateNav('#nav-tests');
            else if ($('#nav-tests').hasClass('selected'))
              rotateNav('#nav-weather');
            else if ($('#nav-weather').hasClass('selected'))
              rotateNav('#nav-news');
            else if ($('#nav-news').hasClass('selected'))
              rotateNav('#nav-home');
          }
          break;
            
      case 39: // right is select next answer
          if (mode == 'answers') {
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
          } else {
            if ($('#nav-home').hasClass('selected'))
              rotateNav('#nav-news');
            else if ($('#nav-news').hasClass('selected'))
              rotateNav('#nav-weather');
            else if ($('#nav-weather').hasClass('selected'))
              rotateNav('#nav-tests');
            else if ($('#nav-tests').hasClass('selected'))
              rotateNav('#nav-home');
          }
          break;
      
      case 38: // up is page up
        mode = "nav";
        $('#menubar-coverup').css('display','none');
        $('#main-div-coverup').css('display','block');
        return;
      case 40: // down is page down
        mode = "answers";
        $('#menubar-coverup').css('display','block');
        $('#main-div-coverup').css('display','none');
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

function rotateNav(theID){
  $('#nav li.selected').removeClass('selected');
  $(theID).addClass('selected');
  // Turn off all the content
  $('#home').css('display', 'none');
  $('#news').css('display', 'none');
  $('#weather').css('display', 'none');
  $('#tests').css('display', 'none');
  // Bring back the selected one
  switch(theID) {
    case "#nav-home":
      $('#home').css('display', 'block');
      break;
    case "#nav-news":
      $('#news').css('display', 'block');
      break;
    case "#nav-weather":
      $('#weather').css('display', 'block');
      break;
    case "#nav-tests":
      $('#tests').css('display', 'block');
      break;

  }

}

