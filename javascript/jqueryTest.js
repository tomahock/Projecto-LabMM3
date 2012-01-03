$(document).ready(function() {
	//some variables;
	var tiros = []; //array ids dos tiros
	var tirosT = []; // array ids Timers dos tiros
	
	//jQuery variables
	var $stage = $('#stage');
	
	
	$.ajax({
	  url: 'javascript/desenhos.js',
	  dataType: "script",
	  success: spaceInvaders(),
	});
	
	
	function spaceInvaders(){
		//colocar os monstro no stage
		for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
			var idM = 'mob0' + i; //id mob
			var $idM = $('#'+idM);
			$stage.append('<div id="'+idM+'"></div>');
			for(var j = 1; j <= 1;j++){ // 2 linhas diferentes
				idL = 'linha' + j + 'mob' + i; //ID da linha
				var $idL = $('#'+ idL);
				$idM.append('<div id="'+idL+'"></div>');
				$idM.css({'margin-left' : '50px'});
				for(var k = 1; k<=10; k++){ // 10 mobs por linha
					var idML = 'mob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
					$idL.append('<div id="'+idML+'"></div>');
					$('#'+idML).css({'float' : 'left', 'margin-left' : '15px', 'margin-top' : '15px'});
					desenhaMob(i, k, idML);
					if(k===10){
						$idL.append('<div style="clear:both;"></div>');
					}
				}
			}
		}
		//colocar a barra no stage
		$stage.append('<div id="barra"></div>')
		for(var y=0;y<=mob05.length-1;y++){
			for(var x=0;x<=mob05[y].length-1;x++){
				$('#barra').append('<span class="'+mob05[y][x]+'">*</span>');
			}
			$('#barra').append('</br>');
		}
		var topo = window.innerHeight-100;
		var meio = window.innerWidth/2-50;
		$('#barra').css({'position' : 'absolute' , 'top' : topo+'px', 'left' : meio+'px'});
	}
	
	
	$(document).on('keydown', function(event){
		console.log(event.keyCode);
		processaTecla(event.keyCode);
	});
	
	//Other functions
	function desenhaMob(i, k, idML){
		switch(i){
			case 1:	for(var y=0;y<=mob01a.length-1;y++){
			            for(var x=0;x<=mob01a[y].length-1;x++){
			               $('#'+idML).append('<span class="'+mob01a[y][x]+'">*</span>');
			            }
			            $('#'+idML).append('</br>');
			       }
			       break;
			case 2: for(var y=0;y<=mob01a.length-1;y++){
			            for(var x=0;x<=mob01a[y].length-1;x++){
			               $('#'+idML).append('<span class="'+mob02a[y][x]+'">*</span>');
			            }
			            $('#'+idML).append('</br>');
			       }
			       break;
			case 3: for(var y=0;y<=mob01a.length-1;y++){
			            for(var x=0;x<=mob01a[y].length-1;x++){
			               $('#'+idML).append('<span class="'+mob03a[y][x]+'">*</span>');
			            }
			            $('#'+idML).append('</br>');
			       }
			       break;
		}
	}

	function processaTecla(keyCod){
		switch(keyCod){
			case 32: dispara(); //espaco
					 break;
			case 37: console.log('left');
					 move(1); //esquerda
					 break;
			case 39: console.log('right');
					 move(2);	//direita
					 break;
		}
	}
	
	function dispara(){
		tiros[tiros.length] = 'tiro' + tiros.length; //array ids dos tiros
		$stage.append('<div id="'+tiros[tiros.length-1]+'">I</div>');
		var offBarra = $('#barra').offset();
		$('#'+tiros[tiros.length-1]).offset({'left' : offBarra.left+47 , 'top' : offBarra.top });
		$('#'+tiros[tiros.length-1]).css({'position' : 'relative'});
		
		tirosT[tirosT.length] = setInterval(function(){
			var offTiro = $('#'+tiros[tiros.length-1]).offset();
			$('#'+tiros[tiros.length-1]).offset({'top' : offTiro.top-5});
			colide(tiros[tiros.length-1]);
		}, 100);
		$('body').scrollTop($('body').height());
		$('body').scrollLeft($('body').width());
	}
	
	function move(n){
		var offBarra = $('#barra').offset();
		switch(n){
			case 1: $('#barra').offset({'left' : offBarra.left - 10});
					break;
			case 2: $('#barra').offset({'left' : offBarra.left + 10});
					break;
		}
		$('body').scrollTop($('body').height());
		$('body').scrollLeft($('body').width());
	}
	
	function colide(idTiro){
		
	}
});