/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        //$('#section-bio') $('#section-quotes)
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px').css('font-style', 'italic').css('padding-top', '4px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        
        $('#section-bio').css('background-color', 'grey').css('color', 'white').css('border-radius', '4px')
        .css('font-style', 'italic').css('padding-left', '10px').css('padding-bottom', '4px');
           
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        //let $section = $('<section>').attr('id', 'list-top-rated');
        //$section.append($('<h3>').text('Section Recordings')).appendTo($('#sections'));
    
        //let $section = $('<section>').attr('id', 'section-topRated');
        
        //$('#section-topRated').css('background-color', 'grey').css('color', 'white').css('border-radius', '4px')
        //.css('font-style', 'italic').css('padding-left', '10px').css('padding-bottom', '4px');
        
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
            $('#list-top-rated').append($('<li>').text(recording.title));
        });
        
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Section Recordings')).appendTo($('#sidebar'));
        $('#section-recordings').css('background-color', 'grey').css('color', 'white').css('border-radius', '4px')
        .css('font-style', 'italic').css('padding-left', '10px').css('padding-bottom', '4px');;
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        var recordings = data.discography.recordings;
        
        _.map(recordings, function(recording){
            $('#list-recordings').append($('<li>').text(recording.title));
        });
        
        // YOUR CODE ABOVE HERE //
    });
   // .fail(function() { console.log('getJSON on discography failed!'); });
});


