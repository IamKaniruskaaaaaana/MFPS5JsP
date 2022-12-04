function preload() {
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "" ;
}

function draw() {
    image(video,0,0,500,500);
    tint(tint_color);
}
function take_snapshot() {
    save('Kani.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value
}