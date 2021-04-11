
//获得元素的样式值
function getstyle(div,porperty)
{
	var style;
	if (window.getComputedStyle) {
	    style = window.getComputedStyle(div, null)[porperty];    // 非IE
	} else { 
	    style = odiv.currentStyle(porperty);  // IE
	}
	return style;
}

//动态改变元素值
function change(div,porperties)
{
	clearInterval(div.timerid);
	div.timerid=setInterval(function(){
		for(var porperty in porperties)
		{
			var current;
			if(porperty == 'opacity')
			{
				current = parseFloat(getstyle(div,porperty))*100;
			}
			else
			{
				current = parseInt(getstyle(div,porperty));
			}
			var target = porperties[porperty];
			var speed = (target-current)/30;
			speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
			if(porperty == 'opacity'){
				div.style.opacity = (current + speed)/100 ;
			}
			else{
				div.style[porperty] = current + speed +'px';
			}
		}
	},30)
}