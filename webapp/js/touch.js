////main.html  .dragbox{width:100%; height:600; padding-left:0px; float:left;}   ////overflow-Y:scroll;  overflow-x:hidden;
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
 
var eleDragsTouch = $(".draglist"), lDragsTouch = eleDragsTouch.length;

var SupportsTouches = ("createTouch" in document);//≈–∂œ «∑Ò÷ß≥÷¥•√˛
var stx=sty=etx=ety=curX=curY=0;
 
//var eleDragsTouch_temp = null;
//for (var i=0; i<lDragsTouch; i+=1) {
//	eleDragsTouch[i].touchstart = function() {
//		return false;
//	};
//	eleDragsTouch[i].touchstart = function(ev) {
//		ev.dataTransfer.effectAllowed = "copy";
//		ev.dataTransfer.setData("text", ev.target.innerHTML);
//		ev.dataTransfer.setTouchImage(ev.target, 0, 0);
//		eleDragsTouch_temp = ev.target;
//		return true;
//	};
//	eleDragsTouch[i].ondragend = function(ev) {
//		ev.dataTransfer.clearData("text");
//		eleDragsTouch_temp = null;
//		return false
//	};
//}
 
if (SupportsTouches) {
 
	for (var i=0; i<lDragsTouch; i+=1) {
	
			eleDragsTouch[i].addEventListener("touchstart", touchStart, false);
		  eleDragsTouch[i].addEventListener("touchmove", touchMove, false);
		  eleDragsTouch[i].addEventListener("touchend", touchEnd, false);
			
			function touchStart(event){
				 var touch = event.touches[0];
				 stx=event.touches[0].pageX;
				 sty=event.touches[0].pageY;
				 event.targetTouches[0].target.style.webkitTransform =  'translate(' + (etx) + 'px, ' + (ety) + 'px)';                    
			}
			function touchMove(event){
				 event.preventDefault(); 
				 curX = event.targetTouches[0].pageX - stx+etx; 
				 curY = event.targetTouches[0].pageY - sty+ety;
			   event.targetTouches[0].target.style.webkitTransform =  'translate(' + (curX) + 'px, ' + (curY) + 'px)';
			}
			function touchEnd(event){
	      	var touch = event.changedTouches[0];
	       // etx=curX;
          //ety=curY;
          stx=sty=etx=ety=curX=curY=0;
          touch.target.style.webkitTransform = "translate(0,0)";
          if (touch.clientX>150) {  //Õœ»Î”“±ﬂ«¯”Ú
          	  appendContent(eleviewpage, touch.target.title);
          } 
             
			}
	}
} 


