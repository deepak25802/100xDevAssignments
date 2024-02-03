let i=1;

function counter() {
    console.log(i++);

    if(i<100)
        setTimeout(counter, 1000);
}

counter();