var h = 0;
var v = 0;

var minW = 1280;
var minH = 800;


function Tomte()
{
    
//    this.x = random(rityta.totalWidth-50) +50;
//    this.y = random(rityta.totalHeight-50) +50;
    this.x = Math.random()*minW;
    this.y = Math.random()*minH;
 //   alert("x och y " + this.x +" " + this.y);
    this.dead = false;
    this.nbrUpdates = 0;
    
    
    this.update = function()
    {
        this.nbrUpdates++;
        with(rityta)
        {
            save();
            translate(this.x, this.y);
            circle(0,0,20,"red");
            restore();
        }
    };
}
    
var rityta = new RoboroCanvas("minCanvas");

function start()
{
//    rityta.width = window.innerWidth;
//    rityta.height = window.innerHeight;

    canv = document.getElementById('minCanvas');
    win = document.getElementById('wrapper');
    canv.height = minH;
    canv.width = minW;
//    $('#minCanvas').css("height", $(window).height() + "px");
//    $('#minCanvas').css("width", $(window).width() + "px");
    rityta = new RoboroCanvas("minCanvas");
    
    minTomte = [];
    minTomte[0] = new Tomte();
    var tomteKilled = 0;
    var loop = 0;
    minTomte[0].update();
    

    rityta.update = function()
    {
        with(rityta)
        {
            fill("black");
            for (var i = 0; i < minTomte.length; i++)
            {
                var tempTomte = minTomte[i];
                if (!tempTomte.dead)
                {
                    tempTomte.update();
                    with(rityta)
                    {

                        if (mouse.left && (distance(mouse, tempTomte) < 20))
                        {
                            tomteKilled++;
                            tempTomte.dead = true;

                        }
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
                text(100, 200, 20, "Du vann", "green");
                stopUpdate();
            }
            if (tomteKilled < -10)
            {
                text(100, 200, 20, "Looser", "red");
                stopUpdate();
            }
            text(50,50,20, "Tomtar killed " + tomteKilled, "white");
        }
    };
    
    
}

    
/*    rityta.update = function()
    {
        rityta.fill("black");
        for (var i = 0; i < minTomte.length; i++)
        {
            var tempTomte = minTomte[i];
            if (!tempTomte.dead)
            {
 //               tempTomte.update();
                with(rityta)
                {
                    if (mouse.left)
                    {
                        if (mouse.x >= 0 && mouse.y >= 0)
                        {
                            alert("X och Y: " + mouse.x + " " +mouse.y);
//                if (rityta.mouse.left && (distance(rityta.mouse, tempTomte) < 20))
//                {
                        tomteKilled++;
                        tempTomte.dead = true;
                        }
                    }
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
    };*/
//}

/*   
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

  
/*    minTomte = [];
    minTomte[0] = new Tomte(rityta);
    tomteKilled = 0;
    loop = 0;
    minTomte[0].update();*/

/*    rityta.update = function()
    {
        rityta.fill("black");
/*        for (var i = 0; i < minTomte.length; i++)
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
    }*/


