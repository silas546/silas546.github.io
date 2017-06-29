/* global $ _ opspark */
$(document).ready(function() {
    $('#section-bio').css('font-family', 'Georgia').css('padding-right', '10px').css('padding-left', '10px');
    $('#section-praise').css('font-family', 'Georgia').css('padding-right', '10px').css('padding-left', '10px');
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
            let $topRated = $('<li>').attr('class', 'list-top-rated').text(recording.title);
            $topRated.appendTo('#list-top-rated');
           // $topRated.append($('<li>').text(recording.year));
        });
        $('#section-top-rated').prepend($('<img>').attr('src', data.discography.topRated[0].art));
        
        
        var $recordsSection = $('<section>').attr('id', 'recordings');
        $('#sidebar').append($recordsSection);
        
        
        function makeList(content){
          let $list = $('<ul>').appendTo('#recordings'); 
          _.forEach(content, function(recording){
             var $recordTitle = $('<li>').attr('class', 'recording').appendTo($list);
              $('<li>').text(recording.title).attr('class', 'title').appendTo($recordTitle);
              $('<p>').text(recording.artist).attr('class', 'artist').appendTo($recordTitle);
              $('<p>').text(recording.release).attr('class', 'release').appendTo($recordTitle);
              $('<p>').text(recording.year).attr('class', 'year').appendTo($recordTitle);
          });
          return $list;
        }
        
        var recordings = data.discography.recordings;
        
        let $discHeader = $('<header>').text('Discography:').appendTo('#recordings');
        $('#recordings').append($discHeader);
        
        $('#recordings').append(makeList(recordings));
        
        $('#recordings').prepend($('<img>').attr('src', data.discography.recordings[0].art));
        
       
        var counter = 0;
        $('#image-container-billy').click(function(){
                counter++;
                if(counter === 4){
                   counter = 0; 
                }
                $('#image-billy').fadeOut(0);
                $('#image-billy').attr('src', data.images.billy[counter]).fadeIn();
        });
       
       // Update sidebar album art based on <li> user clicks      
        $('#sidebar li').click(function(e){
              var myTitle = e.target.textContent;
              var allToprated = data.discography.topRated;
              var allRecords = data.discography.recordings;
              var recordClass = e.target.className;
             
              if(e.target.parentElement.className === "list-recordings"){
              allToprated.forEach(function(album, i, a){
                 if(myTitle === album.title){
                     $('#section-top-rated img').fadeOut(0);
                     $('#section-top-rated img').attr('src', album.art).fadeIn();
                 }
                 
              });
              }
             if(e.currentTarget.className === "recording"){
              allRecords.forEach(function(album, i, a){
                 if(myTitle === album[recordClass].toString()){
                 //    $('#recordings img').fadeOut(0);
                     $('#recordings img').attr('src', album.art).fadeIn();
                 }                  
              }); 
             } 
        });

    var createTable = function(allRiders){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $('<td>').text(rider.type);
        var $desc = $('<td>').text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = allRiders.map(createRow);
    $table.append($rows);
    return $table;
};

createTable(data.rider).appendTo('#sections').attr('id', 'riderTable');
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


