$(document).ready(function() {

    const rows_columns = 4;
    let Empty_Space_X = 3;
    let Empty_Space_Y = 3;
    init();
    $("#shufflebutton").on('click',shuffleButtonClick);
    //initialize and create the puzzle peices elements
   function init() {
      $("#puzzlearea div").remove();
      var num = 1;
      for (var i = 0; i < rows_columns; i++) {
        for (var j = 0; j < rows_columns; j++) {
        
          let content=num++;
          var tile = document.createElement("div");
          tile.classList.add("puzzlepiece");
          tile.style.left = 100 * j + "px";
          tile.style.top = 100 * i + "px"; 
          tile.style.backgroundPosition = (0 - 100 * j) + "px" + " " + (0 - 100 * i) + "px";
          tile.setAttribute("id", "peice_" + j + "_" + i);
          tile.innerHTML = content;
          tile.onmouseover = highlight;
          tile.onmouseout = unhighlight;
          tile.onclick = peiceClick;
          if (i != 3 || j != 3) { 
            document.getElementById("puzzlearea").appendChild(tile);
          }
        }
      }
    }
  
    // checking weather the next move is empty space 
    function validMove(tile) { 
      var neighbors = getNeighbors();
      if (neighbors.indexOf(tile.getAttribute("id")) != -1) {
        return true;
      } else {
        return false;
      }
    }
  
    // on mouse event callback
    function highlight() {
      if (validMove(this)) {
        this.classList.add("movablepiece");
      }
    }
  
    // on mouseleave event callback
    function unhighlight() {
      if (validMove(this)) {
        this.classList.remove("movablepiece");
      }
    }
  
    // Peice click event handler
    function peiceClick(){
      movePeice(this);
    }
  
    // Swaps the selected peice
    function movePeice(tile) {
      var tempEX = Empty_Space_X;
      var tempEY = Empty_Space_Y;
      if (validMove(tile)) {
        Empty_Space_X = parseInt(tile.style.left) / 100; 
        Empty_Space_Y = parseInt(tile.style.top) / 100;
        tile.style.top = 100 * tempEY + "px";
        tile.style.left = 100 * tempEX + "px";
        tile.setAttribute("id", "peice_" + tempEX + "_" + tempEY);
      }
    }
  
    // Shuffles the peices randomly  
    function shuffleButtonClick() {   
      for (var i = 0; i < 1000; i++) {
        var neighbors = getNeighbors();
        var rand = parseInt(Math.random() * neighbors.length);
        var tile = document.getElementById(neighbors[rand]);
        movePeice(tile);
      }
    }
  
    // Checks peice around selected tile to see if they're empty 
    function getNeighbors() {
      var up = "peice_" + Empty_Space_X + "_" + (Empty_Space_Y - 1);
      var down = "peice_" + Empty_Space_X + "_" + (Empty_Space_Y + 1);
      var left = "peice_" + (Empty_Space_X - 1) + "_" + Empty_Space_Y;
      var right = "peice_" + (Empty_Space_X + 1) + "_" + Empty_Space_Y;
  
      var peice = [up, down, left, right];
      var realpeice = [];
  
      for (var i = 0; i < peice.length; i++) {
        if (document.getElementById(peice[i]) != null) {
          realpeice.push(peice[i]);
        }
      }
      return realpeice;
    }
  
  });