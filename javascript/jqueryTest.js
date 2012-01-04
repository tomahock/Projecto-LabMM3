$(document).ready(function() {
	//some variables;
	var tiros = []; //array ids dos tiros
	var tirosT = []; // array ids Timers dos tiros
	var trocaMob; // setInterval trocaMobs();
	var estadoMob = false;
	
	$.ajax({
	  url: 'javascript/desenhos.js',
	  dataType: "script",
	  success: spaceInvaders(),
	});

	function spaceInvaders(){
		tipo = 'a';
		//colocar os monstro no stage
		$('#stage').append('<div id="estado1"></div>')
		for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
			var idM = 'amob0' + i; //id mob
			$('#estado1').append('<div id="'+idM+'"></div>');
			for(var j = 1; j <= 2;j++){ // 2 linhas diferentes
				idL = 'alinha' + j + 'mob' + i; //ID da linha
				$('#'+idM).append('<div id="'+idL+'"></div>');
				$('#'+ idM).css({'margin-left' : '50px'});
				for(var k = 1; k<=10; k++){ // 10 mobs por linha
					var idML = 'amob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
					$('#'+idL).append('<div id="'+idML+'"></div>');
					$('#'+idML).css({'float' : 'left', 'margin-left' : '15px', 'margin-top' : '15px'});
					desenhaMob(i, k, idML, tipo);
					if(k===10){
						$('#'+idL).append('<div style="clear:both;"></div>');
					}
				}
			}
		}
		
		//coloca os monstros alternativos no stage
		tipo = 'b';
		$('#stage').append('<div id="estado2"></div>')
		$('estado2').css({'display' : 'none'});
		for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
			var idM = 'bmob0' + i; //id mob
			$('#estado2').append('<div id="'+idM+'"></div>');
			for(var j = 1; j <= 2;j++){ // 2 linhas diferentes
				idL = 'blinha' + j + 'mob' + i; //ID da linha
				$('#'+idM).append('<div id="'+idL+'"></div>');
				$('#'+ idM).css({'margin-left' : '50px'});
				for(var k = 1; k<=10; k++){ // 10 mobs por linha
					var idML = 'bmob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
					$('#'+idL).append('<div id="'+idML+'"></div>');
					$('#'+idML).css({'float' : 'left', 'margin-left' : '15px', 'margin-top' : '15px'});
					desenhaMob(i, k, idML, tipo);
					if(k===10){
						$('#'+idL).append('<div style="clear:both;"></div>');
					}
				}
			}
		}
		
		
		
		//colocar a barra no stage
		$('#stage').append('<div id="barra"></div>')
		for(var y=0;y<=mob05.length-1;y++){
			for(var x=0;x<=mob05[y].length-1;x++){
				$('#barra').append('<span class="'+mob05[y][x]+'">*</span>');
			}
			$('#barra').append('</br>');
		}
		var topo = window.innerHeight-100;
		var meio = window.innerWidth/2-50;
		$('#barra').css({'position' : 'absolute' , 'top' : topo+'px', 'left' : meio+'px'});
		
		//permutação dos vários mobs
		
		trocaMob = setInterval(function(){
			if(!estadoMob){
				var estado1 = 'block';
				var estado2 = 'none';
			}else{
				var estado1 = 'none';
				var estado2 = 'block';
			}
			
			$('#estado2').css({'display' : estado1});
			$('#estado1').css({'display' : estado2});
			
			if(estadoMob){
				estadoMob = false;
			}else{
				estadoMob = true;
			}
		}, 500);
		
	} //end function spaceInvaders()


	
	$(document).bind('keydown', function(event){
		processaTecla(event.keyCode);
	});

	//Other functions
	function desenhaMob(i, k, idML, tipo){
		if(tipo == 'a'){
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
		}else if(tipo == 'b'){
			switch(i){
				case 1:	for(var y=0;y<=mob01a.length-1;y++){
				            for(var x=0;x<=mob01a[y].length-1;x++){
				               $('#'+idML).append('<span class="'+mob01b[y][x]+'">*</span>');
				            }
				            $('#'+idML).append('</br>');
				       }
				       break;
				case 2: for(var y=0;y<=mob01a.length-1;y++){
				            for(var x=0;x<=mob01a[y].length-1;x++){
				               $('#'+idML).append('<span class="'+mob02b[y][x]+'">*</span>');
				            }
				            $('#'+idML).append('</br>');
				       }
				       break;
				case 3: for(var y=0;y<=mob01a.length-1;y++){
				            for(var x=0;x<=mob01a[y].length-1;x++){
				               $('#'+idML).append('<span class="'+mob03b[y][x]+'">*</span>');
				            }
				            $('#'+idML).append('</br>');
				       }
				       break;
			}
		}
	}

	function processaTecla(keyCod){
		switch(keyCod){
			case 32: dispara(); //espaco
					 break;
			case 37: move(1); //esquerda
					 break;
			case 39: move(2);	//direita
					 break;
		}
	}

	function dispara(){
		tiros[tiros.length] = 'tiro' + tiros.length; //array ids dos tiros
		$('#stage').append('<div class="tiro" id="'+tiros[tiros.length-1]+'">I</div>');
		var offBarra = $('#barra').offset();
		
		
		leftTiro = offBarra.left + 29;
		topTiro = offBarra.top;
		$('#'+tiros[tiros.length-1]).css({'position' : 'absolute'});
		$('#'+tiros[tiros.length-1]).offset({left : leftTiro , top : topTiro });
		offTirox = $('#'+tiros[tiros.length-1]).offset();
		
		tirosT[tirosT.length] = setInterval(function(){
			var offTiro = $('#'+tiros[tiros.length-1]).offset();
			$('#'+tiros[tiros.length-1]).offset({'top' : offTiro.top-5});
			colide(tiros[tiros.length-1]);
		}, 100);
		$('body').scrollTop($('body').height());
		$('body').scrollLeft($('body').width());
	}

	function trocaMobs(){
		for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
			var idM = 'bmob0' + i; //id mob
			for(var j = 1; j <= 2;j++){ // 2 linhas diferentes
				idL = 'blinha' + j + 'mob' + i; //ID da linha
				for(var k = 1; k<=10; k++){ // 10 mobs por linha
					var idML = 'bmob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
					$('#'+idML).css({'display' : 'block'});
				}
			}
		}
		
		for(var i = 3; i>= 1; i--){ // 3 mobs diferentes
			var idM = 'amob0' + i; //id mob
			for(var j = 1; j <= 2;j++){ // 2 linhas diferentes
				idL = 'alinha' + j + 'mob' + i; //ID da linha
				for(var k = 1; k<=10; k++){ // 10 mobs por linha
					var idML = 'amob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
					$('#'+idML).css({'display' : 'none'});
				}
			}
		}
	}

	function move(n){
		var offBarra = $('#barra').offset();
		switch(n){
			case 1: $('#barra').offset({'left' : offBarra.left - 10});
					break;
			case 2: $('#barra').offset({'left' : offBarra.left + 10});
					break;
		}
	}

	function colide(idTiro){

	}
});