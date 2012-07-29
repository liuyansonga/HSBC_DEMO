var $ = function(selector) {
	if (!selector) { return []; }
	var arrEle = [];
	if (document.querySelectorAll) {
		arrEle = document.querySelectorAll(selector);
	} else {
		var oAll = document.getElementsByTagName("div"), lAll = oAll.length;
		if (lAll) {
			var i = 0;
			for (i; i<lAll; i+=1) {
				if (/^\./.test(selector)) {
					if (oAll[i].className === selector.replace(".", "")) {
						arrEle.push(oAll[i]);
					}
				} else if(/^#/.test(selector)) {
					if (oAll[i].id === selector.replace("#", "")) {
						arrEle.push(oAll[i]);
					}
				}
			}
		}
	}
	return arrEle;
};

var eleviewpage = $(".viewpage")[0], eleviepageIndex = 0, eleDrags = $(".draglist"), lDrags = eleDrags.length, eleDrag = null;
for (var i=0; i<lDrags; i+=1) {
	eleDrags[i].onselectstart = function() {
		return false;
	};
	eleDrags[i].ondragstart = function(ev) {
		ev.dataTransfer.effectAllowed = "move";
		ev.dataTransfer.setData("text", ev.target.innerHTML);
		ev.dataTransfer.setDragImage(ev.target, 0, 0);
		eleDrag = ev.target;
		return true;
	};
	eleDrags[i].ondragend = function(ev) {
		ev.dataTransfer.clearData("text");
		eleDrag = null;
		return false
	};
}

eleviewpage.ondragover = function(ev) {
	ev.preventDefault();
	return true;
};

eleviewpage.ondragenter = function(ev) {
	this.style.color = "#ffffff";
	return true;
};
eleviewpage.ondrop = function(ev) {
	if (eleDrag) {
		//eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>be send to viewpage';
		//eleDrag.parentNode.removeChild(eleDrag);
		
		
		//call method in operate.js
		appendContent(eleviewpage, eleDrag.title);

	}
	this.style.color = "#000000";
	return false;
};

/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-11205167-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script');
 ga.type = 'text/javascript';
 ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/