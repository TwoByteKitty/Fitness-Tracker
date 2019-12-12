function getFormattedTime(){
    return moment().format("dddd, h:mm:ss a");
}

function timer(timeEl) {
    setInterval(() => {
        timeEl.html(getFormattedTime());
    }, 1000);
}

timer($(".dayNTime"));