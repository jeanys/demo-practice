function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj,false)[attr];
	}
}
function startMove(obj, attr, iTarget, fnEnd) { //运动的对象、运动的属性名、运动的目标值、链式运动对象
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		if(attr == 'opacity') {
			var cur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
		} else {
			var cur = parseInt(getStyle(obj,attr));
		}
		var speed = (iTarget - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) ;
		if(iTarget == cur) {
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		} else {
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur+speed) + ')';
				obj.style[attr] = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30)
}