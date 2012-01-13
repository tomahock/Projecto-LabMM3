SpaceInvaders.stage = {
    init: function(width, height) {
        this._width = width || '100%';
        this._height = height || '100%';
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
    dispose: function() {}
};
