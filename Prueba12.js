<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feliz Cumpleaños</title>
    <style>
        body {
            margin: 0;
            background-color: black;
            overflow: hidden;
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>

    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Función para dibujar globos
        function drawBalloon(x, y, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.moveTo(x, y + 30);
            ctx.lineTo(x, y + 80);
            ctx.stroke();
        }

        // Animación de globos subiendo
        let balloons = [];
        for (let i = 0; i < 10; i++) {
            balloons.push({
                x: Math.random() * canvas.width,
                y: canvas.height + Math.random() * 200,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                speed: Math.random() * 2 + 1
            });
        }

        function animateBalloons() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balloons.forEach((balloon) => {
                drawBalloon(balloon.x, balloon.y, balloon.color);
                balloon.y -= balloon.speed;
                if (balloon.y < -30) {
                    balloon.y = canvas.height + 30;
                }
            });

            // Mostrar mensaje de "Feliz Cumpleaños"
            ctx.fillStyle = "yellow";
            ctx.font = "50px Arial";
            ctx.textAlign = "center";
            ctx.fillText("¡Feliz Cumpleaños!", canvas.width / 2, 100);

            requestAnimationFrame(animateBalloons);
        }

        animateBalloons();
    </script>
</body>
</html>