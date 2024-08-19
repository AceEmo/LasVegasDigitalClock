function updateClock() {
    let lv = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

    let hours = lv.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = lv.getMinutes().toString().padStart(2, '0');
    const seconds = lv.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
