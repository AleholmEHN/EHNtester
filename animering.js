  var rityta = new RoboroCanvas("minCanvas");
  var ball= {x:10, y:10, xSpeed: 1, ySpeed:1};
  
  rityta.update = function()
  {
      rityta.clearScreen();
    rityta.circle(ball.x, ball.y, 50, "red");
 //   ball.x++;
 //   ball.y++;
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
     if (ball.x > rityta.totalWidth || ball.x < 0)
        ball.xSpeed *= -1;
    else if (ball.y > rityta.totalHeight || ball.y < 0)
        ball.ySpeed *= -1;
  }
  
