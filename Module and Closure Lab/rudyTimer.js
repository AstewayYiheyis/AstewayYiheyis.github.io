var rudyTimer = (
    function(){
        timer=null;
        function rudy() {
            document.getElementById("output").innerHTML += " Rudy!";
        }
        var f=function delayMsg2(){
            if(timer===null){
                timer=setInterval(rudy,1000)
            }
        }
        return f; 
    }
)();