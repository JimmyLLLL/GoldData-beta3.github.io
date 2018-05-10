/*
* @Author: Venus-Lin
* @Date:   2018-05-09 20:41:20
* @Last Modified by:   Venus-Lin
* @Last Modified time: 2018-05-09 23:00:58
*/
var btn1 = document.getElementsByClassName('radio-1');
var up = 0;
var down = 0;
for(var i=0;i<=2;i++)
{
	btn1[i].onclick = function()
	{
		btn1[0].style.color = "#222222";
		btn1[1].style.color = "#222222";
		btn1[2].style.color = "#222222";
		this.style.color = "#3099fb";
		btn1[0].style.border = "1px solid #cccccc";
		btn1[1].style.border = "1px solid #cccccc";
		btn1[2].style.border = "1px solid #cccccc";
		this.style.border = "1px solid #3099fb";
		var classVal = btn1[0].getAttribute('class'); //删除
		classVal = classVal.replace("zidingyi","");
		btn1[0].setAttribute('class',classVal);

		classVal = btn1[1].getAttribute('class'); //删除
		classVal = classVal.replace("zidingyi","");
		btn1[1].setAttribute('class',classVal);

		classVal = btn1[2].getAttribute('class');  //删除
		classVal = classVal.replace("zidingyi","");
		btn1[2].setAttribute('class',classVal);

		classVal = this.getAttribute('class');  //添加
		classVal = classVal.concat(" zidingyi");
		this.setAttribute('class',classVal);

		if(this==btn1[0]&&down==0)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以填写。"
			up = 0;
		}
		else if(this==btn1[0]&&down==1)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以在每个IP填写一次。"
			up = 0;
		}
		else if(this==btn1[0]&&down==2)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以每天在每个IP填写一次。"
			up = 0;
		}
		else if(this==btn1[1]&&down==0)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户可以填写。"
			up = 1;
		}
		else if(this==btn1[1]&&down==1)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户限填一次。"
			up = 1;
		}
		
		else if(this==btn1[1]&&down==2)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户每天限填一次。"
			up = 1;
		}
		else if(this==btn1[2])
		{
			document.getElementById('cn-suoyouren').innerHTML = "仅管理员可填。"
			up = 2;
			
		}
		
		


	


	}
}



var btn2 = document.getElementsByClassName('radio-2');
for(var i=0;i<=2;i++)
{
	btn2[i].onclick = function()
	{
		btn2[0].style.color = "#222222";
		btn2[1].style.color = "#222222";
		btn2[2].style.color = "#222222";
		this.style.color = "#3099fb";
		btn2[0].style.border = "1px solid #cccccc";
		btn2[1].style.border = "1px solid #cccccc";
		btn2[2].style.border = "1px solid #cccccc";
		this.style.border = "1px solid #3099fb";
		var classVal1 = btn2[0].getAttribute('class'); //删除
		classVal1 = classVal1.replace("zidingyi","");
		btn2[0].setAttribute('class',classVal1);

		classVal1 = btn2[1].getAttribute('class'); //删除
		classVal1 = classVal1.replace("zidingyi","");
		btn2[1].setAttribute('class',classVal1);

		classVal1 = btn2[2].getAttribute('class');  //删除
		classVal1 = classVal1.replace("zidingyi","");
		btn2[2].setAttribute('class',classVal1);

		classVal1 = this.getAttribute('class');  //添加
		classVal1 = classVal1.concat(" zidingyi");
		this.setAttribute('class',classVal1);


			if(this==btn2[0]&&up==0)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以填写。"
			down = 0;
		}
		else if(this==btn2[0]&&up==1)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户可以填写。"
			down = 0;
		}
		else if(this==btn2[0]&&up==2)
		{
			document.getElementById('cn-suoyouren').innerHTML = "仅管理员可填。"
			down = 0;
			
		}
		else if(this==btn2[1]&&up==2)
		{
			document.getElementById('cn-suoyouren').innerHTML = "仅管理员可填。"
			down = 1;
			
		}
		else if(this==btn2[2]&&up==2)
		{
			document.getElementById('cn-suoyouren').innerHTML = "仅管理员可填。"
			down = 2;
			
		}
		else if(this==btn2[1]&&up==0)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以在每个IP填写一次。"
			down = 1;
		}
		else if(this==btn2[1]&&up==1)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户限填一次。"
			down = 1;
		}
		
		else if(this==btn2[2]&&up==0)
		{
			document.getElementById('cn-suoyouren').innerHTML = "所有人可以每天在每个IP填写一次。"
			down = 2;
		}
		else if(this==btn2[2]&&up==1)
		{
			document.getElementById('cn-suoyouren').innerHTML = "金数据用户每天限填一次。"
			down = 2;
		}
		


	}
}


$(document).ready(function(){
 $('#radio-1-1').trigger('click');
 $('#radio-2-1').trigger('click');
});
var flag2 = 0;
$('.ios-btn-myself').click(function(){
	if(flag2%2==0)
	{
		$('#cn-yikaiqi').html('已关闭, 停止收集。');
		$('#cn-yiguanbi').html('已关闭');
		flag2++;
	}
	else
	{
		$('#cn-yikaiqi').html('已开启，正在收集...');
		$('#cn-yiguanbi').html('已开启');
		flag2++;
	}

	



})





