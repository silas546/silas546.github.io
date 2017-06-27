/* global $ _ opspark */
$(document).ready(function() {
    $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
    $('body').css('background-color', '#daaaad');
    $('#section-bio').css('font-family', 'Georgia').css('padding-right', '10px').css('padding-left', '10px');
    $('#section-praise').css('font-family', 'Courier New').css('padding-right', '10px').css('padding-left', '10px');
    $('#section-quotes').css('padding-right', '10px').css('padding-left', '10px').css('font-family', 'Helvetica');
    $('#quotes:last-child').css('padding-bottom', '4px');
    $('#quotes').css('font-style', 'italic');
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        _.map(topRated, function(value, index, array){
            
            let $topRated = $('<li>').attr('class', 'list-top-rated');
            $topRated.append($('<li>').text(value.title)).appendTo($('#list-top-rated'));
            
       });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


