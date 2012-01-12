SpaceInvaders.player = {
    init: function(model, groupNumber) {
 		this._model = model;
        this._width;
        this._left = (SpaceInvaders.config.STAGE_WIDTH / 2) - ( SpaceInvaders.config.PLAYER_WIDTH / 2);
        this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * groupNumber) + 100;
        this._isFiring = false;
        this._isMoving = false;
        this._shoots = [];
        console.warn(this._top);
    },
    getModel: function() {
        return this._model;
    },
    
    getMoving: function(){
    	return this._isMoving;
    },
    
    getLeft: function(){
    	console.warn('inside getLeft() and _left : ' + this._left);
    	return this._left;
    },
    getShootsLength: function(){
    	return this._shoots.length;
    },
    getTop: function(){
    	return this._top;
    },
    
    setMoving: function(moving){
    	this._isMoving = moving;
    },
    render: function(){
    	 if (!this._$html) {
            var $spaceship = $('<div class="spaceship"></div>'),
                createModel = function(model, $modelContainer) {
                    var len = model.length,
                        i = 0,
                        j = 0,
                        color = "",
                        pLen = 0,
                        $p, p;
                    for (i = 0; i < len; i += 1) {
                        $p = $('<p></p>');
                        p = model[i];
                        pLen = p.length;

                        for (j = 0; j < pLen; j += 1) {
                            color = (p[j] === "p") ? "black" : "white";
                            $p.append('<span class="' + color + '">*</span>');
                        }

                        $modelContainer.append($p);
                    }

                    return $modelContainer;
                };

            this._$html = $('<div class="player"></div>').css({
                'position': 'absolute',
                'left' : this._left,
                'top' : this._top,
                width: SpaceInvaders.config.PLAYER_WIDTH,
                height: SpaceInvaders.config.PLAYER_HEIGHT
            });
            console.warn(this);
            this._$html.append(createModel(this._model, $spaceship));
        }

        return this._$html;
    },
    move: function(direction, amount) {
    	/*
    	 * 
    	 * TODO : verificação se sai do stage
    	 * 
    	 */
    	var moveDirection = {
			left : function(amount){
				this._$html.css('left', parseInt(this._$html.css('left'),10) - amount);
				this._left -= amount;
				//this._$html.animate({"left": "-=" +  amount}, "fast");
			},
			right : function(amout){
				this._$html.css('left', parseInt(this._$html.css('left'),10) + amount);
				this._left += amount;
				//this._$html.animate({"left": "+=" +  amount}, "fast");
			}
		}
		
		if(!moveDirection){
			return;
		}else if(this.getMoving()){
			moveDirection[direction].call(this, amount);
		}
		return this;
    },
    addEvent: function(){
    	$(window).on('keydown', function(evt){
			var keyID;
			if(window.event){
				keyID = evt.keyCode;
			}else if(evt.which){
				keyID = evt.which;
			}
			if(keyID==37){
				var direction = 'left';
			}else if(keyID == 39){
				var direction = 'right';
			}else if(keyID == 32){
				$(window).trigger('onFire');
				return;
			}else{
				return;
			}
			player.setMoving(true);
			player.move(direction,1);			
		});
		$(window).on('keyup', function(evt){
			var keyID;
			if(window.event){
				keyID = evt.keyCode;
			}else if(evt.which){
				keyID = evt.which;
			}
			if(keyID==37 || keyID==39){
				player.setMoving(false);
			}	
		});
		return this;
   	},
   	removeEvent : function(){
   		
   	},
    fire: function() {
       	this._shoots.push(SpaceInvaders.shoot.init(this.getLeft()));
        var i = this.getShootsLength()-1;
       	SpaceInvaders.stage.append(this._shoots[i].render());
       	this._shoots[i].move();
    },
    html: function() {},
    destroy: function() {},
    dispose: function() {}
};