// fetch images of movies from imdb api
fetch('https://imdb8.p.rapidapi.com/title/get-images', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": "840f98efd7msh50e7d13ab092952p1ac739jsnf13a5333fb18",
          "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
      })
    .then(function(response) {  
        return response.json();
    }).then(function(data) {
        // console.log(data.images);
        var html = ""; 
        $(data.images).each(function (index, item) {
            // console.log(item.url);
            html += "<div class='row'>";
            html += "<img src='" + item.url + "' alt='image'  />";
            html += "</div>";
        });
        $('#images-of-movies').html(html);
    });
