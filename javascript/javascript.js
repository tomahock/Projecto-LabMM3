// Mobs
var mob01a=new Array();var mob01b=new Array();
var mob02a=new Array();var mob02b=new Array();
var mob03a=new Array();var mob03b=new Array()

mob01a[0]=new Array('p','p','p','p','b','b','b','b','p','p','p','p');
mob01a[1]=new Array('p','b','b','b','b','b','b','b','b','b','b','p');
mob01a[2]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01a[3]=new Array('b','b','b','p','p','b','b','p','p','b','b','b');
mob01a[4]=new Array('b','b','b','b','b','b','b','b','b','b','b','b');
mob01a[5]=new Array('p','p','p','b','b','p','p','b','b','p','p','p');
mob01a[6]=new Array('p','p','b','b','p','b','b','p','b','b','p','p');
mob01a[7]=new Array('b','b','p','p','p','p','p','p','p','p','b','b');

mob02a[0]=new Array('p','p','b','p','p','p','p','p','b','p','p');
mob02a[1]=new Array('p','p','p','b','p','p','p','b','p','p','p');
mob02a[2]=new Array('p','p','b','b','b','b','b','b','b','p','p');
mob02a[3]=new Array('p','b','b','p','b','b','b','p','b','b','p');
mob02a[4]=new Array('b','b','b','b','b','b','b','b','b','b','b');
mob02a[5]=new Array('b','p','b','b','b','b','b','b','b','p','b');
mob02a[6]=new Array('b','p','b','p','p','p','p','p','b','p','b');
mob02a[7]=new Array('p','p','p','b','b','p','b','b','p','p','p');


mob03a[0]=new Array('p','p','p','b','b','p','p','p');
mob03a[1]=new Array('p','p','b','b','b','b','p','p');
mob03a[2]=new Array('p','b','b','b','b','b','b','p');
mob03a[3]=new Array('b','b','p','b','b','p','b','b');
mob03a[4]=new Array('b','b','b','b','b','b','b','b');
mob03a[5]=new Array('p','p','b','p','p','b','p','p');
mob03a[6]=new Array('p','b','p','b','b','p','b','p');
mob03a[7]=new Array('b','p','b','p','p','b','p','b');
// Funcoes

function spaceInvaders(){
	for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
		var idM = 'mob0' + i; //id mob
		document.getElementById('stage').innerHTML += '<div id="'+idM+'"></div>';
		for(var j = 1; j <= 2;j++){ // 2 linhas diferentes
			idL = 'linha' + j + 'mob' + i; //ID da linha
			document.getElementById(idM).innerHTML += '<div id="'+idL+'"></div>';
			//document.getElementById(idM).style.display = 'block';
			for(var k = 1; k<=10; k++){ // 10 mobs por linha
				var idML = 'mob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
				var idMLel = document.getElementById(idML);
				document.getElementById(idL).innerHTML += '<div id="'+idML+'"></div>'
				document.getElementById(idMLel).style.cssFloat = 'left';
				document.getElementById(idMLel).style.marginLeft = '15px';
				document.getElementById(idMLel).style.marginTop = '15px';
				desenhaMob(i, k, idMLel);
				if(k===10){
					document.getElementById(idL).innerHTML += '<div style="clear:both;"></div>';
				}
			}
		}
	}
}

function desenhaMob(i, k, idMLel){
	switch(i){
		case 1:	for(var y=0;y<=mob01a.length-1;y++){
		            for(var x=0;x<=mob01a[y].length-1;x++){
		               document.getElementById(idMLel).innerHTML+='<span class="'+mob01a[y][x]+'">*</span>';
		            }
		            document.getElementById(idMLel).innerHTML += '</br>';
		       }
		       break;
		case 2: for(var y=0;y<=mob01a.length-1;y++){
		            for(var x=0;x<=mob01a[y].length-1;x++){
		               document.getElementById(idMLel).innerHTML+='<span class="'+mob02a[y][x]+'">*</span>';
		            }
		            document.getElementById(idMLel).innerHTML += '</br>';
		       }
		       break;
		case 3: for(var y=0;y<=mob01a.length-1;y++){
		            for(var x=0;x<=mob01a[y].length-1;x++){
		               document.getElementById(idMLel).innerHTML+='<span class="'+mob03a[y][x]+'">*</span>';
		            }
		            document.getElementById(idMLel).innerHTML += '</br>';
		       }
		       break;
	}
}
