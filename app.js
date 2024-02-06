function stopwatch(elem) {
    let time = 0;
    let offset;
    let interval;

    function lapOn() {
        let lapTime = lapBox.appendChild(document.createElement("li"));
        lapTime.innerHTML = timeFormatter(time);
        lapTime.classList = "lapItem";
    }

    function lapOff() {
        return;
    }

    function update() {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeFormatter(time);
    }

    function delta() {
        let now = Date.now();
        let timePassed = now - offset;

        offset = now;

        return timePassed;
    }

    function delta() {
        let now = Date.now();
        let timePassed = now - offset;
        offset = now;
        return timePassed;
    }
    
    function timeFormatter(time) {
        let hours = Math.floor(time / (60 * 60 * 1000)).toString().padStart(2, '0');
        let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
        let seconds = Math.floor((time % (60 * 1000)) / 1000).toString().padStart(2, '0');
        let milliseconds = (time % 1000).toString().padStart(3, '0');
        return `${hours} : ${minutes} : ${seconds} . ${milliseconds}`;
    }

    this.start = function () {
        elem.textContent = timeFormatter(0);
    
        interval = setInterval(() => {
            if (this.isOn) {
                time += delta();
            }
            elem.textContent = timeFormatter(time);
        }, 1);
    
        offset = Date.now();
        this.isOn = true;
    }; 

    this.stop = function () {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };

    this.reset = function () {
        time = 0;
        lapBox.innerHTML = "";
        interval = null;
        this.isOn = false;
        update();
    };

    this.lapOn = function () {
        lapOn();
    };

    this.lapOff = function () {
        lapOff();
    };

    this.isOn = false;
}
