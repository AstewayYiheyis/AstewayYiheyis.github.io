$("document").ready(function(){
    var win = false;
    $("#maze #start").click(function(){
        win = false;
        $("#status").text('Click the "S" to begin.');
        $("#maze .boundary").removeClass("youlose").addClass("boundary");
        $('#maze').mouseleave(function() {
            if(win == false){
                $("#maze .boundary").addClass("youlose");
                $("#status").text("You Lose! :]");
            }
        })
        $("#maze .boundary").mouseover(function(){
            if(win == false){
                $("#maze .boundary").addClass("youlose");
                $("#status").text("You Lose! :]");
            }
        });
        $("#end").mouseover(function(){
            if($("#maze .boundary").hasClass("youlose")){
                $("#status").text("You Lose! :]");
            }
            else{
                win = true;
                $("#status").text("You win! :]");
            }   
        })
    });
});