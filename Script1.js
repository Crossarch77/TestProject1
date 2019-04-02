var rowG = [];

$(document).ready(function(){
		$("#included").click(function getNumbers(){
			var rowS = [];
			for (var i = 0; i < 5; i++){
				Withdraw();
				rowS += rowG;
			}
			$(this).text(rowS);
			$("#intro").text("Here are your results!");
			$("#numbers").text("Here are your digits");
			$("#numbersAmount").text("The amount of digits is: " + rowS.length)
			calcOnes();
			calcTwos();
			calcThrees();
		});
});

function Withdraw(){
	$.ajax({
		url: "https://www.random.org/integers/?num=5&min=0&max=1&col=5&base=10&format=plain&rnd=new",
		type: "GET",
		success: function(data){
			data = data.replace(/	/g, "");
			rowG = data.replace(/\n/g, "");
		},
		async: false
	});
	return rowG;
}

function DoubleUp(){
	var row = document.getElementById("included").textContent;
	var arr = Array.from(row);
	shuffle(arr);
	var text = arr.join("");
	if ((row + text).length > 1000000){
		var i = 1000000 - text.length;
		var textMax = row + text.slice(0, i);
		document.getElementById("included").innerHTML = textMax;
		document.getElementById("numbersAmount").innerHTML = ("The amount of digits is: " + textMax.length);
		calcOnes();
		calcTwos();
		calcThrees();
	} else {
	row = row + text;
	document.getElementById("included").innerHTML = row;
	document.getElementById("numbersAmount").innerHTML = ("The amount of digits is: " + row.length);
	calcOnes();
	calcTwos();
	calcThrees();
	}
}

function calcOnes(){
	var row = document.getElementById("included").textContent;
	var sum = row.length;
	var outArr0 = [];
	var count0 = [row.match(/0/g).length, row.match(/1/g).length];
	var ids1 = ["0s", "1s"];
	var ids01 = ["0s%", "1s%"];
	var percent = Array.from(count0, x => x*100/sum);
	var i;
	for (i = 0; i < ids1.length; i++){
		outArr0[i] = ("Number of " + ids1[i] + " is: " + count0[i] + "<br />" + ids01[i] + " is: " + percent[i] + "%<br /><br />");
	}
	var outText0 = outArr0.join("");
	document.getElementById("1-digit").innerHTML = (outText0);
}

function calcTwos(){
	var row = document.getElementById("included").textContent;
	var i;
	var outArr00 = [];
	var count00 = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	var ids2 = ["00s", "01s", "10s", "11s"];
	var ids02 = ["00s%", "01s%", "10s%", "11s%"];
	var sum02 = count00.reduce(function(a,b){
		return a+b
	}, 0);
	var count02 = Array.from(count00, x => x*100/sum02);
	for (i = 0; i < ids2.length; i++){
		outArr00[i] = ("Number of " + ids2[i] + " is: " + count00[i] + "<br />" + ids02[i] + " is: " + count02[i] + "%<br /><br />");
	}
	var outText00 = outArr00.join("");
	document.getElementById("2-digit").innerHTML = (outText00);	
}

function calcThrees(){
	var row = document.getElementById("included").textContent;
	var i;
	var outArr000 = [];
	var count000 = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
					row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	var ids3 = ["000s", "001s", "010s", "011s", "100s", "101s", "110s", "111s"];
	var ids03 = ["000s%", "001s%", "010s%", "011s%", "100s%", "101s%", "110s%", "111s%"];
	var sum002 = count000.reduce(function(a,b){
		return a+b
	}, 0);
	var count002 = Array.from(count000, x => x*100/sum002);
	for (i = 0; i < ids3.length; i++){
		outArr000[i] = ("Number of " + ids3[i] + " is: " + count000[i] + "<br />" + ids03[i] + " is: " + count002[i] + "%<br /><br />");
	}
	var outText000 = outArr000.join("");
	document.getElementById("3-digit").innerHTML = (outText000);
}

function shuffle(array) {
  	array.sort(() => Math.random() - 0.5);
}