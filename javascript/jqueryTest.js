$(document).ready(function() {
	//some variables;
	var tiros = []; //array ids dos tiros
	var tirosT = []; // array ids Timers dos tiros
	var trocaMob; // setInterval trocaMobs();
	var estadoMob = false; // variavel para ajuda da permutação dos mobs
	var moveMobs; // setInterval moveMobs
	var moveMoL = true; //controlo de direcção da deslocação dos monstros
	//jquery Vars
	/**************
	 * TODO variaveis do jQuery para poupar recursos.
	 */
	
	
	//var $elEstado2 = $('#estado2');
	//var $elEstado1 = $('#estado1');
	
	
	
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
					$('#'+idML).css({'float' : 'left', 'margin-left' : '15px', 'margin-top' : '15px' , 'position' : 'relative'});
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
					$('#'+idML).css({'float' : 'left', 'margin-left' : '15px', 'margin-top' : '15px' , 'position' : 'relative'});
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
			if(estadoMob){
				$('#estado2').hide();
				$('#estado1').show();
			}else{
				$('#estado1').hide();
				$('#estado2').show();
			}
			

			if(estadoMob){
				estadoMob = false;
			}else{
				estadoMob = true;
			}
		}, 1000);
		
		
		//move os monstros de um lado p o outro e para baixo.
		
		moveMobs = setInterval(function(){
			if(moveMoL){
				var marginLActual = parseInt($('#estado1').css('margin-left'), 10);
				marginLActual -= 10;
				if(marginLActual>0){
					$('#estado1').css({'margin-left' : marginLActual});
					$('#estado2').css({'margin-left' : marginLActual});
				}else{
					var marginTActual = parseInt($('#estado1').css('margin-top'), 10);
					marginTActual += 10;
					if(marginTActual<200){
						$('#estado1').css({'margin-top' : marginTActual});
						$('#estado2').css({'margin-top' : marginTActual});
					}else{
						//gameOver();
					}
					moveMoL = false;
				}
			}else{
				var marginLActual = parseInt($('#estado1').css('margin-left'), 10);
				marginLActual += 10;
				if(marginLActual<100){
					$('#estado1').css({'margin-left' : marginLActual});
					$('#estado2').css({'margin-left' : marginLActual});
				}else{
					var marginTActual = parseInt($('#estado1').css('margin-top'), 10);
					marginTActual += 10;
					if(marginTActual<200){
						$('#estado1').css({'margin-top' : marginTActual});
						$('#estado2').css({'margin-top' : marginTActual});
					}else{
						//gameOver();
					}
					moveMoL = true;
				}
			}
			
			
			
		},1000);
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
				colide(tiros.length-1);
			if(offTiro.top < -15 ){
				clearInterval(tirosT[tirosT.length-1]);
			}
		}, 50);
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
		if(!estadoMob){
			for(var i = 3; i>= 1; i--){ 
				var idM = 'amob0' + i; //id mob
				for(var j = 1; j <= 2;j++){ 
					idL = 'alinha' + j + 'mob' + i; //ID da linha
					offLinha = $('#' + idL).offset();
					offTiro = $('#' + tiros[idTiro]).offset();
					if(offTiro.top > offLinha.top && offTiro.top < (offLinha.top+32)){
						//console.log('Inside Line: ' + idL);
						for(var k = 1; k<=10; k++){
							var idML = 'amob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
							var offMob = $('#' + idML).offset();
							//console.log('offMob left: ' + offMob.left + ' mob: ' + idML);
							if(offTiro.left>offMob.left && offTiro.left<(offMob.left+32)){
								//console.log('Bummm no mob: ' + idML);
								clearInterval(tirosT[idTiro]);
								$('#' + tiros[idTiro]).remove();
								$('#' + idML).remove();
								var idMLs = 'amob0'+i+'L'+j+'P'+(k+1); // id da div do mob seguinte ao colidido
								var mLeft = parseInt($('#' + idMLs).css('marginLeft'),10);
								mLeft += 62;
								$('#' + idMLs).css({'margin-left' : mLeft});
								//remover o mob do outro estado e alinhas os restantes mobs:
								var idMLb = 'bmob0'+i+'L'+j+'P'+k;
								$('#' + idMLb).remove();
								var idMLsb = 'bmob0'+i+'L'+j+'P'+(k+1); // id da div do mob seguinte ao colidido
								var mLeftb = parseInt($('#' + idMLsb).css('margin-left'),10);
								mLeftb += 62;
								$('#' + idMLsb).css({'margin-left' : mLeftb});
								break;
							}
						}
					}
					//console.log('offLinha top:' + offLinha.top + ' , offLinha Left: ' + offLinha.left + ' , offTiro Top: ' + offTiro.top + ' , offTiro Left: + ' + offTiro.left );
				}
			}
		}else{
			for(var i = 3; i>= 1; i--){ 
				var idM = 'bmob0' + i; //id mob
				for(var j = 1; j <= 2;j++){ 
					idL = 'blinha' + j + 'mob' + i; //ID da linha
					offLinha = $('#' + idL).offset();
					offTiro = $('#' + tiros[idTiro]).offset();
					if(offTiro.top > offLinha.top && offTiro.top < (offLinha.top+32)){
						//console.log('Inside Line: ' + idL);
						for(var k = 1; k<=10; k++){
							var idML = 'bmob0'+i+'L'+j+'P'+k; // id da div do mob i da linha L
							var offMob = $('#' + idML).offset();
							//console.log('offMob left: ' + offMob.left + ' mob: ' + idML);
							if(offTiro.left>offMob.left && offTiro.left<(offMob.left+32)){
								console.log('Bummm no mob: ' + idML);
								clearInterval(tirosT[idTiro]);
								$('#' + tiros[idTiro]).remove();
								$('#' + idML).remove();
								//alinhas os mobs nao atingidos
								var idMLs = 'bmob0'+i+'L'+j+'P'+(k+1); // id da div do mob seguinte ao colidido
								var mLeft = parseInt($('#' + idMLs).css('margin-left'),10);
								mLeft += 62;
								$('#' + idMLs).css({'margin-left' : mLeft});
								//remover o mob do outro estado e alinhas os restantes mobs:
								var idMLa = 'amob0'+i+'L'+j+'P'+k;
								$('#' + idMLa).remove();
								var idMLsa = 'amob0'+i+'L'+j+'P'+(k+1); // id da div do mob seguinte ao colidido
								var mLefta = parseInt($('#' + idMLsa).css('margin-left'),10);
								mLefta += 62;
								$('#' + idMLsa).css({'margin-left' : mLefta});
								break;
							}
						}
					}
					//console.log('offLinha top:' + offLinha.top + ' , offLinha Left: ' + offLinha.left + ' , offTiro Top: ' + offTiro.top + ' , offTiro Left: + ' + offTiro.left );
				}
			}
		}
	}
	
	function gameOver(){
		for(var i = 0; i<=tirosT.length-1;i++){
			clearInterval(tirosT[i]); //limpa todos os setIntervals criados para os tiros
		}
		clearInterval(trocaMob);
		clearInterval(moveMobs);
		alert('GameOver');
	}
});