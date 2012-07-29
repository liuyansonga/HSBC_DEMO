
var contentID=0;

//show or hide list
function showORhideList(){
	debugger;
	
	//alert(pagecontainer.style.left);
	//alert(pagecontainer.left);
	if (dragboxDiv.style.visibility == "hidden") {
		dragboxDiv.style.visibility = "visible";
		//pagecontainer.style.left=150px;
		//pagecontainer.width=610px;
		//pagecontainer.setAttribute("position","absolute");
	} else {
		dragboxDiv.style.visibility = "hidden";
		//pagecontainer.setAttribute("position","static");
		//pagecontainer.width=760px;
	}
}

//append content to page
function appendContent(ePage, sUrl) { 
	var pDiv = document.createElement("div"); 
	pDiv.id = "portletDiv_" + contentID;
	contentID += 1;
	pDiv.style.align = "left";
	pDiv.style.valign = "top";
	pDiv.width = "600";
	
	var tTable = document.createElement("table");
	pDiv.appendChild(tTable);
	var rRow = tTable.insertRow();
	var cColum2 = rRow.insertCell();
		
	var fIframe = document.createElement("iframe");
	fIframe.id = "portletFrame_" + contentID;
	fIframe.width = "580";	
	cColum2.appendChild(fIframe);
	fIframe.src="./html/" + sUrl;
	fIframe.frameborder = 0;

	var cColum1 = rRow.insertCell();
	
	var mImg = document.createElement("img");
	mImg.src = "./img/closes.gif";
	mImg.setAttribute("onclick","delContent(" + pDiv.id + ")");

	cColum1.appendChild(mImg);
	cColum1.style.width="10";
	cColum1.setAttribute("valign","top");
	
	ePage.appendChild(pDiv);
}

function delContent(el) {
	el.parentNode.removeChild(el);
}

function modifyProfile(){
	document.getElementById("popupframe").src="./profile.html";
	popuppanel.style.display = "";
}


function showService() {
	document.getElementById("popupframe").src="./html/webchat_1.html";
	popuppanel.style.display = "";
}

function closepoppanel(){
	popuppanel.style.display = "none";
}




