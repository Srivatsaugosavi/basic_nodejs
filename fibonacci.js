function fibonacci(n) {
    if(n < 2) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n - 2);
    }
}


const nu = 8;

if(nu <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nu; i++) {
        console.log(fibonacci(i));
    }
}