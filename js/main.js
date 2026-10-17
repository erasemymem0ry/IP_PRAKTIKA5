// чтобы по 2 цифры всегда занимали часы, минуты и секунды
const pad = n => String(n).padStart(2, '0');

function tic() {
    const now = new Date();

    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0);

    const left = Math.round((endOfDay - now) / 1000);

    const hours   = Math.floor(left / 3600);
    const minutes = Math.floor((left % 3600) / 60);
    const seconds = left % 60;

    document.getElementById('timer').textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

tic();
setInterval(tic, 1000);