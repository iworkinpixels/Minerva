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
          return;
      case 40: // down is page down
          return;
      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
});


/* CLOCK STUFF */

$(function(){

    // Cache some selectors

    var clock = $('#clock'),
        alarm = clock.find('.alarm'),
        ampm = clock.find('.ampm');

    // Map digits to their names (this will be an array)
    var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.find('.digits');

    $.each(positions, function(){

        if(this == ':'){
            digit_holder.append('<div class="dots">');
        }
        else{

            var pos = $('<div>');

            for(var i=1; i<8; i++){
                pos.append('<span class="d' + i + '">');
            }

            // Set the digits as key:value pairs in the digits object
            digits[this] = pos;

            // Add the digit elements to the page
            digit_holder.append(pos);
        }

    });

    // Add the weekday names

    var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),
        weekday_holder = clock.find('.weekdays');

    $.each(weekday_names, function(){
        weekday_holder.append('<span>' + this + '</span>');
    });

    var weekdays = clock.find('.weekdays span');

    // Run a timer every second and update the clock

    (function update_time(){

        // Use moment.js to output the current time as a string
        // hh is for the hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        // d is for day of week and A is for AM/PM

        var now = moment().format("hhmmssdA");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

        // The library returns Sunday as the first day of the week.
        // Stupid, I know. Lets shift all the days one position down, 
        // and make Sunday last

        var dow = now[6];
        dow--;

        // Sunday!
        if(dow < 0){
            // Make it last
            dow = 6;
        }

        // Mark the active day of the week
        weekdays.removeClass('active').eq(dow).addClass('active');

        // Set the am/pm text:
        ampm.text(now[7]+now[8]);

        // Schedule this function to be run again in 1 sec
        setTimeout(update_time, 1000);

    })();

    // Switch the theme

    $('a.button').click(function(){
        clock.toggleClass('light dark');
    });

});
