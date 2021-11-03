window.onload = function () {
    let display = document.getElementById("text-area");
    let animChoice = document.getElementById("animation");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let size = document.getElementById("fontsize");
    let turboSpeed = document.getElementById("turbo");

    let sizeChoice = {
        "Tiny": "tiny",
        "Small": "small",
        "Medium": "medium",
        "Large": "large",
        "Extra Large": "extra-large",
        "XXL": "xxl"
    }

    const DEFAULT_SPEED = 250;
    const TURBO_SPEED = 50;

    var intSpeed = DEFAULT_SPEED;

    var timer = null;
    var counter = 0;
    var animation = ANIMATIONS["blank"];

    var animate = function (speed) {
        if (animation.length > 0) {

            let frames = animation.split("=====\n")

            timer = setInterval(function () {
                display.textContent = frames[counter % (frames.length)];
                counter++;
            }, speed);
        }
    }

    var stopAnimation = function () {
        clearInterval(timer);
        timer = null;
        counter = 0;
    }

    display.textContent = animation;

    animChoice.onchange = function () {
        animation = ANIMATIONS[animChoice.value]
        display.textContent = animation;
    };

    size.onchange = function () {
        Object.values(contentSize).forEach(function (e) {
            display.classList.remove(e);
        })

        let size = contentSize[size.value];
        display.classList.add(size);
    };


    start.onclick = function () {

        stop.disabled = false;
        this.disabled = true;

        if (timer !== null){
            return;
        } 
        animate(intSpeed);
    };

    stop.onclick = function () {
        start.disabled = false;
        this.disabled = true;

        stopAnimation();
    };

    turboSpeed.onchange = function () {

        let speed = DEFAULT_SPEED;
        if (turboSpeed.checked == true){
            speed = TURBO_SPEED;
        } 

        if(timer != null) {
            stopAnimation();
            animate(speed);
        }
        else {
            intSpeed = speed;
        }
    }
}