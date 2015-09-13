$(document).ready(function(){

  // get total more-*
  var t = $('div[id^="more-"]').length;
  // decrease 1, because total count start from 0
  t = t - 1;
  // not enough content? then hide the "see more text"
  if (t <= 0) {
    $("#more_shots").hide();
  }

  // count for more-*
  var i = 0;
	$("#more_shots").on('click', function(e){
    i ++;
		//console.log('clicked');
		e.preventDefault();

    $("#more-"+[i]).removeClass("hide");

    //if there is no shots, then replace the display text or hide it
    if(i === t){
      // replace the text
      //$(this).replaceWith($('<p class="text-lg font-bold">No more shots</p>'));
      // hide the text
      $(this).hide();
    }

	});
});
