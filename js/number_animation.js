function number_animation(ele) {
	var number = parseInt(ele.innerHTML);
	var n = 0;
	setTimeout(inc, 0);
	function inc() {
		var t = 1;
		if(n < number) {
			n++;
			if(n < number/3) t = Math.log(n)*n/number*10;
			else if(n < number*0.9) t = Math.log(n)*n/number*15;
			else t = Math.log(n)*n/number*30;
			ele.innerHTML = n.toString();
			setTimeout(inc, t);
		}
	}
}

