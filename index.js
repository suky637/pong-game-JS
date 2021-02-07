var _x = 10;
var _y = 10;

var game = 
{
    canvas: false,
    ctx: false,
    key: false,
    start: function()
    {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        setInterval(game.update, 1000/30);

        window.requestAnimationFrame(game.draw);
    },
    
    update: function()
    {
        //Code here
    },
    draw: function()
    {
        document.onkeypress = function(event)
        {
            key = String.fromCharCode(event.keyCode);
        }
        //EXAMPLE
        //game.drawRect(10, 10, 100, 200, 'red')
        //game.drawCercle(10, 10, 10, 'red')
        //Draw Here
        window.requestAnimationFrame(game.draw);
    },
    drawRect: function(x, y, width, height, color)
    {
        game.ctx.fillStyle = color;
        game.ctx.fillRect(x, y, width, height);
        game.ctx.save();
        game.ctx.beginPath();
    },
    drawCercle: function(x, y, rayon, color)
    {
        game.ctx.beginPath();
        game.ctx.arc(x, y, rayon, 0, 2*Math.PI);
        game.ctx.fillStyle = color;
        game.ctx.fill();
    },
    canvasParameter: function(width, height, style, color)
    {
        if (width == 0 && height == 0)
        {
            width = 800;
            height = 600;
        }
        this.canvas.style=style;
        this.canvas.height=height;
        this.canvas.width=width;
        this.canvas.style=style + "background-color: " + color;
    },
}