window.onload=function(){

	var value = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

var plane = document.getElementById('plane');
plane.width = value.length * 10;
plane.height = 20*10;
plane.background = 'red';
plane.style.backgroundColor = '#fcfcfc';
plane.style.height = '200px';
plane.style.width = plane.width+'px';
plane.style.transform = 'rotate(180deg)';
plane.style.margin = '300px';
plane.style.border = '2px solid gray';
plane.style.padding = '20px';


	for(i = 0;i < value.length; i++)
	{
		var d = document.createElement('div');
		d.height = value[i] * 10;
		if(value[i] <= 6)
		{
			d.style.backgroundColor = 'green';
		}
		else if (value[i] > 6 && value[i] <= 10)
		{
			d.style.backgroundColor = 'yellow';
		}
		else{
			d.style.backgroundColor = 'red';
		}
		d.style.height = d.height+'px';
		d.style.width = 10+'px';
		d.style.float = 'right';
		d.style.display = 'inline-block';
		plane.appendChild(d);
	};
}