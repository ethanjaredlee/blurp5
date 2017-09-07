speed = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background('#242949');
    translate(width/2, height/2);

    t = frameCount/speed;

    theta = TWO_PI * t;

    for (x = -windowWidth/2; x <= windowWidth/2; x += 25) {
        for (y = -100; y <= 155; y += 50) {
            offSet = 50*x + 2*y;

            x2 = map(cos(-theta+offSet), 0, 1, 0, 25);
            y2 = map(cos(-theta+offSet), 0, 1, 25, 0);
            size = map(sin(-theta+offSet), 0, 1, 15, 45);
            fill(250 - (x/2), 150 + (x/6), 250 - (y/5));
            fill(0, 0, 100);

            ellipse(x+x2, y-y2, size, size);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

