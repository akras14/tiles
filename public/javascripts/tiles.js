;(function($){

    function getRandomLight() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor(){
        var red = getRandomLight();
        var green = getRandomLight();
        var blue = getRandomLight();
        var randomColor =  'rgb(' + red + ', ' + green + ', ' + blue + ')';
        return randomColor;
    }

    function addClickListenersToTiles() {
        $('.tile').each(function(){
            var tile = $(this);
            var backgroundChanged = false;
            tile.on('click', function(){
                if(backgroundChanged){
                    tile.css('background', '');
                    backgroundChanged = false;
                } else {
                    var randomColor = getRandomColor();
                    tile.css('background', randomColor);
                    backgroundChanged = true;
                }
            });
        });
    }

    $(document).ready(function(){
        addClickListenersToTiles();
    });

})(jQuery);