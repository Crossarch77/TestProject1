function Format(){
	var row = document.getElementById("included").textContent;
	str = row.replace(/	/g, "");
	str1 = str.replace(/\n/g, "");
	//str2 = str1.replace(/,/g, "");
	document.getElementById("included").innerHTML = str1;
	document.getElementById("numbers").innerHTML = ("The amount of digits is: " + str1.length);
	document.getElementById("intro").innerHTML = "Here are your results";
	calc();
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
		document.getElementById("numbers").innerHTML = ("The amount of digits is: " + textMax.length);
		calc();
	} else {
	row = row + text;
	document.getElementById("included").innerHTML = row;
	document.getElementById("numbers").innerHTML = ("The amount of digits is: " + row.length);
	calc();
	}
}

function calc(){
	var row = document.getElementById("included").textContent;
	var sum = row.length;
	var count0 = [row.match(/0/g).length, row.match(/1/g).length];
	var count00 = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	var count000 = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
					row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	var ids1 = ["0s", "1s"];
	var ids01 = ["0s%", "1s%"];
	var ids2 = ["00s", "01s", "10s", "11s"];
	var ids02 = ["00s%", "01s%", "10s%", "11s%"];
	var ids3 = ["000s", "001s", "010s", "011s", "100s", "101s", "110s", "111s"];
	var ids03 = ["000s%", "001s%", "010s%", "011s%", "100s%", "101s%", "110s%", "111s%"];
	var percent = Array.from(count0, x => x*100/sum);
	var sum02 = count00.reduce(function(a,b){
		return a+b
	}, 0);
	var sum002 = count000.reduce(function(a,b){
		return a+b
	}, 0);
	var count02 = Array.from(count00, x => x*100/sum02);
	var count002 = Array.from(count000, x => x*100/sum002);
	var i;
	for (i = 0; i < ids1.length; i++){
		document.getElementById(ids1[i]).innerHTML = ("Number of " + ids1[i] + " is: " + count0[i]);
	};
	for (i = 0; i < ids01.length; i++){
		document.getElementById(ids01[i]).innerHTML = (ids01[i] + " is: " + percent[i] + "%");
	};
	for (i = 0; i < ids2.length; i++){
		document.getElementById(ids2[i]).innerHTML = ("Number of " + ids2[i] + " is: " + count00[i]);
	};
	for (i = 0; i < ids02.length; i++){
		document.getElementById(ids02[i]).innerHTML = (ids02[i] + " is: " + count02[i] + "%");
	};
	for (i = 0; i < ids3.length; i++){
		document.getElementById(ids3[i]).innerHTML = ("Number of " + ids3[i] + " is: " + count000[i]);
	};
	for (i = 0; i < ids03.length; i++){
		document.getElementById(ids03[i]).innerHTML = (ids03[i] + " is: " + count002[i] + "%");
	};
}

function shuffle(array) {
  	array.sort(() => Math.random() - 0.5);
}