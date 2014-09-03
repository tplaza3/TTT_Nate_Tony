window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var counter = 0
	
 
  
  function add_mark(){
		if(counter%2 == 0){
		 var turn = "X";
		 this.innerHTML = turn;
		 counter++;
   
		 winning_move();
		 
		} else {
			var turn = "O";
			this.innerHTML = turn;
			counter++;
			winning_move();
		}
		
  }
	
	function winning_move() {
    
  	var tl = document.getElementById("TL").textContent;
  	var tm = document.getElementById("TM").textContent;
  	var tr = document.getElementById("TR").textContent;
  	var ml = document.getElementById("ML").textContent;
  	var mm = document.getElementById("MM").textContent;
  	var mr = document.getElementById("MR").textContent;
  	var bl = document.getElementById("BL").textContent;
  	var bm = document.getElementById("BM").textContent;
  	var br = document.getElementById("BR").textContent;
	
    
    
		if((tl === tm && tm === tr && tr !== "-") || (ml === mm && mm  === mr && mr !== "-") || (bl === bm && bm ===br && br !== "-") || (tl === ml && ml === bl&& bl !== '-') || 
			 (tm === mm && mm === bm && bm !== '-') || (tr === mr && mr === br && br !== '-') || (tl === mm && mm === br && br !== '-') || (tr === mm && mm === bl && bl !== '-')){
				 alert("WINNNNNNNNSSSSSSSSSSSSSSSSS!!!!!!!!!!");
			 }
		else{}
	}
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
  }
 
}