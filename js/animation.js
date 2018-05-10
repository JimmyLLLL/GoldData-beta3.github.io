/*
* @Author: JimmyLLLL
* @Date:   2018-05-07 19:22:10
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-05-08 21:58:47
*/

function searchChangingOut()
{
	document.getElementById('grey-nodo').style.display = "none";
	document.getElementById('search-input').style.backgroundColor = " #242730";
	document.getElementById('search-input-in').style.backgroundColor = " #242730";
	document.getElementById('move-i').style.left = "120px";
	document.getElementById('search-input-in').value = "";

	
}
function searchChangingIn()
{
	document.getElementById('grey-nodo').style.display = "block";
	document.getElementById('search-input').style.backgroundColor = "white";
	document.getElementById('search-input-in').style.backgroundColor = "white";
	document.getElementById('move-i').style.left = "3px";
}