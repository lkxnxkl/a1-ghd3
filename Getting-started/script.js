window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    // Rectangle
    ctx.fillStyle = 'pink';
    ctx.fillRect(200, 100, 150, 100);

    // Line
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.lineTo(550, 200);
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Polygon (Triangle)
    ctx.beginPath();
    ctx.moveTo(650, 100);
    ctx.lineTo(700, 200);
    ctx.lineTo(600, 200);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'purple';
    ctx.stroke();
};
