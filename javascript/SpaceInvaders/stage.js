SpaceInvaders.stage = {
    init: function(width, height) {
        this._width = width || '100%';
        this._height = height || '100%';
	this._fireHandler = $.proxy(this.fire, this);
	this.addEvent();
        return this;
    },
    render: function() {
        this._$html = $('<div class="stage"></div>');
        this._$html.css({
            width: this._width,
            height: this._height,
            overflow: 'hidden',
            position: 'relative'
        });

        $('#wrapper').append(this._$html);
        return this;
    },

    append: function(el) {
        this._$html.append(el);
        return this._$html;
    },
    
    getWidth : function(){
    	return this._width;
    },
    html: function() {
        return this._$html;
    },
    addEvent : function(){
    	$(window).on("onFire", this._fireHandler);
    },
	fire : function(){
    	var aud01 = $("#aud01")[0];
		aud01.pause();
		aud01.play();
    },
    dispose: function() {
    	$(window).off("onFire");
        if (this._$html){
            this._$html.remove();
            this._$html = null;
        }

    }
};
