function myDs(){
	var row = (document.getElementById("included").textContent);
	var sum = row.length;
	var count = [row.match(/0/g).length, row.match(/1/g).length];
	var ids = ["0s", "1s"];
	var ids2 = ["0s%", "1s%"];
	var percent = Array.from(count, x => x*100/sum);
	for (var i = 0; i < ids.length; i++){
		document.getElementById(ids[i]).innerHTML = ("Number of " + ids[i] + " is: " + count[i]);
		};
	for (var i = 0; i < ids2.length; i++){
		document.getElementById(ids2[i]).innerHTML = (ids2[i] + " is: " + percent[i] + "%");
		};
	}

	function my2xs(){
	var row = document.getElementById("included").textContent;
	var count = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	var ids = ["00s", "01s", "10s", "11s"];
	for (var i = 0; i < ids.length; i++){
		document.getElementById(ids[i]).innerHTML = ("Number of " + ids[i] + " is: " + count[i]);
		};
	}

	function Fper1(){
	var row = document.getElementById("included").textContent;
	var x;
	var count = [row.match(/00/g).length, row.match(/01/g).length, row.match(/10/g).length, row.match(/11/g).length];
	var ids = ["00s%", "01s%", "10s%", "11s%"];
	var sum = count.reduce(function(a,b){
			return a+b
		}, 0);
	var count01 = Array.from(count, x => x*100/sum);
	for (var i = 0; i < ids.length; i++){
		document.getElementById(ids[i]).innerHTML = (ids[i] + " is: " + count01[i] + "%");
	    };
	}

	function my3xs(){
	var row = document.getElementById("included").textContent;
	var count = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
	row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	var ids = ["000s", "001s", "010s", "011s", "100s", "101s", "110s", "111s"];
	for (var i = 0; i < ids.length; i++){
		document.getElementById(ids[i]).innerHTML = ("Number of " + ids[i] + " is: " + count[i]);
		};
	}

	function Fper2(){
	var row = document.getElementById("included").textContent;
	var x;
	var count = [row.match(/000/g).length, row.match(/001/g).length, row.match(/010/g).length, row.match(/011/g).length,
	row.match(/100/g).length, row.match(/101/g).length, row.match(/110/g).length, row.match(/111/g).length];
	var ids = ["000s%", "001s%", "010s%", "011s%", "100s%", "101s%", "110s%", "111s%"];
	var sum = count.reduce(function(a,b){
			return a+b
		}, 0);
	var count01 = Array.from(count, x => x*100/sum);
	for (var i = 0; i < ids.length; i++){
		document.getElementById(ids[i]).innerHTML = (ids[i] + " is: " + count01[i] + "%");
		};
	}

	function myFt(){
		var row = document.getElementById("included").textContent;
		str = row.replace(/	/g, "");
		str1 = str.replace(/\n/g, "");
		str2 = str1.replace(/,/g, "");
		document.getElementById("included").innerHTML = str2;
		document.getElementById("numbers").innerHTML = ("The amount of digits is: " + str2.length);
		document.getElementById("intro").innerHTML = "Here are your results";
		calc();
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
			calc();
		} else {
		arr = arr + arr1;
		var arrS = arr.replace(/,/g, "");
		document.getElementById("included").innerHTML = arrS;
		document.getElementById("numbers").innerHTML = ("The amount of digits is: " + arrS.length);
		calc();
		}
	}

	function calc(){
		myDs();
		my2xs();
		Fper1();
		my3xs();
		Fper2();
	}

	function shuffle(array) {
  		array.sort(() => Math.random() - 0.5);
	}