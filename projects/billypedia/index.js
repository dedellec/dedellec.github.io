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
            $('#list-top-rated').append($('<li>').text(recording.title).click(function(event){
                $('#top-rated-image').attr('src', recording.art);
                $('#image-recordings').attr('src', recordings.art);
            }));
        });
        
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Section Recordings')).appendTo($('#sidebar'));
        $('#section-recordings').css('background-color', 'grey').css('color', 'white').css('border-radius', '4px')
        .css('font-style', 'italic').css('padding-left', '10px').css('padding-bottom', '4px');;
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        var recordings = data.discography.recordings;
        
        _.map(recordings, function(recording){
            var $listItem = $('<li>').addClass('recording').click(function(event){
                $('#list-recordings').attr('src', recording.art);
                $('#recordings-image').attr('src', recording.art);
            });
            var $title = $('<div>').text(recording.title).addClass('title');
            var $artist = $('<div>').text(recording.artist).addClass('artist');
            var $release = $('<div>').text(recording.release).addClass('release');
            var $year = $('<div>').text(recording.year).addClass('year');
            //var $art = $('<div>').text(recording.art).addClass('art');
            $listItem.append($title, $artist, $release, $year);
            $('#list-recordings').append($listItem);
            //<div id ='' class = ''>
            //$('#list-recordings').append($('<li>').addClass('recording').text(recording.title));
        });
    
        
        $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image')
        .attr('src', topRated[0].art));
        
        $('#section-recordings').prepend($('<img>').attr('id', 'recordings-image')
        .attr('src', recordings[0].art));
        
        var billyImages = data.images.billy;
        
        $('#image-billy').click(function(event){
            //alert('test');
            //console.log(event.currentTarget);
            var billyPic = $('#image-billy').attr('src');
            var billyIndex = _.indexOf(billyImages, billyPic);
            //console.log(billyPic, billyIndex);
            if(billyIndex < billyImages.length - 1){
                billyPic = billyImages[billyIndex + 1];
            } else {
                billyPic = billyImages[0];
            }
            //console.log(billyPic, billyIndex);
            $('#image-billy').fadeOut(0);
            $('#image-billy').attr('src', billyPic);
            $('#image-billy').fadeIn();
        });
        
       /*$('li').click(function(event){
            var currentImg = $(event.currentTarget);
            var newImg = currentImg.attr('src');
            if (currentImg.attr('class') === 'recording'){
               $('recordings-image').attr('src', newImg);
            } else {
                $('#top-rated-image').attr('src', newImg);
            }
        });*/
            
        
        /*var topRatedImages = _.pluck(data.discography.topRated, 'art')
            $('#top-rated-image').click(function(event){
            //alert('test');
            //console.log(event.currentTarget);
            var trackPic = $('#top-rated-image').attr('src');
            var trackIndex = _.indexOf(topRatedImages, trackPic);
            //console.log(billyPic, billyIndex);
            if(trackIndex < topRatedImages.length - 1){
                trackPic = topRatedImages[trackIndex + 1];
            } else {
                trackPic = topRatedImages[0];
            }
            $('#top-rated-image').attr('src', trackPic);
        });
        
        var recordingImages = _.pluck(data.discography.recordings, 'art')
            $('#recordings-image').click(function(event){
            //alert('test');
            //console.log(event.currentTarget);
            var recordingPic = $('#recordings-image').attr('src');
            var recordingIndex = _.indexOf(recordingImages, recordingPic);
            //console.log(billyPic, billyIndex);
            if(recordingIndex < recordingImages.length - 1){
                recordingPic = recordingImages[recordingIndex + 1];
            } else {
                recordingPic = recordingImages[0];
            }
            $('#recordings-image').attr('src', recordingPic);
        });
        */
        
        var createTable = function(riderData){
        var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = riderData.map(createRow);
    $table.append($rows);
    return $table;
};

let riderData = data.rider;
createTable(riderData).appendTo('.content');
        
        // YOUR CODE ABOVE HERE //
    });
  //.fail(function() { console.log('getJSON on discography failed!'); });
});


