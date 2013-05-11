<ul id="next-gigs">
	  <li class>No Upcoming Events</li>
	  <li class></li>
	</ul>

	<script type="text/javascript" charset="utf-8">
function ISODateString(d){
 function pad(n){return n<10 ? '0'+n : n}
 return d.getUTCFullYear()+'-'
      + pad(d.getUTCMonth()+1)+'-'
      + pad(d.getUTCDate())+'T'
      + pad(d.getUTCHours())+':'
      + pad(d.getUTCMinutes())+':'
      + pad(d.getUTCSeconds())+'Z'}

function hourAgo() {
  return new Date((new Date()).getTime() + 60*60000);
}
          // Change Months Numbers for Months
          var month = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

          var weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	  jQuery(function(){
	  // Get list of upcoming iCal events formatted in JSON
	  jQuery.getJSON("https://www.google.com/calendar/feeds/bathtubcalendar%40gmail.com/public/full?orderby=starttime&sortorder=ascending&singleevents=true&futureevents=true&max-results=5&alt=json&start-min=" + ISODateString(hourAgo()), function(data){
	  //Get the list of previous events
	  // jQuery.getJSON("https://www.google.com/calendar/feeds/bathtubcalendar%40gmail.com/public/full?orderby=starttime&sortorder=descending&singleevents=true&futureevents=false&alt=json&start-max=" + ISODateString(hourAgo()), function(data){
          // Utility method to pad a string on the left
          // Source: http://sajjadhossain.com/2008/10/31/javascript-string-trimming-and-padding/
          // Parse and render each event
          jQuery.each(data.feed.entry, function(i, item){
          if(i == 0) {
          jQuery( "#next-gigs li" ).first().hide();
          };
          var event_url = jQuery.trim(item.content.$t);
          var event_header = item.title.$t;
          if(event_url.length > 0) {
          event_header = "<a href='" + event_url + "'>" + event_header + "</a>";
          };

          // Format the date string
          var d = new Date(item.gd$when[0].startTime);
          var d_string = '<strong>' + weekday[d.getDay()] + ' ' +
            month[(d.getMonth()+1)] + ' ' + (d.getDate()+1) + ', ' +
            d.getFullYear() + '</strong>';
          if(d.getHours() != 0 || d.getMinutes() != 0) {
          d_string = d_string + ' at ' + d.getHours()%12 + ':' + 
          (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() +
			    (d.getHours() < 12 ? 'a' : 'p');
					    };

					    var event_location = item.gd$where[0].valueString ? ("<br/>Venue: <a href='http://maps.google.com/maps?q=" + item.gd$where[0].valueString + "' target='_blank'>"
					    + item.gd$where[0].valueString + "</a>") : '';

					    // Render the event
					    jQuery( "#next-gigs li" ).last().before(
					    "<li><strong>"
					    + event_header
					    + "</strong><br/>Date: "
					    + d_string
					    + event_location
					    + "</li>"
					    );
					    });
					    });
					    });
					    </script>
