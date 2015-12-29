function Drag(divId) {
	var _this = this;
	this.disX = 0;
	this.disY = 0;
	this.oDrag = document.getElementById(divId);
	this.oDrag.onmousedown = function() {
		_this.fnDown();
		return false;
	}
}
Drag.prototype.fnDown = function(ev) {
	var _this = this;
	var oEvent = ev || event;
	this.disX = oEvent.clientX - this.oDrag.offsetLeft;
	this.disY = oEvent.clientY - this.oDrag.offsetTop;
	document.onmousemove = function() {
		_this.fnMove();
	}
	document.onmouseup = function() {
		_this.fnUp();
	}
}
Drag.prototype.fnMove = function(ev) {
	var _this = this;
	var oEvent = ev || event;
	this.oDrag.style.left = oEvent.clientX - this.disX + 'px';
	this.oDrag.style.top = oEvent.clientY - this.disY + 'px';
}
Drag.prototype.fnUp = function(ev) {
	document.onmousemove = null;
	document.onmouseup = null;
}