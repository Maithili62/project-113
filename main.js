function preload()
{

}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
    {
        image(video,100,80,300,250);
    tint(tint_color);

    stroke(255,255,255);
    fill(100,15,255);
    stroke(255,255,255);
    circle(40,40,50);
    stroke(255,255,255);
    circle(460,40,50);
    stroke(255,255,255);
    circle(40,360,50);
    stroke(255,255,255);
    circle(460,360,50);
    stroke(255,255,255);


    stroke(0,0,0);
    fill(50, 168, 82);
    fill(255, 204, 0);
    rect(63, 27, 375, 25);
    fill(255, 204, 0);
    rect(63, 347, 375, 25);
    fill(255, 204, 0);
    rect(27, 63, 25, 275);
    fill(255, 204, 0);
    rect(448, 63, 25, 275);
    fill(255, 204, 0);
    }



function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}