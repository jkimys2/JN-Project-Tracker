function displayTime() {
var date = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
$("#time").text(date);
};
displayTime();
setInterval(displayTime, 1000);