This javascript calendar will pull data from a Google Calendar to display in list format (thereby making it easy for nontechnical users to update their event listings on their site).  With a few simple modifications the calendar can show 5 future events or unlimited past events.  Locations, with Google Maps will be added if the event is created with a location.

The original script was found here:

http://kevin.deldycke.com/2012/07/displaying-upcoming-events-google-calendar-javascript/

Also much credit is given to my friend, Peter Kamali, for helping figure out how to engineer this project.

Before starting: 
1. Set up a Google calendar and follow all instructions up to the JSON version.  My version does not have the RSS and iCal feeds as mentioned.
2. In the <head> of your document, paste this from the Google Developers Library:
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

Now you've got it.  To set the calendar dates AHEAD, do the following:
1.  Comment out the section that looks like: //Get the list of previous events -UP THROUGH- // Parse and render each event

To set the calendar dates in the PAST, do the following:
1. Comment out the section that looks like:    // Get list of upcoming iCal events formatted in JSON -UP THROUGH-  //Get the list of previous events.
2. Keep the following lines commented out (or delete them if you like): 
          // Utility method to pad a string on the left
          // Source: http://sajjadhossain.com/2008/10/31/javascript-string-trimming-and-padding/
          // Parse and render each event

 Then you're good to go!  Paste in the script wherever you want, go nuts.

 Please note, I am not a JS/jQuery expert.  If you note any bugs, please don't hesitate to let me know (politely).  I hope you find this of use!
 

