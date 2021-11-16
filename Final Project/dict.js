$(document).ready(function(){
    $("#button").click(function(){
      $("#definition ol").empty();    
      const text = $("#term").val();
      $.post("/search", { 'term': text })
        .done(function (data) {
          if(text.length == 0){
            $("#definition ol").append('<p>Please enter a word!<p>');
          }
          else{
            if(data.length < 1){
              $("#definition ol").append('<p>Word not found!<p>');
            }
            for (let index = 0; index < data.length; index++) {
              $("#definition ol").append('<li>(' + data[index].wordtype + ')::' + data[index].definition + '</li>');
            }
          }
        })
        .fail(function (xhr, status, exception) {
          console.log(xhr, status, exception);
        })
        .always(() => {
          $("#loader").hide();
        });
      $("#loader").show();
    });   
});