const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const numStars = 240;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3, 
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random(),           
      opacityChange: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1) 
    });
  }

  // Vẽ sao
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let star of stars) {
      star.opacity += star.opacityChange;
      if (star.opacity <= 0 || star.opacity >= 1) {
        star.opacityChange *= -1;
      }

      ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.x += star.dx;
      star.y += star.dy;

      if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
      if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    }

    requestAnimationFrame(drawStars);
  }

  drawStars();