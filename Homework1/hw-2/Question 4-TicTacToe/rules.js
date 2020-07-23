/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be seached online, and we are aware of those solutions. 
So please sight sources if you took help from any online resource.
*/



//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9. 
Usaged: This is to store the state to the tictactoe board.
When a move is made 
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/* 
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1 

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true is the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that 
turn = 1 is for player_1 and 
turn = 0 is for player_2
@Param - No param
*/
function whose_move(){
	return this.turn
}

/*
@Return void
@Param 
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() {
	this.turn = !this.turn
}

/*
@Return boolean
@Param 
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started(){
	return this.started
}


/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the field are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

function begin_play(){

	if(started == true){
		alert("Already started. Please Reset Play to start again.");
		return;
	}

	var p1 = document.getElementById('player1_id');
	var p2 = document.getElementById('player2_id');

	if(p1.value == "" || p2.value == ""){
		alert("Two player game, both fields are mandatory");
		return;
	}
	else{
		p1.value = p1.value + " ( X )";
		p2.value = p2.value + " ( O )";
		document.getElementById('player1_id').disabled = true;
		document.getElementById('player2_id').disabled = true;
	}
	var player1_icon = "X";
	var player2_icon = "O";
	var t = whose_move();
	if(t == 1){ //Player 1's turn
		document.getElementById('turn_info').innerHTML = "Turn for: " + player1_icon.bold();
	}
	else{
		document.getElementById('turn_info').innerHTML = "Turn for: " + player2_icon.bold();
	}

	started = true;
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enablled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the started flag as false

*/
function reset_play(){

	turn = 1;
	document.getElementById('player1_id').disabled = false;
	document.getElementById('player2_id').disabled = false;

	document.getElementById('player1_id').value = "";
	document.getElementById('player2_id').value = "";
	document.getElementById('turn_info').innerHTML = "Game has not begun.";

	started = false;

	board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]

	document.getElementById('A1').innerHTML = "A1"
	document.getElementById('A2').innerHTML = "A2"
	document.getElementById('A3').innerHTML = "A3"
	document.getElementById('B1').innerHTML = "B1"
	document.getElementById('B2').innerHTML = "B2"
	document.getElementById('B3').innerHTML = "B3"
	document.getElementById('C1').innerHTML = "C1"
	document.getElementById('C2').innerHTML = "C2"
	document.getElementById('C3').innerHTML = "C3"
}

/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been player( Play button was clicked).
The method should do all the things as stated in rule 2.
*1. The moves should be validated can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
*2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
* 3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
* 4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
* 5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework) 
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
*8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>

*/
function play() {
	// If user clicks 'play' before game has started:
	if(started == false){ // #5
		alert("Game has not started yet!")
		return;
	}

	var player1_icon = "X";
	var player2_icon = "O";

	// Validate Move
	var move = document.getElementById('move_text_id').value;
	var check_index = table_ids.indexOf(move); // #1
	// Returns the index of requested position, and returns -1 otherwise

	if(check_index != -1){
		//console.log(check_index); (index locator working)
		var check_open = board_state[check_index];
		if(check_open == -1){ // Cell is unfilled -- valid move
			board_state[check_index] = turn;
			var open_check = board_state.includes(-1); // Returns 'open_check' as -1 once final move has been made
			if(turn == 1){// #3 : fill valid cell choice with player icon
				document.getElementById(move).innerHTML = player1_icon;
			}
			else{
				document.getElementById(move).innerHTML = player2_icon;
			} 
			toggle_move();
			if(turn == 1){ // Update current player turn information
				document.getElementById('turn_info').innerHTML = "Turn for: " + player1_icon.bold();
			}
			else{
				document.getElementById('turn_info').innerHTML = "Turn for: " + player2_icon.bold();
			}
			document.getElementById('move_text_id').value = "";

			// Validate table after any move
			winning_combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
			var count1 = 0;
			var count2 = 0;
			for(i=0 ; i < winning_combos.length; i++){
				var idx = winning_combos[i][0];
				console.log(idx);
				if(board_state[idx] == 1){
					count1++;
					for(j =1 ; j < winning_combos[i].length; j++){ // j starts at 1 because loop only initialized if 1st value matched
						var temp = winning_combos[i][j];
						console.log(temp);
						if(board_state[temp] == 1){
							count1++;
							if(count1 == 3){
								alert("Winner is: X")
								return reset_play();
							}
						}
						else{ // ALL 3 values must be filled by same player, otherwise no row has been completed
							count1 = 0; // Reset our 'count1' to look for another path
							break;
						}
					}
				}
				if(board_state[idx] == 0){
					count2++
					for(j =1 ; j < winning_combos[i].length; j++){ // j starts at 1 because loop only initialized if 1st value matched
						var temp = winning_combos[i][j];
						if(board_state[temp] == 0){
							count2++;
							if(count2 == 3){
								alert("Winner is: O")
								return reset_play();
							}
						}
						else{ // ALL 3 values must be filled by same player, otherwise no row has been completed
							count2 = 0; // Reset our 'count2' to look for another path
							break;
						}
					}
				}
			}

			// #8 : If all possible moves have been exhausted, then reset the game:
			if(!open_check){ // No more spots left!
				alert("All out of possible spots!")
				return reset_play();
			}

			return;
		}
		else{ // Cell already filled with previous move
			alert("Spot already taken! Please select an open spot.") // #4
			document.getElementById('move_text_id').value = "";
			return;
		}
	}
	else{ // Invalid cell
		alert("Move is invalid. Please enter an existing cell value.") // #2
		document.getElementById('move_text_id').value = "";
		return;
	}
}

/*
Do not change this method.
*/
function moveEnter(event) {		
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
