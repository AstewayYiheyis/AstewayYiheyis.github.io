window.onload =  function(){ 
    var btn = document.getElementById("btn");
    var text = document.getElementById("text");
    var size =  parseInt(window.getComputedStyle(text).fontSize); 
    

    btn.onclick = function() {
            setInterval(function(){
                size += 2;
                text.style.fontSize = size + "pt";
            }, 500)        
    }

    document.getElementById("myCheckBox").onclick = function() {
        var text = document.getElementById("text");

        if (this.checked){
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/united-states-one-hundred-dollar-bill-stephen-robinson.jpg')";
        } 
        else{
            text.style.fontWeight = "normal";
            text.style.color = "inherit";
            text.style.textDecoration = "none";
        } 
    }
}