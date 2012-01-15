SpaceInvaders.enemy = {
    init: function(model, type) {
        this._model = model;
        this._type = type;
        this._destroyed = false;
        this._id = new Date().getTime();
    },
    
    getType: function() {
        return this._type;
    },
    
    getModel: function() {
        return this._model;
    },
    
    getLeft: function() {
    	return this._$html.css('left');
    },
    
    move: function(direction, amount) {
		var moveDirection = {
			top : function(amount){
				this._$html.css('top', this._$html.css('top') - amount);
			},
			left : function(amount){
				this._$html.css('left', this._$html.css('left') - amount);
			},
			right : function(amout){
				this._$html.css('left', this._$html.css('left') + amount);
			},
			bottom : function(amout){
				this._$html.css('top', this._$html.css('top') + amount);
			}
		}
		
		if(moveDirection[direction]){
			moveDirection[direction].call(this, direction, amount);
		}
		
		return this;
    },
    
    dance: function(nivel){
    	this._danceInterval = window.setInterval($.proxy(function(){
    		var mov = nivel.shift();
    		if(mov){ this.move(mov,5);}
    		else{ this.stopDance(); }
  		}, this), 1000)
    },
    
    stopDance : function(){
    	if(this._danceInterval){
    		window.clearInterval(this._danceInterval);
    	}
    	
    	return this;
    },
    
    isDestroyed: function() {
        return this._destroyed;
    },
    
    destroy: function() {
        this._$html.remove();
        this._destroyed = true;
        this.dispose();
    },
    
    fire: function() {},
    
    html: function() {
        return this._$html;
    },
    
    render: function() {
        if (!this._$html) {
            var $modelA = $('<div class="modelA ' + this.getType() + '"></div>'),
                $modelB = $('<div class="modelB ' + this.getType() + '"></div>'),
                modelA = this.getModel().a,
                modelB = this.getModel().b,
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

            this._$html = $('<div class="enemy ' + this.getType()+'"></div>').css({
                'position': 'absolute',
                width: SpaceInvaders.config.ENEMY_WIDTH,
                height: SpaceInvaders.config.ENEMY_HEIGHT
            });
            this._$html.append(createModel(modelA, $modelA));
            this._$html.append(createModel(modelB, $modelB));
        }

        return this._$html;
    },
    // o metodo dispose é para apagarmos inimigos da memoria
    dispose: function() {
    	this.stopDance();
    	if(this._$html){
    		this._$html.remove();
    		this._$html = null;
    	}
    	this._model = null;
    	this._destroyed = null;
    }
};
