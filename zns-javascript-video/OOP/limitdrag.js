function LimitDrag(divId) {
	Drag.call(this, divId);
}
for(var i in Drag.prototype) {
	LimitDrag.prototype[i] = Drag.prototype[i];
}
LimitDrag.prototype.fnMove = function(ev) {
	var _this = this;
	var oEvent = ev || event;
	var l = oEvent.clientX - this.disX;
	var t = oEvent.clientY - this.disY;
	if(l < 0) {
		l = 0;
	} else if (l > document.documentElement.clientWidth - this.oDrag.offsetWidth) {
		l = document.documentElement.clientWidth - this.oDrag.offsetWidth;
	}
	if(t < 0) {
		t = 0;
	} else if (t > document.documentElement.clientHeight - this.oDrag.offsetHeight) {
		t = document.documentElement.clientHeight - this.oDrag.offsetHeight;
	}
	this.oDrag.style.left = l + 'px';
	this.oDrag.style.top = t + 'px';
}