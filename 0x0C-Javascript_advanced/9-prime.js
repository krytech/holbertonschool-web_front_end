function countPrimeNumbers() {
    let prime = [];

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 0; j < prime.length; j++) {
            if (i % prime[j] === 0) {
                isPrime = false;
            }
        }
        if (isPrime == true) {
            prime.push(i);
        }
    }
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.");
