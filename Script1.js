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
	} else {
	row = row + text;
	document.getElementById("included").innerHTML = row;
	document.getElementById("numbersAmount").innerHTML = ("The amount of digits is: " + row.length);
	calcOnes();
	}
}

function calcOnes(){
	var row = document.getElementById("included").textContent;
	var sum1 = row.length;
	var i;
	var outArr1 = [];
	var outArr2 = [];
	var outArr3 = [];
	var match1 = [/0/g, /1/g];
	var match2 = [/00/g, /01/g, /10/g, /11/g];
	var match3 = [/000/g, /001/g, /010/g, /011/g, /100/g, /101/g, /110/g, /111/g];
	var count1 = [];
	var count2 = [];
	var count3 = [];
	var ids1 = ["0s", "1s"];
	var ids01 = ["0s%", "1s%"];
	var ids2 = ["00s", "01s", "10s", "11s"];
	var ids02 = ["00s%", "01s%", "10s%", "11s%"];
	var ids3 = ["000s", "001s", "010s", "011s", "100s", "101s", "110s", "111s"];
	var ids03 = ["000s%", "001s%", "010s%", "011s%", "100s%", "101s%", "110s%", "111s%"];
	for (i = 0; i < match1.length; i++){
		if (row.match(match1[i])){
			count1[i] = row.match(match1[i]).length;
		}
		else{
			count1[i] = 0;
		}
	}
	for (i = 0; i < match2.length; i++){
		if (row.match(match2[i])){
			count2[i] = row.match(match2[i]).length;
		}
		else{
			count2[i] = 0;
		}
	}
	for (i = 0; i < match3.length; i++){
		if (row.match(match3[i])){
			count3[i] = row.match(match3[i]).length;
		}
		else{
			count3[i] = 0;
		}
	}
	var sum2 = count2.reduce(function(a,b){
		return a+b
	}, 0);
	var sum3 = count3.reduce(function(a,b){
		return a+b
	}, 0);
	var percent1 = Array.from(count1, x => x*100/sum1);
	var percent2 = Array.from(count2, x => x*100/sum2);
	var percent3 = Array.from(count3, x => x*100/sum3);
	for (i = 0; i < ids1.length; i++){
		outArr1[i] = ("Number of " + ids1[i] + " is: " + count1[i] + "<br />" + ids01[i] + " is: " + percent1[i] + "%<br /><br />");
	}
	for (i = 0; i < ids2.length; i++){
		outArr2[i] = ("Number of " + ids2[i] + " is: " + count2[i] + "<br />" + ids02[i] + " is: " + percent2[i] + "%<br /><br />");
	}
	for (i = 0; i < ids3.length; i++){
		outArr3[i] = ("Number of " + ids3[i] + " is: " + count3[i] + "<br />" + ids03[i] + " is: " + percent3[i] + "%<br /><br />");
	}
	var outText1 = outArr1.join("");
	var outText2 = outArr2.join("");
	var outText3 = outArr3.join("");
	document.getElementById("1-digit").innerHTML = (outText1);
	document.getElementById("2-digit").innerHTML = (outText2);
	document.getElementById("3-digit").innerHTML = (outText3);	
}

function shuffle(array) {
  	array.sort(() => Math.random() - 0.5);
}