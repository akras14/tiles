;(function($){

    function getRandomLight() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor(){
        var red = getRandomLight();
        var green = getRandomLight();
        var blue = getRandomLight();
        return {
            r: red,
            g: green,
            b: blue
        }
    }

    function getColorString(colors){
        var randomColor =  'rgb(' + colors.r + ', ' + colors.g + ', ' + colors.b + ')';
        return randomColor;
    }

    var tiles = (function(){

        var tiles = {};
        var WHITE_COLOR = {
            r: 255,
            g: 255,
            b: 255
        };

        function updateBackgroundFor($tile, index){
            return $tile.css('background', getColorString(tiles[index].color));
        }

        function initTiles(){
            $('.tile').each(function(index){
                tiles[index] = {
                    backgroundChanged: false,
                    color: WHITE_COLOR
                };
            });
        }

        function addTilesClickListener() {
            $('.tile').each(function(index){
                var $tile = $(this);
                $tile.on('click', function(){
                    if(tiles[index].backgroundChanged){
                        tiles[index].color = WHITE_COLOR;
                        tiles[index].backgroundChanged = false;
                    } else {
                        tiles[index].color = getRandomColor();
                        tiles[index].backgroundChanged = true;
                    }
                    updateBackgroundFor($tile, index);
                });
            });
        }

        function addClearClickListener() {
            $('.clear').on('click', function(){
                //1. Update tiles object
                $.each(tiles, function(index){
                    tiles[index].backgroundChanged = false;
                    tiles[index].color = WHITE_COLOR;
                });

                //2. Update view
                $('.tile').each(function(index){
                    var $tile = $(this);
                    updateBackgroundFor($tile, index);
                });
            });
        }
        return {
            init: function(){
                initTiles();
                addTilesClickListener();
                addClearClickListener();
            }
        }
    })();

    $(document).ready(function(){
        tiles.init();
    });

})(jQuery);