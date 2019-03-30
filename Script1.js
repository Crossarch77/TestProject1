function myDs(){
	var row = (document.getElementById("included").textContent);
	var sum = row.length;
	var count = [row.match(/0/g).length, row.match(/1/g).length];
	var percent = Array.from(count, x => x*100/sum);
	document.getElementById("0s").innerHTML = ("Number of 0s is: " + count[0]);
	document.getElementById("0s%").innerHTML = ("% of 0s is: " + percent[0] + "%");
	document.getElementById("1s").innerHTML = ("Number of 1s is: " + count[1]);
	document.getElementById("1s%").innerHTML = ("% of 1s is: " + percent[1] + "%");
	}

	function my2xs(){
	var row = document.getElementById("included").textContent;
	var count = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	document.getElementById("00s").innerHTML = ("Number of |00|s is: " + count[0]);
	document.getElementById("01s").innerHTML = ("Number of |01|s is: " + count[1]);
	document.getElementById("10s").innerHTML = ("Number of |10|s is: " + count[2]);
	document.getElementById("11s").innerHTML = ("Number of |11|s is: " + count[3]);
	}

	function Fper1(){
	var row = document.getElementById("included").textContent;
	var x;
	var count = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	var sum = count.reduce(function(a,b){
			return a+b
		}, 0);
	var count01 = Array.from(count, x => x*100/sum);
	document.getElementById("00s%").innerHTML = ("|00|% " + count01[0] + "%");
	document.getElementById("01s%").innerHTML = ("|01|% " + count01[1] + "%");
	document.getElementById("10s%").innerHTML = ("|10|% " + count01[2] + "%");
	document.getElementById("11s%").innerHTML = ("|11|% " + count01[3] + "%");
	}

	function my3xs(){
	var row = document.getElementById("included").textContent;
	var count = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
	row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	document.getElementById("000s").innerHTML = ("Number of |000|s is: " + count[0]);
	document.getElementById("001s").innerHTML = ("Number of |001|s is: " + count[1]);
	document.getElementById("010s").innerHTML = ("Number of |010|s is: " + count[2]);
	document.getElementById("011s").innerHTML = ("Number of |011|s is: " + count[3]);
	document.getElementById("100s").innerHTML = ("Number of |100|s is: " + count[4]);
	document.getElementById("101s").innerHTML = ("Number of |101|s is: " + count[5]);
	document.getElementById("110s").innerHTML = ("Number of |110|s is: " + count[6]);
	document.getElementById("111s").innerHTML = ("Number of |111|s is: " + count[7]);
	}

	function Fper2(){
	var row = document.getElementById("included").textContent;
	var x;
	var count = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
	row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	var sum = count.reduce(function(a,b){
			return a+b
		}, 0);
	var count01 = Array.from(count, x => x*100/sum);
	document.getElementById("000s%").innerHTML = ("|000|% " + count01[0] + "%");
	document.getElementById("001s%").innerHTML = ("|001|% " + count01[1] + "%");
	document.getElementById("010s%").innerHTML = ("|010|% " + count01[2] + "%");
	document.getElementById("011s%").innerHTML = ("|011|% " + count01[3] + "%");
	document.getElementById("100s%").innerHTML = ("|100|% " + count01[4] + "%");
	document.getElementById("101s%").innerHTML = ("|101|% " + count01[5] + "%");
	document.getElementById("110s%").innerHTML = ("|110|% " + count01[6] + "%");
	document.getElementById("111s%").innerHTML = ("|111|% " + count01[7] + "%");
	}

	function myFt(){
		var row = document.getElementById("included").textContent;
		str = row.replace(/	/g, "");
		str1 = str.replace(/\n/g, "");
		str2 = str1.replace(/,/g, "");
		document.getElementById("included").innerHTML = str2;
		document.getElementById("numbers").innerHTML = ("The amount of digits is: " + str2.length);
		document.getElementById("intro").innerHTML = "Here are your results";
		myDs();
		my2xs();
		Fper1();
		my3xs();
		Fper2();
	}

	function arraying(){
		var row = document.getElementById("included").textContent;
		var arr = Array.from(row);
		var arr1 = Array.from(row);
		shuffle(arr1);
		arr.toString();
		arr1.toString();
		if ((arr + arr1).length > 1000000){
			var i = 1000000 - arr1.length;
			var arrMax = arr + arr1.slice(0, i);
			var arrMax = arrMax.replace(/,/g, "");
			document.getElementById("included").innerHTML = arrMax;
			document.getElementById("numbers").innerHTML = ("The amount of digits is: " + arrMax.length);
			myDs();
			my2xs();
			Fper1();
			my3xs();
			Fper2();
		} else {
		arr = arr + arr1;
		var arrS = arr.replace(/,/g, "");
		document.getElementById("included").innerHTML = arrS;
		document.getElementById("numbers").innerHTML = ("The amount of digits is: " + arrS.length);
		}
		myDs();
		my2xs();
		Fper1();
		my3xs();
		Fper2();
	}

	function shuffle(array) {
  		array.sort(() => Math.random() - 0.5);
	}