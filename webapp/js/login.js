var namelist = ['Jack', 'Rose', 'Zhangli', 'Jiaozi', 'George', 'Mali', 'Jiangzhong', 'Huhao', 'Chenli','Shaomi'];
		
		function getUser(pid)
		{
			var big_img = document.getElementById("big_img");
			big_img.src = "img/" + pid + ".png";
			big_img.pid=pid;
			var username = document.getElementById("username");
			var index = pid.substr(1,2);
			username.value = namelist[index];
		}
		
		
		
		function deleteUser(pid)
		{
			var big_img = document.getElementById("big_img");
			if(big_img.pid && big_img.pid == pid)
			{
				big_img.src="img/p_empty.png";
				var username = document.getElementById("username");
				username.value="";
			}
			var children = document.getElementById("imglist").rows;
			for(var i = 1; i < children.length; i++)
			{
				if(children[i].getAttribute("pid") == pid)
				{
					//document.getElementById("imglist").deleteRow(i);
					var tbody = document.getElementById("imglist").firstElementChild;
					tbody.removeChild(children[i]);
					break;
				}
			}
		}
		
		/*
	<div id="reception">
				<div id="closeb">
					<a href="javascript:;" onclick="deleteUser('p9');" title="delete user login history"><img id="closebimg" src="img/closes.gif" /></a>
				</div>
				<a href="javascript:getUser('p9');"> <img width="80px" height="80px" src="img/p9.png" /></a>
			</div>
	*/
	function createClosableDiv(pid)
	{
		var div = document.createElement("div");
		div.id = "closeb";
		
		var a = document.createElement("a");
		a.href = "javascript:;";
		a.setAttribute("onclick", "deleteUser('" + pid + "');");
		
		var img = document.createElement("img");
		img.id = "closebimg";
		img.src="img/closes.gif";
		a.appendChild(img);
		div.appendChild(a);
		
		var div_reception = document.createElement("div");
		div_reception.id = "reception";
		div_reception.appendChild(div);
		
		var a_get = document.createElement("a");
		a_get.href = "javascript:;";
		a_get.setAttribute("onclick", "getUser('" + pid + "');");
		
		var imga_get = document.createElement("img");
		imga_get.src="img/" + pid + ".png";
		imga_get.setAttribute("width", "80px");
		imga_get.setAttribute("height", "80px");
		
		a_get.appendChild(imga_get);
		
		div_reception.appendChild(a_get);
		
		return div_reception;
	}
	
	/*
	<tr pid="p9">
		<td>
			<div id="reception">
				<div id="closeb">
					<a href="javascript:;" onclick="deleteUser('p9');" title="delete user login history"><img id="closebimg" src="img/closes.gif" /></a>
				</div>
				<a href="javascript:getUser('p9');"> <img width="80px" height="80px" src="img/p9.png" /></a>
			</div>
		</td>
	</tr>
	*/
	function createUserHistory(pid)
	{
		var tr = document.createElement("tr");
		tr.setAttribute("pid", pid);
		var td = document.createElement("td");debugger;
		var closediv = createClosableDiv(pid);
		td.appendChild(closediv);
		tr.appendChild(td);
		return tr;
	}
	
	function createUserList()
	{
		
		var table = document.getElementById("imglist").firstElementChild;
		for(var i = 0; i < namelist.length; i++)
		{
			//alert(i);
			var row  = createUserHistory("p" + i);
			table.appendChild(row);
		}
	}
	
	function login()
	{
		window.location = "main.html";
	}