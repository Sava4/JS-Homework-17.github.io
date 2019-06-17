
let number = parseInt(prompt('Please enter Fibonacci number you want to find, negative values allowed', '42'))

let fib = (f0 = 0, f1 = 1, n) => {
    if (n < 0) {
        return (fib (f1-f0, f0, n+1))
    } else if (n === 0) {
        return f0;
    } else {
        return (fib (f1, f0+f1, n-1));
    }
}


document.getElementById('main').innerHTML = `The Fibonacci ${number}th number is: ${fib(0, 1, number)}`;
