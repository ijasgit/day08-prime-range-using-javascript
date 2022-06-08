var num;
num = 33;

for (i = 2; i <= num; i++) {
    prime = true;

    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    if (prime == true) {
        console.log(+i);
    }
}
