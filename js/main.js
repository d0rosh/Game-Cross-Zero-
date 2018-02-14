var game = document.getElementById('game');
var stroke = 0;
var strokeYou = 0;
var strokeRandom = 0;
var isStroke = true;
for (var i = 0; i < 9; i++) {
	var div = document.createElement("div");
	div.className = "block";

	game.appendChild(div);
}

game.onclick = function(event) {
	var target = event.target;
	var check = true;
	if (isStroke) {
		if (target.innerHTML!=="") {
			alert("хід вже зайнятий")
		}else if(strokeYou==strokeRandom){ 
			target.innerHTML = "X";
			strokeYou++;
			stroke++;
			winner();
			if (isStroke) {
				setTimeout(f1, 1000);
			}
		}
	}else {
		alert("ігра закінчена");
	}
}


function f1() {
	var random = Math.floor(0 + Math.random() * 8);
	var h = false;
		if (game.children[random].innerHTML == "") {
			game.children[random].innerHTML = "😎";
			h = true;
			stroke++;
			strokeRandom++;
			winner();
		}
	
	if (!h) {
		f1();
	}
}




function winner() {
	if(isStroke) {
		if (game.children[0].innerHTML=="😎" && game.children[1].innerHTML=="😎" && game.children[2].innerHTML=="😎") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineVertical");
			game.children[1].classList.add("lineVertical");
			game.children[2].classList.add("lineVertical");
			isStroke = false;
		}else if(game.children[0].innerHTML=="X" && game.children[1].innerHTML=="X" && game.children[2].innerHTML=="X") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineVertical");
			game.children[1].classList.add("lineVertical");
			game.children[2].classList.add("lineVertical");
			isStroke = false;
		}else if (game.children[3].innerHTML=="😎" && game.children[4].innerHTML=="😎" && game.children[5].innerHTML=="😎") {
			alert("переміг : " + game.children[3].innerHTML);
			game.children[3].classList.add("lineVertical");
			game.children[4].classList.add("lineVertical");
			game.children[5].classList.add("lineVertical");
			isStroke = false;
		}else if(game.children[3].innerHTML=="😎" && game.children[4].innerHTML=="😎" && game.children[5].innerHTML=="😎") {
			alert("переміг : " + game.children[3].innerHTML);
			game.children[3].classList.add("lineVertical");
			game.children[4].classList.add("lineVertical");
			game.children[5].classList.add("lineVertical");
			isStroke = false;
		}else if(game.children[3].innerHTML=="X" && game.children[4].innerHTML=="X" && game.children[5].innerHTML=="X") {
			alert("переміг : " + game.children[3].innerHTML);
			game.children[3].classList.add("lineVertical");
			game.children[4].classList.add("lineVertical");
			game.children[5].classList.add("lineVertical");
			isStroke = false;
		}else if (game.children[6].innerHTML=="😎" && game.children[7].innerHTML=="😎" && game.children[8].innerHTML=="😎") {
			alert("переміг : " + game.children[6].innerHTML);
			game.children[6].classList.add("lineVertical");
			game.children[7].classList.add("lineVertical");
			game.children[8].classList.add("lineVertical");
			isStroke = false;
		}else if(game.children[6].innerHTML=="X" && game.children[7].innerHTML=="X" && game.children[8].innerHTML=="X") {
			alert("переміг : " + game.children[6].innerHTML);
			game.children[6].classList.add("lineVertical");
			game.children[7].classList.add("lineVertical");
			game.children[8].classList.add("lineVertical");
			isStroke = false;
		}else if (game.children[0].innerHTML=="😎" && game.children[3].innerHTML=="😎" && game.children[6].innerHTML=="😎") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineHorizontal");
			game.children[3].classList.add("lineHorizontal");
			game.children[6].classList.add("lineHorizontal");
			isStroke = false;
		}else if(game.children[0].innerHTML=="X" && game.children[3].innerHTML=="X" && game.children[6].innerHTML=="X") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineHorizontal");
			game.children[3].classList.add("lineHorizontal");
			game.children[6].classList.add("lineHorizontal");
			isStroke = false;
		}
		else if (game.children[1].innerHTML=="😎" && game.children[4].innerHTML=="😎" && game.children[7].innerHTML=="😎") {
			alert("переміг : " + game.children[1].innerHTML);
			game.children[1].classList.add("lineHorizontal");
			game.children[4].classList.add("lineHorizontal");
			game.children[7].classList.add("lineHorizontal");
			isStroke = false;
		}else if(game.children[1].innerHTML=="X" && game.children[4].innerHTML=="X" && game.children[7].innerHTML=="X") {
			alert("переміг : " + game.children[1].innerHTML);
			game.children[1].classList.add("lineHorizontal");
			game.children[4].classList.add("lineHorizontal");
			game.children[7].classList.add("lineHorizontal");
			isStroke = false;
		}else if (game.children[2].innerHTML=="😎" && game.children[5].innerHTML=="😎" && game.children[8].innerHTML=="😎") {
			alert("переміг : " + game.children[2].innerHTML);
			game.children[2].classList.add("lineHorizontal");
			game.children[5].classList.add("lineHorizontal");
			game.children[8].classList.add("lineHorizontal");
			isStroke = false;
		}else if(game.children[2].innerHTML=="X" && game.children[5].innerHTML=="X" && game.children[8].innerHTML=="X") {
			alert("переміг : " + game.children[2].innerHTML);
			game.children[2].classList.add("lineHorizontal");
			game.children[5].classList.add("lineHorizontal");
			game.children[8].classList.add("lineHorizontal");
			isStroke = false;
		}else if (game.children[0].innerHTML=="😎" && game.children[4].innerHTML=="😎" && game.children[8].innerHTML=="😎") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineRotateLeft");
			game.children[4].classList.add("lineRotateLeft");
			game.children[8].classList.add("lineRotateLeft");
			isStroke = false;
		}else if (game.children[0].innerHTML=="X" && game.children[4].innerHTML=="X" && game.children[8].innerHTML=="X") {
			alert("переміг : " + game.children[0].innerHTML);
			game.children[0].classList.add("lineRotateLeft");
			game.children[4].classList.add("lineRotateLeft");
			game.children[8].classList.add("lineRotateLeft");
			isStroke = false;
		}else if(game.children[2].innerHTML=="X" && game.children[4].innerHTML=="X" && game.children[6].innerHTML=="X") {
			alert("переміг : " + game.children[2].innerHTML);
			game.children[2].classList.add("lineRotateRight");
			game.children[4].classList.add("lineRotateRight");
			game.children[6].classList.add("lineRotateRight");
			isStroke = false;
		}else if(game.children[2].innerHTML=="😎" && game.children[4].innerHTML=="😎" && game.children[6].innerHTML=="😎") {
			alert("переміг : " + game.children[2].innerHTML);
			game.children[2].classList.add("lineRotateRight");
			game.children[4].classList.add("lineRotateRight");
			game.children[6].classList.add("lineRotateRight");
			isStroke = false;
		}else if(stroke==9) {
			alert("НІЧИЯ");
			isStroke = false;
		}
	}

}



