
var field = ['', '', '', 
			 '', '', '',
			 '', '', '']

var win = false

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)score\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var score = cookieValue

cookieValue = parseInt(cookieValue)
if (cookieValue != NaN) {
	if (cookieValue >= 0) {
		score = cookieValue
	}
	else {
		score = 0
		document.cookie = 'score=' + score + ';'
	}
} else {
	score = 0
	document.cookie = 'score=' + score + ';'
}
var elem = document.getElementById('scr')
document.cookie = 'score=' + score + ';'
elem.innerHTML = 'SCORE: ' + score

function setX(cell) {
	if (field[cell-1] == '' && win == false) {
		field[cell-1] = 'x'
		x(cell)
		check_field()
		if (win == false) {
			var cell2 = getRandomInt(0, 8)
			var c = 0;

			while (field[cell2] != '') {
				cell2 = getRandomInt(0, 8);

				for (var i=0; i<9; i++) {
					if (field[i] != '') {
						c++;
					}
				}
				if (c == 9) {
					break;
				}
			}

			if (c != 9) {
				field[cell2] = 'o'
				o(cell2 + 1)
				check_field()
			} else {
				draw()
			}
		}
	}
}

function x(cell) {
	var elem = document.getElementById("cell" + cell);
	elem.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
}

function o(cell) {
	var elem = document.getElementById("cell" + cell);
	elem.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
}

function check_field(){
	if (field[0] != '' && field[0] == field[1] && field[1] == field[2]) {
		win = true
		print_win(field[0])
	}
	if (field[3] != '' && field[3] == field[4] && field[4] == field[5]) {
		win = true
		print_win(field[3])
	}
	if (field[6] != '' && field[6] == field[7] && field[7] == field[8]) {
		win = true
		print_win(field[6])
	}

	if (field[0] != '' && field[0] == field[3] && field[3] == field[6]) {
		win = true
		print_win(field[0])
	}
	if (field[1] != '' && field[1] == field[4] && field[4] == field[7]) {
		win = true
		print_win(field[1])
	}
	if (field[2] != '' && field[2] == field[5] && field[5] == field[8]) {
		win = true
		print_win(field[2])
	}

	if (field[0] != '' && field[0] == field[4] && field[4] == field[8]) {
		win = true
		print_win(field[0])
	}
	if (field[2] != '' && field[2] == field[4] && field[4] == field[6]) {
		win = true
		print_win(field[2])
	}	
}

function draw() {
	elem = document.getElementById("scr");
	elem.innerHTML = ''
	elem = document.getElementById("for_button");
	elem.innerHTML = '<button class="restart_button" onclick="newGame()">New game</button>';
}

function clear_field(){
	field = ['', '', '', '', '', '', '', '', '']
	for (var i = 1; i <= 9; i++){
		var elem = document.getElementById("cell" + i);
		elem.innerHTML = '';
	}
}

function print_win(cell) {
	if (cell == 'x') {
		clear_field()
		var elem = document.getElementById("cell2");
		elem.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

		elem = document.getElementById("cell4");
		elem.innerHTML = 'W';

		elem = document.getElementById("cell5");
		elem.innerHTML = 'O';

		elem = document.getElementById("cell6");
		elem.innerHTML = 'N';
		s()
		elem = document.getElementById("scr");
		elem.innerHTML = ''
		elem = document.getElementById("for_button");
		elem.innerHTML = '<button class="restart_button" onclick="newGame()">New game</button>';
	}
	else if (cell = 'o') {
		clear_field()
		var elem = document.getElementById("cell2");
		elem.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
		
		elem = document.getElementById("cell4");
		elem.innerHTML = 'W';
		
		elem = document.getElementById("cell5");
		elem.innerHTML = 'O';
		
		elem = document.getElementById("cell6");
		elem.innerHTML = 'N';

		elem = document.getElementById("scr");
		elem.innerHTML = ''
		elem = document.getElementById("for_button");
		elem.innerHTML = '<button class="restart_button" onclick="newGame()">New game</button>';
	}
}

function newGame() {
	win = false
	clear_field()
	elem = document.getElementById("scr");
	elem.innerHTML = 'SCORE: ' + score;
	elem = document.getElementById("for_button");
	elem.innerHTML = '';
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function s() {
	score++
	var elem = document.getElementById('scr')
	document.cookie = 'score=' + score + ';'
	elem.innerHTML = 'SCORE: ' + score
}
