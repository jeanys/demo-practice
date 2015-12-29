function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	for(var i=0;i<aEle.length;i++) {
		if(aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

/*
function getByClass(sClass, sTag, sParent) {
    var aEle = null, oParent = null;
    var aResult = [];
    if(sClass == undefined || sClass == '') {return};
    if(sParent == undefined || sParent == '') {
        oParent = document;
    } else {
        oParent = document.getElementById(sParent);
    }
    if(sTag == undefined || sTag == '') {
        aEle = oParent.getElementsByTagName('*');
    } else {
        aEle = oParent.getElementsByTagName(sTag);
    }
    for(var i=0; i<aEle.length; i++) {
        if(aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

var aBox1 = getByClass('box'); //类名，页面中所有的.box
var aBox2 = getByClass('box','li'); //类名+标签，页面中所有的li.box
var aBox3 = getByClass('box','li','content'); //类名+标签+ID，页面中所有的#content li.box
var aBox3 = getByClass('box','','content'); //类名+ID，页面中所有的#content .box
*/