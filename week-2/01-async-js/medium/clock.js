let i=0;

setInterval(() => {
    let s = i;
    let hours = Math.floor(s/3600);
    s%=3600;
    let minutes = Math.floor(s/60);
    s%=60;
    let seconds = s;

    console.log(`${hours} : ${minutes} : ${seconds}`);
    i++;
}, 1000);