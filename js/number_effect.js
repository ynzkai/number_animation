
function number_animation(ele) {
	var number = parseInt(ele.innerText);
	var n = 0;
	setTimeout(inc, 0);
	function inc() {
		var t = 1;
		if(n < number) {
			n++;
			/*
			if(n < number/3) t = Math.log2(n)*Math.pow(n/number,2)*30;
			else if(n < number*0.99) t = Math.log2(n)*Math.pow(n/number,2)*40;
			else if(n < number) t = Math.log2(n)*Math.pow(n/number,2)*50;
			*/
			if(n < number/3) t = Math.log2(n)*n/number*10;
			else if(n < number*0.9) t = Math.log2(n)*n/number*15;
			else t = Math.log2(n)*n/number*30;
		}
		ele.innerText = n.toString();
		setTimeout(inc, t);
	}

}

function getNumberElements() {
	var eles = document.getElementsByTagName("span");
	var result = [];
	for(var i = 0; i < eles.length; i++) {
		if(eles[i].getAttribute("name").substr(0,3) === "ne_")
			result.push(eles[i]);
	}
	return result;
}

function run() {
	var eles = getNumberElements();
	for(var i = 0; i < eles.length; i++) {
		number_animation(eles[i]);
		for(var j = 0; j < 1000000; j++);
	}
}

window.onload = run;
