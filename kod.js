

/*function Tomte()
{
    
//    this.x = random(rityta.totalWidth-50) +50;
//    this.y = random(rityta.totalHeight-50) +50;
    this.x = random(500);
    this.y = random(400);
 //   alert("x och y " + this.x +" " + this.y);
    this.dead = false;
    this.nbrUpdates = 0;
    
    this.update = function()
    {
        this.nbrUpdates++;
        rityta.save();
        rityta.translate(this.x, this.y);
        rityta.circle(0,0,20,"red");
        rityta.restore();
    };
}
    
   
function start()
{
   rityta = new RoboroCanvas("canvas1");
 //   rityta.circle(100, 100, 20, "red");
    

    minTomte = [];
    minTomte[0] = new Tomte();
    tomteKilled = 0;
    loop = 0;
    minTomte[0].update();

    rityta.update = function()
    {
        rityta.fill("black");
        for (var i = 0; i < minTomte.length; i++)
        {
            var tempTomte = minTomte[i];
            if (!tempTomte.dead)
            {
                tempTomte.update();
                if (rityta.mouse.left)
                {
                    alert("mouse x y: " + rityta.mouse.x + " " + rityta.mouse.y + " tomte x y: " +tempTomte.x + " " + tempTomte.y);

//                if (rityta.mouse.left && (distance(rityta.mouse, tempTomte) < 20))
//                {
                    tomteKilled++;
                    tempTomte.dead = true;
                }
                if (tempTomte.nbrUpdates > 100)
                {
                    tempTomte.dead = true;  // Dölj igen
                    tomteKilled--;
                }
            }
        }
        loop++;
        if (loop % 20 == 0)
        {
            minTomte.push(new Tomte());
        }
        if (tomteKilled > 20)
        {
            rityta.text(100, rityta.totalHeight/2, 20, "Du vann", "green");
            rityta.stopUpdate();
        }
        if (tomteKilled < -10)
        {
            rityta.text(100, rityta.totalHeight/2, 20, "Looser", "red");
            rityta.stopUpdate();
        }
        rityta.text(100,100,20, "Tomtar killed " + tomteKilled, "white");
    };
}
 */

 var rityta = new RoboroCanvas("minCanvas");
  var ball= {x:10, y:10, xSpeed: 1, ySpeed:1};
  
/*  rityta.update = function()
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
  
*/


rityta.update = function()
{
    with(rityta)
    {
        if (mouse.left)
        {
            clearScreen();
            circle(mouse.x, mouse.y, 20, "red");
            text(10, 10, 10, mouse.x + " " + mouse.y , "black");
         }
    }
}

