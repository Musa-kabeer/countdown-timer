const timeEl = document.querySelector('.content');

let totalTime = 2 * 60 * 60 + 1;

function timer() {
     totalTime = totalTime - 1;

     const hours = `${Math.floor(totalTime / (60 * 60))}`.padStart(2, 0);
     const minutes = `${Math.floor((totalTime / 60) % 60)}`.padStart(2, 0);
     const seconds = `${Math.floor(totalTime % 60)}`.padStart(2, 0);

     timeEl.innerHTML = `${hours} : ${minutes} :  ${seconds}`;
}

// For instance execution

timer();
// For concurrency execution
setInterval(() => timer(), 1000);

console.log('akldhfi'.split('').sort((a, b) => a - b));
