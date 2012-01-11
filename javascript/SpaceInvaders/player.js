SpaceInvaders.player = {
    init: function(type) {
    	this._type = type;
        this._$html;
        this._width;
        this._isFiring;
        this._isMoving;
    },
    render: function(){
    	 if (!this._$html) {
            console.log(this);
            var $spaceship = $('<div class="spaceship"></div>'),
                createModel = function($modelContainer) {
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

            this._$html = $('<div class="enemy ' + this.getType() + '"></div>').css({
                'position': 'absolute',
                width: SpaceInvaders.config.ENEMY_WIDTH,
                height: SpaceInvaders.config.ENEMY_HEIGHT
            });
            this._$html.append(createModel(modelA, $modelA));
            this._$html.append(createModel(modelB, $modelB));
        }

        return this._$html;
    },
    move: function() {},
    fire: function() {},
    html: function() {},
    destroy: function() {},
    dispose: function() {}
};